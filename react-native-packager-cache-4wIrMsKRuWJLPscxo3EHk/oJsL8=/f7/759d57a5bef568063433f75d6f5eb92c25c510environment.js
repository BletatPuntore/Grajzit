"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./constants");

exports.getUA = function () {
    if (typeof navigator !== 'undefined' && typeof navigator['userAgent'] === 'string') {
        return navigator['userAgent'];
    } else {
        return '';
    }
};

exports.isMobileCordova = function () {
    return typeof window !== 'undefined' && !!(window['cordova'] || window['phonegap'] || window['PhoneGap']) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(exports.getUA());
};

exports.isReactNative = function () {
    return typeof navigator === 'object' && navigator['product'] === 'ReactNative';
};

exports.isNodeSdk = function () {
    return constants_1.CONSTANTS.NODE_CLIENT === true || constants_1.CONSTANTS.NODE_ADMIN === true;
};