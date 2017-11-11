"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../core/util/util");
var CountedSet_1 = require("../core/util/CountedSet");
var StatsManager_1 = require("../core/stats/StatsManager");
var PacketReceiver_1 = require("./polling/PacketReceiver");
var Constants_1 = require("./Constants");
var util_2 = require("@firebase/util");
var util_3 = require("@firebase/util");

exports.FIREBASE_LONGPOLL_START_PARAM = 'start';
exports.FIREBASE_LONGPOLL_CLOSE_COMMAND = 'close';
exports.FIREBASE_LONGPOLL_COMMAND_CB_NAME = 'pLPCommand';
exports.FIREBASE_LONGPOLL_DATA_CB_NAME = 'pRTLPCB';
exports.FIREBASE_LONGPOLL_ID_PARAM = 'id';
exports.FIREBASE_LONGPOLL_PW_PARAM = 'pw';
exports.FIREBASE_LONGPOLL_SERIAL_PARAM = 'ser';
exports.FIREBASE_LONGPOLL_CALLBACK_ID_PARAM = 'cb';
exports.FIREBASE_LONGPOLL_SEGMENT_NUM_PARAM = 'seg';
exports.FIREBASE_LONGPOLL_SEGMENTS_IN_PACKET = 'ts';
exports.FIREBASE_LONGPOLL_DATA_PARAM = 'd';
exports.FIREBASE_LONGPOLL_DISCONN_FRAME_PARAM = 'disconn';
exports.FIREBASE_LONGPOLL_DISCONN_FRAME_REQUEST_PARAM = 'dframe';

var MAX_URL_DATA_SIZE = 1870;
var SEG_HEADER_SIZE = 30;
var MAX_PAYLOAD_SIZE = MAX_URL_DATA_SIZE - SEG_HEADER_SIZE;

var KEEPALIVE_REQUEST_INTERVAL = 25000;

var LP_CONNECT_TIMEOUT = 30000;

