"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ChildrenNode_1 = require("../snap/ChildrenNode");
var CacheNode_1 = require("./CacheNode");

var ViewCache = function () {
  function ViewCache(eventCache_, serverCache_) {
    this.eventCache_ = eventCache_;
    this.serverCache_ = serverCache_;
  }

  ViewCache.prototype.updateEventSnap = function (eventSnap, complete, filtered) {
    return new ViewCache(new CacheNode_1.CacheNode(eventSnap, complete, filtered), this.serverCache_);
  };

  ViewCache.prototype.updateServerSnap = function (serverSnap, complete, filtered) {
    return new ViewCache(this.eventCache_, new CacheNode_1.CacheNode(serverSnap, complete, filtered));
  };

  ViewCache.prototype.getEventCache = function () {
    return this.eventCache_;
  };

  ViewCache.prototype.getCompleteEventSnap = function () {
    return this.eventCache_.isFullyInitialized() ? this.eventCache_.getNode() : null;
  };

  ViewCache.prototype.getServerCache = function () {
    return this.serverCache_;
  };

  ViewCache.prototype.getCompleteServerSnap = function () {
    return this.serverCache_.isFullyInitialized() ? this.serverCache_.getNode() : null;
  };

  ViewCache.Empty = new ViewCache(new CacheNode_1.CacheNode(ChildrenNode_1.ChildrenNode.EMPTY_NODE, false, false), new CacheNode_1.CacheNode(ChildrenNode_1.ChildrenNode.EMPTY_NODE, false, false));
  return ViewCache;
}();
exports.ViewCache = ViewCache;