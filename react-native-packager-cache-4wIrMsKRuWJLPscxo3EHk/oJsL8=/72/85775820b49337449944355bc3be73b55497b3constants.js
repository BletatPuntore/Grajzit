"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

exports.domainBase = 'https://firebasestorage.googleapis.com';

exports.downloadBase = 'https://firebasestorage.googleapis.com';

exports.apiBaseUrl = '/v0';

exports.apiUploadBaseUrl = '/v0';
function setDomainBase(domainBase) {
  domainBase = domainBase;
}
exports.setDomainBase = setDomainBase;
exports.configOption = 'storageBucket';

exports.shortMaxOperationRetryTime = 1 * 60 * 1000;

exports.defaultMaxOperationRetryTime = 2 * 60 * 1000;

exports.defaultMaxUploadRetryTime = 10 * 60 * 100;

exports.minSafeInteger = -9007199254740991;