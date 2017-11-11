"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

var object = require("./object");
var constants = require("./constants");

var RequestMap = function () {
    function RequestMap() {
        this.map_ = {};
        this.id_ = constants.minSafeInteger;
    }

    RequestMap.prototype.addRequest = function (r) {
        var id = this.id_;
        this.id_++;
        this.map_[id] = r;
        var self = this;
        function unmap() {
            delete self.map_[id];
        }
        r.getPromise().then(unmap, unmap);
    };

    RequestMap.prototype.clear = function () {
        object.forEach(this.map_, function (key, val) {
            if (val) {
                val.cancel(true);
            }
        });
        this.map_ = {};
    };
    return RequestMap;
}();
exports.RequestMap = RequestMap;