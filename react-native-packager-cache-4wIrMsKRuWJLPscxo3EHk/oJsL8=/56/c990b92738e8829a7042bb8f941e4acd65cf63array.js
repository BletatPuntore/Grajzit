"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

function contains(array, elem) {
  return array.indexOf(elem) !== -1;
}
exports.contains = contains;

function clone(arraylike) {
  return Array.prototype.slice.call(arraylike);
}
exports.clone = clone;

function remove(array, elem) {
  var i = array.indexOf(elem);
  if (i !== -1) {
    array.splice(i, 1);
  }
}
exports.remove = remove;