"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

function jsonEval(str) {
  return JSON.parse(str);
}
exports.jsonEval = jsonEval;

function stringify(data) {
  return JSON.stringify(data);
}
exports.stringify = stringify;