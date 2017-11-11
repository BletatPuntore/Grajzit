"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SortedMap_1 = require("../util/SortedMap");
var SortedMap_2 = require("../util/SortedMap");
var LOG_2 = Math.log(2);

var Base12Num = function () {
    function Base12Num(length) {
        var logBase2 = function logBase2(num) {
            return parseInt(Math.log(num) / LOG_2, 10);
        };
        var bitMask = function bitMask(bits) {
            return parseInt(Array(bits + 1).join('1'), 2);
        };
        this.count = logBase2(length + 1);
        this.current_ = this.count - 1;
        var mask = bitMask(this.count);
        this.bits_ = length + 1 & mask;
    }

    Base12Num.prototype.nextBitIsOne = function () {
        var result = !(this.bits_ & 0x1 << this.current_);
        this.current_--;
        return result;
    };
    return Base12Num;
}();

exports.buildChildSet = function (childList, cmp, keyFn, mapSortFn) {
    childList.sort(cmp);
    var buildBalancedTree = function buildBalancedTree(low, high) {
        var length = high - low;
        var namedNode;
        var key;
        if (length == 0) {
            return null;
        } else if (length == 1) {
            namedNode = childList[low];
            key = keyFn ? keyFn(namedNode) : namedNode;
            return new SortedMap_1.LLRBNode(key, namedNode.node, SortedMap_1.LLRBNode.BLACK, null, null);
        } else {
            var middle = parseInt(length / 2, 10) + low;
            var left = buildBalancedTree(low, middle);
            var right = buildBalancedTree(middle + 1, high);
            namedNode = childList[middle];
            key = keyFn ? keyFn(namedNode) : namedNode;
            return new SortedMap_1.LLRBNode(key, namedNode.node, SortedMap_1.LLRBNode.BLACK, left, right);
        }
    };
    var buildFrom12Array = function buildFrom12Array(base12) {
        var node = null;
        var root = null;
        var index = childList.length;
        var buildPennant = function buildPennant(chunkSize, color) {
            var low = index - chunkSize;
            var high = index;
            index -= chunkSize;
            var childTree = buildBalancedTree(low + 1, high);
            var namedNode = childList[low];
            var key = keyFn ? keyFn(namedNode) : namedNode;
            attachPennant(new SortedMap_1.LLRBNode(key, namedNode.node, color, null, childTree));
        };
        var attachPennant = function attachPennant(pennant) {
            if (node) {
                node.left = pennant;
                node = pennant;
            } else {
                root = pennant;
                node = pennant;
            }
        };
        for (var i = 0; i < base12.count; ++i) {
            var isOne = base12.nextBitIsOne();

            var chunkSize = Math.pow(2, base12.count - (i + 1));
            if (isOne) {
                buildPennant(chunkSize, SortedMap_1.LLRBNode.BLACK);
            } else {
                buildPennant(chunkSize, SortedMap_1.LLRBNode.BLACK);
                buildPennant(chunkSize, SortedMap_1.LLRBNode.RED);
            }
        }
        return root;
    };
    var base12 = new Base12Num(childList.length);
    var root = buildFrom12Array(base12);
    return new SortedMap_2.SortedMap(mapSortFn || cmp, root);
};