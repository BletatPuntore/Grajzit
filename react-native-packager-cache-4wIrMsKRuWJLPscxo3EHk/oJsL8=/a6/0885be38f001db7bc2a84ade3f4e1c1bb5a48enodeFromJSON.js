"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ChildrenNode_1 = require("./ChildrenNode");
var LeafNode_1 = require("./LeafNode");
var Node_1 = require("./Node");
var util_1 = require("@firebase/util");
var util_2 = require("@firebase/util");
var childSet_1 = require("./childSet");
var comparators_1 = require("./comparators");
var IndexMap_1 = require("./IndexMap");
var PriorityIndex_1 = require("./indexes/PriorityIndex");
var USE_HINZE = true;

function nodeFromJSON(json, priority) {
    if (priority === void 0) {
        priority = null;
    }
    if (json === null) {
        return ChildrenNode_1.ChildrenNode.EMPTY_NODE;
    }
    if (typeof json === 'object' && '.priority' in json) {
        priority = json['.priority'];
    }
    util_2.assert(priority === null || typeof priority === 'string' || typeof priority === 'number' || typeof priority === 'object' && '.sv' in priority, 'Invalid priority type found: ' + typeof priority);
    if (typeof json === 'object' && '.value' in json && json['.value'] !== null) {
        json = json['.value'];
    }

    if (typeof json !== 'object' || '.sv' in json) {
        var jsonLeaf = json;
        return new LeafNode_1.LeafNode(jsonLeaf, nodeFromJSON(priority));
    }
    if (!(json instanceof Array) && USE_HINZE) {
        var children_1 = [];
        var childrenHavePriority_1 = false;
        var hinzeJsonObj_1 = json;
        util_1.forEach(hinzeJsonObj_1, function (key, child) {
            if (typeof key !== 'string' || key.substring(0, 1) !== '.') {
                var childNode = nodeFromJSON(hinzeJsonObj_1[key]);
                if (!childNode.isEmpty()) {
                    childrenHavePriority_1 = childrenHavePriority_1 || !childNode.getPriority().isEmpty();
                    children_1.push(new Node_1.NamedNode(key, childNode));
                }
            }
        });
        if (children_1.length == 0) {
            return ChildrenNode_1.ChildrenNode.EMPTY_NODE;
        }
        var childSet = childSet_1.buildChildSet(children_1, comparators_1.NAME_ONLY_COMPARATOR, function (namedNode) {
            return namedNode.name;
        }, comparators_1.NAME_COMPARATOR);
        if (childrenHavePriority_1) {
            var sortedChildSet = childSet_1.buildChildSet(children_1, PriorityIndex_1.PRIORITY_INDEX.getCompare());
            return new ChildrenNode_1.ChildrenNode(childSet, nodeFromJSON(priority), new IndexMap_1.IndexMap({ '.priority': sortedChildSet }, { '.priority': PriorityIndex_1.PRIORITY_INDEX }));
        } else {
            return new ChildrenNode_1.ChildrenNode(childSet, nodeFromJSON(priority), IndexMap_1.IndexMap.Default);
        }
    } else {
        var node_1 = ChildrenNode_1.ChildrenNode.EMPTY_NODE;
        var jsonObj_1 = json;
        util_1.forEach(jsonObj_1, function (key, childData) {
            if (util_1.contains(jsonObj_1, key)) {
                if (key.substring(0, 1) !== '.') {
                    var childNode = nodeFromJSON(childData);
                    if (childNode.isLeafNode() || !childNode.isEmpty()) node_1 = node_1.updateImmediateChild(key, childNode);
                }
            }
        });
        return node_1.updatePriority(nodeFromJSON(priority));
    }
}
exports.nodeFromJSON = nodeFromJSON;
PriorityIndex_1.setNodeFromJSON(nodeFromJSON);