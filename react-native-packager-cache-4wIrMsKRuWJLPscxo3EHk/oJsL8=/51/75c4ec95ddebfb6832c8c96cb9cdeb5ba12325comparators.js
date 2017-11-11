"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../util/util");
function NAME_ONLY_COMPARATOR(left, right) {
    return util_1.nameCompare(left.name, right.name);
}
exports.NAME_ONLY_COMPARATOR = NAME_ONLY_COMPARATOR;
function NAME_COMPARATOR(left, right) {
    return util_1.nameCompare(left, right);
}
exports.NAME_COMPARATOR = NAME_COMPARATOR;