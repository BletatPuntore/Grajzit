"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

var constants = require("./constants");
var object = require("./object");
function makeNormalUrl(urlPart) {
    return constants.domainBase + constants.apiBaseUrl + urlPart;
}
exports.makeNormalUrl = makeNormalUrl;
function makeDownloadUrl(urlPart) {
    return constants.downloadBase + constants.apiBaseUrl + urlPart;
}
exports.makeDownloadUrl = makeDownloadUrl;
function makeUploadUrl(urlPart) {
    return constants.domainBase + constants.apiUploadBaseUrl + urlPart;
}
exports.makeUploadUrl = makeUploadUrl;
function makeQueryString(params) {
    var encode = encodeURIComponent;
    var queryPart = '?';
    object.forEach(params, function (key, val) {
        var nextPart = encode(key) + '=' + encode(val);
        queryPart = queryPart + nextPart + '&';
    });

    queryPart = queryPart.slice(0, -1);
    return queryPart;
}
exports.makeQueryString = makeQueryString;