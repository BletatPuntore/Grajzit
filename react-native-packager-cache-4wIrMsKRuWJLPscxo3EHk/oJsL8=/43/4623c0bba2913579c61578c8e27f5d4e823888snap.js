"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("@firebase/util");
var util_2 = require("../util/util");
var util_3 = require("@firebase/util");
var MAX_NODE;
function setMaxNode(val) {
    MAX_NODE = val;
}
exports.setMaxNode = setMaxNode;

exports.priorityHashText = function (priority) {
    if (typeof priority === 'number') return 'number:' + util_2.doubleToIEEE754String(priority);else return 'string:' + priority;
};

exports.validatePriorityNode = function (priorityNode) {
    if (priorityNode.isLeafNode()) {
        var val = priorityNode.val();
        util_1.assert(typeof val === 'string' || typeof val === 'number' || typeof val === 'object' && util_3.contains(val, '.sv'), 'Priority must be a string or number.');
    } else {
        util_1.assert(priorityNode === MAX_NODE || priorityNode.isEmpty(), 'priority of unexpected type.');
    }

    util_1.assert(priorityNode === MAX_NODE || priorityNode.getPriority().isEmpty(), "Priority nodes can't have a priority of their own.");
};