var BrowserPollConnection = function () {
    function BrowserPollConnection(connId, repoInfo, transportSessionId, lastSessionId) {
        this.connId = connId;
        this.repoInfo = repoInfo;
        this.transportSessionId = transportSessionId;
        this.lastSessionId = lastSessionId;
        this.bytesSent = 0;
        this.bytesReceived = 0;
        this.everConnected_ = false;
        this.log_ = util_1.logWrapper(connId);
        this.stats_ = StatsManager_1.StatsManager.getCollection(repoInfo);
        this.urlFn = function (params) {
            return repoInfo.connectionURL(Constants_1.LONG_POLLING, params);
        };
    }

    BrowserPollConnection.prototype.open = function (onMessage, onDisconnect) {
        var _this = this;
        this.curSegmentNum = 0;
        this.onDisconnect_ = onDisconnect;
        this.myPacketOrderer = new PacketReceiver_1.PacketReceiver(onMessage);
        this.isClosed_ = false;
        this.connectTimeoutTimer_ = setTimeout(function () {
            _this.log_('Timed out trying to connect.');

            _this.onClosed_();
            _this.connectTimeoutTimer_ = null;
        }, Math.floor(LP_CONNECT_TIMEOUT));

        util_1.executeWhenDOMReady(function () {
            if (_this.isClosed_) return;

            _this.scriptTagHolder = new FirebaseIFrameScriptHolder(function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var command = args[0],
                    arg1 = args[1],
                    arg2 = args[2],
                    arg3 = args[3],
                    arg4 = args[4];
                _this.incrementIncomingBytes_(args);
                if (!_this.scriptTagHolder) return;
                if (_this.connectTimeoutTimer_) {
                    clearTimeout(_this.connectTimeoutTimer_);
                    _this.connectTimeoutTimer_ = null;
                }
                _this.everConnected_ = true;
                if (command == exports.FIREBASE_LONGPOLL_START_PARAM) {
                    _this.id = arg1;
                    _this.password = arg2;
                } else if (command === exports.FIREBASE_LONGPOLL_CLOSE_COMMAND) {
                    if (arg1) {
                        _this.scriptTagHolder.sendNewPolls = false;

                        _this.myPacketOrderer.closeAfter(arg1, function () {
                            _this.onClosed_();
                        });
                    } else {
                        _this.onClosed_();
                    }
                } else {
                    throw new Error('Unrecognized command received: ' + command);
                }
            }, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var pN = args[0],
                    data = args[1];
                _this.incrementIncomingBytes_(args);
                _this.myPacketOrderer.handleResponse(pN, data);
            }, function () {
                _this.onClosed_();
            }, _this.urlFn);

            var urlParams = {};
            urlParams[exports.FIREBASE_LONGPOLL_START_PARAM] = 't';
            urlParams[exports.FIREBASE_LONGPOLL_SERIAL_PARAM] = Math.floor(Math.random() * 100000000);
            if (_this.scriptTagHolder.uniqueCallbackIdentifier) urlParams[exports.FIREBASE_LONGPOLL_CALLBACK_ID_PARAM] = _this.scriptTagHolder.uniqueCallbackIdentifier;
            urlParams[Constants_1.VERSION_PARAM] = Constants_1.PROTOCOL_VERSION;
            if (_this.transportSessionId) {
                urlParams[Constants_1.TRANSPORT_SESSION_PARAM] = _this.transportSessionId;
            }
            if (_this.lastSessionId) {
                urlParams[Constants_1.LAST_SESSION_PARAM] = _this.lastSessionId;
            }
            if (!util_3.isNodeSdk() && typeof location !== 'undefined' && location.href && location.href.indexOf(Constants_1.FORGE_DOMAIN) !== -1) {
                urlParams[Constants_1.REFERER_PARAM] = Constants_1.FORGE_REF;
            }
            var connectURL = _this.urlFn(urlParams);
            _this.log_('Connecting via long-poll to ' + connectURL);
            _this.scriptTagHolder.addTag(connectURL, function () {});
        });
    };

    BrowserPollConnection.prototype.start = function () {
        this.scriptTagHolder.startLongPoll(this.id, this.password);
        this.addDisconnectPingFrame(this.id, this.password);
    };

    BrowserPollConnection.forceAllow = function () {
        BrowserPollConnection.forceAllow_ = true;
    };

    BrowserPollConnection.forceDisallow = function () {
        BrowserPollConnection.forceDisallow_ = true;
    };

    BrowserPollConnection.isAvailable = function () {
        return BrowserPollConnection.forceAllow_ || !BrowserPollConnection.forceDisallow_ && typeof document !== 'undefined' && document.createElement != null && !util_1.isChromeExtensionContentScript() && !util_1.isWindowsStoreApp() && !util_3.isNodeSdk();
    };

    BrowserPollConnection.prototype.markConnectionHealthy = function () {};

    BrowserPollConnection.prototype.shutdown_ = function () {
        this.isClosed_ = true;
        if (this.scriptTagHolder) {
            this.scriptTagHolder.close();
            this.scriptTagHolder = null;
        }

        if (this.myDisconnFrame) {
            document.body.removeChild(this.myDisconnFrame);
            this.myDisconnFrame = null;
        }
        if (this.connectTimeoutTimer_) {
            clearTimeout(this.connectTimeoutTimer_);
            this.connectTimeoutTimer_ = null;
        }
    };

    BrowserPollConnection.prototype.onClosed_ = function () {
        if (!this.isClosed_) {
            this.log_('Longpoll is closing itself');
            this.shutdown_();
            if (this.onDisconnect_) {
                this.onDisconnect_(this.everConnected_);
                this.onDisconnect_ = null;
            }
        }
    };

    BrowserPollConnection.prototype.close = function () {
        if (!this.isClosed_) {
            this.log_('Longpoll is being closed.');
            this.shutdown_();
        }
    };

    BrowserPollConnection.prototype.send = function (data) {
        var dataStr = util_2.stringify(data);
        this.bytesSent += dataStr.length;
        this.stats_.incrementCounter('bytes_sent', dataStr.length);

        var base64data = util_2.base64Encode(dataStr);

        var dataSegs = util_1.splitStringBySize(base64data, MAX_PAYLOAD_SIZE);

        for (var i = 0; i < dataSegs.length; i++) {
            this.scriptTagHolder.enqueueSegment(this.curSegmentNum, dataSegs.length, dataSegs[i]);
            this.curSegmentNum++;
        }
    };

    BrowserPollConnection.prototype.addDisconnectPingFrame = function (id, pw) {
        if (util_3.isNodeSdk()) return;
        this.myDisconnFrame = document.createElement('iframe');
        var urlParams = {};
        urlParams[exports.FIREBASE_LONGPOLL_DISCONN_FRAME_REQUEST_PARAM] = 't';
        urlParams[exports.FIREBASE_LONGPOLL_ID_PARAM] = id;
        urlParams[exports.FIREBASE_LONGPOLL_PW_PARAM] = pw;
        this.myDisconnFrame.src = this.urlFn(urlParams);
        this.myDisconnFrame.style.display = 'none';
        document.body.appendChild(this.myDisconnFrame);
    };

    BrowserPollConnection.prototype.incrementIncomingBytes_ = function (args) {
        var bytesReceived = util_2.stringify(args).length;
        this.bytesReceived += bytesReceived;
        this.stats_.incrementCounter('bytes_received', bytesReceived);
    };
    return BrowserPollConnection;
}();
exports.BrowserPollConnection = BrowserPollConnection;

