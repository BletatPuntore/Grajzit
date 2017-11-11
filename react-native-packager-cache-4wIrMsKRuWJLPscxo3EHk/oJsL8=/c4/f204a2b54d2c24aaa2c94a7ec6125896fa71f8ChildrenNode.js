"use strict";

var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("@firebase/util");
var util_2 = require("../util/util");
var SortedMap_1 = require("../util/SortedMap");
var Node_1 = require("./Node");
var snap_1 = require("./snap");
var PriorityIndex_1 = require("./indexes/PriorityIndex");
var KeyIndex_1 = require("./indexes/KeyIndex");
var IndexMap_1 = require("./IndexMap");
var LeafNode_1 = require("./LeafNode");
var comparators_1 = require("./comparators");

var EMPTY_NODE;

var ChildrenNode = function () {
    function ChildrenNode(children_, priorityNode_, indexMap_) {
        this.children_ = children_;
        this.priorityNode_ = priorityNode_;
        this.indexMap_ = indexMap_;
        this.lazyHash_ = null;

        if (this.priorityNode_) {
            snap_1.validatePriorityNode(this.priorityNode_);
        }
        if (this.children_.isEmpty()) {
            util_1.assert(!this.priorityNode_ || this.priorityNode_.isEmpty(), 'An empty node cannot have a priority');
        }
    }
    Object.defineProperty(ChildrenNode, "EMPTY_NODE", {
        get: function get() {
            return EMPTY_NODE || (EMPTY_NODE = new ChildrenNode(new SortedMap_1.SortedMap(comparators_1.NAME_COMPARATOR), null, IndexMap_1.IndexMap.Default));
        },
        enumerable: true,
        configurable: true
    });

    ChildrenNode.prototype.isLeafNode = function () {
        return false;
    };

    ChildrenNode.prototype.getPriority = function () {
        return this.priorityNode_ || EMPTY_NODE;
    };

    ChildrenNode.prototype.updatePriority = function (newPriorityNode) {
        if (this.children_.isEmpty()) {
            return this;
        } else {
            return new ChildrenNode(this.children_, newPriorityNode, this.indexMap_);
        }
    };

    ChildrenNode.prototype.getImmediateChild = function (childName) {
        if (childName === '.priority') {
            return this.getPriority();
        } else {
            var child = this.children_.get(childName);
            return child === null ? EMPTY_NODE : child;
        }
    };

    ChildrenNode.prototype.getChild = function (path) {
        var front = path.getFront();
        if (front === null) return this;
        return this.getImmediateChild(front).getChild(path.popFront());
    };

    ChildrenNode.prototype.hasChild = function (childName) {
        return this.children_.get(childName) !== null;
    };

    ChildrenNode.prototype.updateImmediateChild = function (childName, newChildNode) {
        util_1.assert(newChildNode, 'We should always be passing snapshot nodes');
        if (childName === '.priority') {
            return this.updatePriority(newChildNode);
        } else {
            var namedNode = new Node_1.NamedNode(childName, newChildNode);
            var newChildren = void 0,
                newIndexMap = void 0,
                newPriority = void 0;
            if (newChildNode.isEmpty()) {
                newChildren = this.children_.remove(childName);
                newIndexMap = this.indexMap_.removeFromIndexes(namedNode, this.children_);
            } else {
                newChildren = this.children_.insert(childName, newChildNode);
                newIndexMap = this.indexMap_.addToIndexes(namedNode, this.children_);
            }
            newPriority = newChildren.isEmpty() ? EMPTY_NODE : this.priorityNode_;
            return new ChildrenNode(newChildren, newPriority, newIndexMap);
        }
    };

    ChildrenNode.prototype.updateChild = function (path, newChildNode) {
        var front = path.getFront();
        if (front === null) {
            return newChildNode;
        } else {
            util_1.assert(path.getFront() !== '.priority' || path.getLength() === 1, '.priority must be the last token in a path');
            var newImmediateChild = this.getImmediateChild(front).updateChild(path.popFront(), newChildNode);
            return this.updateImmediateChild(front, newImmediateChild);
        }
    };

    ChildrenNode.prototype.isEmpty = function () {
        return this.children_.isEmpty();
    };

    ChildrenNode.prototype.numChildren = function () {
        return this.children_.count();
    };

    ChildrenNode.prototype.val = function (exportFormat) {
        if (this.isEmpty()) return null;
        var obj = {};
        var numKeys = 0,
            maxKey = 0,
            allIntegerKeys = true;
        this.forEachChild(PriorityIndex_1.PRIORITY_INDEX, function (key, childNode) {
            obj[key] = childNode.val(exportFormat);
            numKeys++;
            if (allIntegerKeys && ChildrenNode.INTEGER_REGEXP_.test(key)) {
                maxKey = Math.max(maxKey, Number(key));
            } else {
                allIntegerKeys = false;
            }
        });
        if (!exportFormat && allIntegerKeys && maxKey < 2 * numKeys) {
            var array = [];
            for (var key in obj) {
                array[key] = obj[key];
            }return array;
        } else {
            if (exportFormat && !this.getPriority().isEmpty()) {
                obj['.priority'] = this.getPriority().val();
            }
            return obj;
        }
    };

    ChildrenNode.prototype.hash = function () {
        if (this.lazyHash_ === null) {
            var toHash_1 = '';
            if (!this.getPriority().isEmpty()) toHash_1 += 'priority:' + snap_1.priorityHashText(this.getPriority().val()) + ':';
            this.forEachChild(PriorityIndex_1.PRIORITY_INDEX, function (key, childNode) {
                var childHash = childNode.hash();
                if (childHash !== '') toHash_1 += ':' + key + ':' + childHash;
            });
            this.lazyHash_ = toHash_1 === '' ? '' : util_2.sha1(toHash_1);
        }
        return this.lazyHash_;
    };

    ChildrenNode.prototype.getPredecessorChildName = function (childName, childNode, index) {
        var idx = this.resolveIndex_(index);
        if (idx) {
            var predecessor = idx.getPredecessorKey(new Node_1.NamedNode(childName, childNode));
            return predecessor ? predecessor.name : null;
        } else {
            return this.children_.getPredecessorKey(childName);
        }
    };

    ChildrenNode.prototype.getFirstChildName = function (indexDefinition) {
        var idx = this.resolveIndex_(indexDefinition);
        if (idx) {
            var minKey = idx.minKey();
            return minKey && minKey.name;
        } else {
            return this.children_.minKey();
        }
    };

    ChildrenNode.prototype.getFirstChild = function (indexDefinition) {
        var minKey = this.getFirstChildName(indexDefinition);
        if (minKey) {
            return new Node_1.NamedNode(minKey, this.children_.get(minKey));
        } else {
            return null;
        }
    };

    ChildrenNode.prototype.getLastChildName = function (indexDefinition) {
        var idx = this.resolveIndex_(indexDefinition);
        if (idx) {
            var maxKey = idx.maxKey();
            return maxKey && maxKey.name;
        } else {
            return this.children_.maxKey();
        }
    };

    ChildrenNode.prototype.getLastChild = function (indexDefinition) {
        var maxKey = this.getLastChildName(indexDefinition);
        if (maxKey) {
            return new Node_1.NamedNode(maxKey, this.children_.get(maxKey));
        } else {
            return null;
        }
    };

    ChildrenNode.prototype.forEachChild = function (index, action) {
        var idx = this.resolveIndex_(index);
        if (idx) {
            return idx.inorderTraversal(function (wrappedNode) {
                return action(wrappedNode.name, wrappedNode.node);
            });
        } else {
            return this.children_.inorderTraversal(action);
        }
    };

    ChildrenNode.prototype.getIterator = function (indexDefinition) {
        return this.getIteratorFrom(indexDefinition.minPost(), indexDefinition);
    };

    ChildrenNode.prototype.getIteratorFrom = function (startPost, indexDefinition) {
        var idx = this.resolveIndex_(indexDefinition);
        if (idx) {
            return idx.getIteratorFrom(startPost, function (key) {
                return key;
            });
        } else {
            var iterator = this.children_.getIteratorFrom(startPost.name, Node_1.NamedNode.Wrap);
            var next = iterator.peek();
            while (next != null && indexDefinition.compare(next, startPost) < 0) {
                iterator.getNext();
                next = iterator.peek();
            }
            return iterator;
        }
    };

    ChildrenNode.prototype.getReverseIterator = function (indexDefinition) {
        return this.getReverseIteratorFrom(indexDefinition.maxPost(), indexDefinition);
    };

    ChildrenNode.prototype.getReverseIteratorFrom = function (endPost, indexDefinition) {
        var idx = this.resolveIndex_(indexDefinition);
        if (idx) {
            return idx.getReverseIteratorFrom(endPost, function (key) {
                return key;
            });
        } else {
            var iterator = this.children_.getReverseIteratorFrom(endPost.name, Node_1.NamedNode.Wrap);
            var next = iterator.peek();
            while (next != null && indexDefinition.compare(next, endPost) > 0) {
                iterator.getNext();
                next = iterator.peek();
            }
            return iterator;
        }
    };

    ChildrenNode.prototype.compareTo = function (other) {
        if (this.isEmpty()) {
            if (other.isEmpty()) {
                return 0;
            } else {
                return -1;
            }
        } else if (other.isLeafNode() || other.isEmpty()) {
            return 1;
        } else if (other === exports.MAX_NODE) {
            return -1;
        } else {
            return 0;
        }
    };

    ChildrenNode.prototype.withIndex = function (indexDefinition) {
        if (indexDefinition === KeyIndex_1.KEY_INDEX || this.indexMap_.hasIndex(indexDefinition)) {
            return this;
        } else {
            var newIndexMap = this.indexMap_.addIndex(indexDefinition, this.children_);
            return new ChildrenNode(this.children_, this.priorityNode_, newIndexMap);
        }
    };

    ChildrenNode.prototype.isIndexed = function (index) {
        return index === KeyIndex_1.KEY_INDEX || this.indexMap_.hasIndex(index);
    };

    ChildrenNode.prototype.equals = function (other) {
        if (other === this) {
            return true;
        } else if (other.isLeafNode()) {
            return false;
        } else {
            var otherChildrenNode = other;
            if (!this.getPriority().equals(otherChildrenNode.getPriority())) {
                return false;
            } else if (this.children_.count() === otherChildrenNode.children_.count()) {
                var thisIter = this.getIterator(PriorityIndex_1.PRIORITY_INDEX);
                var otherIter = otherChildrenNode.getIterator(PriorityIndex_1.PRIORITY_INDEX);
                var thisCurrent = thisIter.getNext();
                var otherCurrent = otherIter.getNext();
                while (thisCurrent && otherCurrent) {
                    if (thisCurrent.name !== otherCurrent.name || !thisCurrent.node.equals(otherCurrent.node)) {
                        return false;
                    }
                    thisCurrent = thisIter.getNext();
                    otherCurrent = otherIter.getNext();
                }
                return thisCurrent === null && otherCurrent === null;
            } else {
                return false;
            }
        }
    };

    ChildrenNode.prototype.resolveIndex_ = function (indexDefinition) {
        if (indexDefinition === KeyIndex_1.KEY_INDEX) {
            return null;
        } else {
            return this.indexMap_.get(indexDefinition.toString());
        }
    };

    ChildrenNode.INTEGER_REGEXP_ = /^(0|[1-9]\d*)$/;
    return ChildrenNode;
}();
exports.ChildrenNode = ChildrenNode;

