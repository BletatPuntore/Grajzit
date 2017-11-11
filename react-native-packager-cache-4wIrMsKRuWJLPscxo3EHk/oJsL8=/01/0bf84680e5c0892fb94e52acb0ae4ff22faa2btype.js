"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

function isDef(p) {
    return p != null;
}
exports.isDef = isDef;
function isJustDef(p) {
    return p !== void 0;
}
exports.isJustDef = isJustDef;
function isFunction(p) {
    return typeof p === 'function';
}
exports.isFunction = isFunction;
function isObject(p) {
    return typeof p === 'object';
}
exports.isObject = isObject;
function isNonNullObject(p) {
    return isObject(p) && p !== null;
}
exports.isNonNullObject = isNonNullObject;
function isNonArrayObject(p) {
    return isObject(p) && !Array.isArray(p);
}
exports.isNonArrayObject = isNonArrayObject;
function isString(p) {
    return typeof p === 'string' || p instanceof String;
}
exports.isString = isString;
function isNumber(p) {
    return typeof p === 'number' || p instanceof Number;
}
exports.isNumber = isNumber;
function isNativeBlob(p) {
    return isNativeBlobDefined() && p instanceof Blob;
}
exports.isNativeBlob = isNativeBlob;
function isNativeBlobDefined() {
    return typeof Blob !== 'undefined';
}
exports.isNativeBlobDefined = isNativeBlobDefined;