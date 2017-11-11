"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("./assert");

exports.stringToByteArray = function (str) {
    var out = [],
        p = 0;
    for (var i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);

        if (c >= 0xd800 && c <= 0xdbff) {
            var high = c - 0xd800;
            i++;
            assert_1.assert(i < str.length, 'Surrogate pair missing trail surrogate.');
            var low = str.charCodeAt(i) - 0xdc00;
            c = 0x10000 + (high << 10) + low;
        }
        if (c < 128) {
            out[p++] = c;
        } else if (c < 2048) {
            out[p++] = c >> 6 | 192;
            out[p++] = c & 63 | 128;
        } else if (c < 65536) {
            out[p++] = c >> 12 | 224;
            out[p++] = c >> 6 & 63 | 128;
            out[p++] = c & 63 | 128;
        } else {
            out[p++] = c >> 18 | 240;
            out[p++] = c >> 12 & 63 | 128;
            out[p++] = c >> 6 & 63 | 128;
            out[p++] = c & 63 | 128;
        }
    }
    return out;
};

exports.stringLength = function (str) {
    var p = 0;
    for (var i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        if (c < 128) {
            p++;
        } else if (c < 2048) {
            p += 2;
        } else if (c >= 0xd800 && c <= 0xdbff) {
            p += 4;
            i++;
        } else {
            p += 3;
        }
    }
    return p;
};