var MaxNode = function (_super) {
    __extends(MaxNode, _super);
    function MaxNode() {
        return _super.call(this, new SortedMap_1.SortedMap(comparators_1.NAME_COMPARATOR), ChildrenNode.EMPTY_NODE, IndexMap_1.IndexMap.Default) || this;
    }
    MaxNode.prototype.compareTo = function (other) {
        if (other === this) {
            return 0;
        } else {
            return 1;
        }
    };
    MaxNode.prototype.equals = function (other) {
        return other === this;
    };
    MaxNode.prototype.getPriority = function () {
        return this;
    };
    MaxNode.prototype.getImmediateChild = function (childName) {
        return ChildrenNode.EMPTY_NODE;
    };
    MaxNode.prototype.isEmpty = function () {
        return false;
    };
    return MaxNode;
}(ChildrenNode);
exports.MaxNode = MaxNode;

exports.MAX_NODE = new MaxNode();
Object.defineProperties(Node_1.NamedNode, {
    MIN: {
        value: new Node_1.NamedNode(util_2.MIN_NAME, ChildrenNode.EMPTY_NODE)
    },
    MAX: {
        value: new Node_1.NamedNode(util_2.MAX_NAME, exports.MAX_NODE)
    }
});

KeyIndex_1.KeyIndex.__EMPTY_NODE = ChildrenNode.EMPTY_NODE;
LeafNode_1.LeafNode.__childrenNodeConstructor = ChildrenNode;
snap_1.setMaxNode(exports.MAX_NODE);
PriorityIndex_1.setMaxNode(exports.MAX_NODE);