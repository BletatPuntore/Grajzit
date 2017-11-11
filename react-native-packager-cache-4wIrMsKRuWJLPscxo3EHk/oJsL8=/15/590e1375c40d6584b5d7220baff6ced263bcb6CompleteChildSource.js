"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CacheNode_1 = require("./CacheNode");

var NoCompleteChildSource_ = function () {
    function NoCompleteChildSource_() {}

    NoCompleteChildSource_.prototype.getCompleteChild = function (childKey) {
        return null;
    };

    NoCompleteChildSource_.prototype.getChildAfterChild = function (index, child, reverse) {
        return null;
    };
    return NoCompleteChildSource_;
}();
exports.NoCompleteChildSource_ = NoCompleteChildSource_;

exports.NO_COMPLETE_CHILD_SOURCE = new NoCompleteChildSource_();

var WriteTreeCompleteChildSource = function () {
    function WriteTreeCompleteChildSource(writes_, viewCache_, optCompleteServerCache_) {
        if (optCompleteServerCache_ === void 0) {
            optCompleteServerCache_ = null;
        }
        this.writes_ = writes_;
        this.viewCache_ = viewCache_;
        this.optCompleteServerCache_ = optCompleteServerCache_;
    }

    WriteTreeCompleteChildSource.prototype.getCompleteChild = function (childKey) {
        var node = this.viewCache_.getEventCache();
        if (node.isCompleteForChild(childKey)) {
            return node.getNode().getImmediateChild(childKey);
        } else {
            var serverNode = this.optCompleteServerCache_ != null ? new CacheNode_1.CacheNode(this.optCompleteServerCache_, true, false) : this.viewCache_.getServerCache();
            return this.writes_.calcCompleteChild(childKey, serverNode);
        }
    };

    WriteTreeCompleteChildSource.prototype.getChildAfterChild = function (index, child, reverse) {
        var completeServerData = this.optCompleteServerCache_ != null ? this.optCompleteServerCache_ : this.viewCache_.getCompleteServerSnap();
        var nodes = this.writes_.calcIndexedSlice(completeServerData, child, 1, reverse, index);
        if (nodes.length === 0) {
            return null;
        } else {
            return nodes[0];
        }
    };
    return WriteTreeCompleteChildSource;
}();
exports.WriteTreeCompleteChildSource = WriteTreeCompleteChildSource;