var FirebaseIFrameScriptHolder = function () {
    function FirebaseIFrameScriptHolder(commandCB, onMessageCB, onDisconnect, urlFn) {
        this.onDisconnect = onDisconnect;
        this.urlFn = urlFn;

        this.outstandingRequests = new CountedSet_1.CountedSet();

        this.pendingSegs = [];

        this.currentSerial = Math.floor(Math.random() * 100000000);

        this.sendNewPolls = true;
        if (!util_3.isNodeSdk()) {
            this.uniqueCallbackIdentifier = util_1.LUIDGenerator();
            window[exports.FIREBASE_LONGPOLL_COMMAND_CB_NAME + this.uniqueCallbackIdentifier] = commandCB;
            window[exports.FIREBASE_LONGPOLL_DATA_CB_NAME + this.uniqueCallbackIdentifier] = onMessageCB;

            this.myIFrame = FirebaseIFrameScriptHolder.createIFrame_();

            var script = '';

            if (this.myIFrame.src && this.myIFrame.src.substr(0, 'javascript:'.length) === 'javascript:') {
                var currentDomain = document.domain;
                script = '<script>document.domain="' + currentDomain + '";</script>';
            }
            var iframeContents = '<html><body>' + script + '</body></html>';
            try {
                this.myIFrame.doc.open();
                this.myIFrame.doc.write(iframeContents);
                this.myIFrame.doc.close();
            } catch (e) {
                util_1.log('frame writing exception');
                if (e.stack) {
                    util_1.log(e.stack);
                }
                util_1.log(e);
            }
        } else {
            this.commandCB = commandCB;
            this.onMessageCB = onMessageCB;
        }
    }

    FirebaseIFrameScriptHolder.createIFrame_ = function () {
        var iframe = document.createElement('iframe');
        iframe.style.display = 'none';

        if (document.body) {
            document.body.appendChild(iframe);
            try {
                var a = iframe.contentWindow.document;
                if (!a) {
                    util_1.log('No IE domain setting required');
                }
            } catch (e) {
                var domain = document.domain;
                iframe.src = "javascript:void((function(){document.open();document.domain='" + domain + "';document.close();})())";
            }
        } else {
            throw 'Document body has not initialized. Wait to initialize Firebase until after the document is ready.';
        }

        if (iframe.contentDocument) {
            iframe.doc = iframe.contentDocument;
        } else if (iframe.contentWindow) {
            iframe.doc = iframe.contentWindow.document;
        } else if (iframe.document) {
            iframe.doc = iframe.document;
        }
        return iframe;
    };

    FirebaseIFrameScriptHolder.prototype.close = function () {
        var _this = this;

        this.alive = false;
        if (this.myIFrame) {
            this.myIFrame.doc.body.innerHTML = '';
            setTimeout(function () {
                if (_this.myIFrame !== null) {
                    document.body.removeChild(_this.myIFrame);
                    _this.myIFrame = null;
                }
            }, Math.floor(0));
        }
        if (util_3.isNodeSdk() && this.myID) {
            var urlParams = {};
            urlParams[exports.FIREBASE_LONGPOLL_DISCONN_FRAME_PARAM] = 't';
            urlParams[exports.FIREBASE_LONGPOLL_ID_PARAM] = this.myID;
            urlParams[exports.FIREBASE_LONGPOLL_PW_PARAM] = this.myPW;
            var theURL = this.urlFn(urlParams);
            FirebaseIFrameScriptHolder.nodeRestRequest(theURL);
        }

        var onDisconnect = this.onDisconnect;
        if (onDisconnect) {
            this.onDisconnect = null;
            onDisconnect();
        }
    };

    FirebaseIFrameScriptHolder.prototype.startLongPoll = function (id, pw) {
        this.myID = id;
        this.myPW = pw;
        this.alive = true;

        while (this.newRequest_()) {}
    };

    FirebaseIFrameScriptHolder.prototype.newRequest_ = function () {
        if (this.alive && this.sendNewPolls && this.outstandingRequests.count() < (this.pendingSegs.length > 0 ? 2 : 1)) {
            this.currentSerial++;
            var urlParams = {};
            urlParams[exports.FIREBASE_LONGPOLL_ID_PARAM] = this.myID;
            urlParams[exports.FIREBASE_LONGPOLL_PW_PARAM] = this.myPW;
            urlParams[exports.FIREBASE_LONGPOLL_SERIAL_PARAM] = this.currentSerial;
            var theURL = this.urlFn(urlParams);

            var curDataString = '';
            var i = 0;
            while (this.pendingSegs.length > 0) {
                var nextSeg = this.pendingSegs[0];
                if (nextSeg.d.length + SEG_HEADER_SIZE + curDataString.length <= MAX_URL_DATA_SIZE) {
                    var theSeg = this.pendingSegs.shift();
                    curDataString = curDataString + '&' + exports.FIREBASE_LONGPOLL_SEGMENT_NUM_PARAM + i + '=' + theSeg.seg + '&' + exports.FIREBASE_LONGPOLL_SEGMENTS_IN_PACKET + i + '=' + theSeg.ts + '&' + exports.FIREBASE_LONGPOLL_DATA_PARAM + i + '=' + theSeg.d;
                    i++;
                } else {
                    break;
                }
            }
            theURL = theURL + curDataString;
            this.addLongPollTag_(theURL, this.currentSerial);
            return true;
        } else {
            return false;
        }
    };

    FirebaseIFrameScriptHolder.prototype.enqueueSegment = function (segnum, totalsegs, data) {
        this.pendingSegs.push({ seg: segnum, ts: totalsegs, d: data });

        if (this.alive) {
            this.newRequest_();
        }
    };

    FirebaseIFrameScriptHolder.prototype.addLongPollTag_ = function (url, serial) {
        var _this = this;

        this.outstandingRequests.add(serial, 1);
        var doNewRequest = function doNewRequest() {
            _this.outstandingRequests.remove(serial);
            _this.newRequest_();
        };

        var keepaliveTimeout = setTimeout(doNewRequest, Math.floor(KEEPALIVE_REQUEST_INTERVAL));
        var readyStateCB = function readyStateCB() {
            clearTimeout(keepaliveTimeout);

            doNewRequest();
        };
        this.addTag(url, readyStateCB);
    };

    FirebaseIFrameScriptHolder.prototype.addTag = function (url, loadCB) {
        var _this = this;
        if (util_3.isNodeSdk()) {
            this.doNodeLongPoll(url, loadCB);
        } else {
            setTimeout(function () {
                try {
                    if (!_this.sendNewPolls) return;
                    var newScript_1 = _this.myIFrame.doc.createElement('script');
                    newScript_1.type = 'text/javascript';
                    newScript_1.async = true;
                    newScript_1.src = url;
                    newScript_1.onload = newScript_1.onreadystatechange = function () {
                        var rstate = newScript_1.readyState;
                        if (!rstate || rstate === 'loaded' || rstate === 'complete') {
                            newScript_1.onload = newScript_1.onreadystatechange = null;
                            if (newScript_1.parentNode) {
                                newScript_1.parentNode.removeChild(newScript_1);
                            }
                            loadCB();
                        }
                    };
                    newScript_1.onerror = function () {
                        util_1.log('Long-poll script failed to load: ' + url);
                        _this.sendNewPolls = false;
                        _this.close();
                    };
                    _this.myIFrame.doc.body.appendChild(newScript_1);
                } catch (e) {}
            }, Math.floor(1));
        }
    };
    return FirebaseIFrameScriptHolder;
}();
exports.FirebaseIFrameScriptHolder = FirebaseIFrameScriptHolder;