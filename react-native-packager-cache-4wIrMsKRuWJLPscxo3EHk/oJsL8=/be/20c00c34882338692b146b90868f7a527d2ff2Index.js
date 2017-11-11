"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Node_1 = require("../Node");
var util_1 = require("../../util/util");

var Index = function () {
  function Index() {}

  Index.prototype.getCompare = function () {
    return this.compare.bind(this);
  };

  Index.prototype.indexedValueChanged = function (oldNode, newNode) {
    var oldWrapped = new Node_1.NamedNode(util_1.MIN_NAME, oldNode);
    var newWrapped = new Node_1.NamedNode(util_1.MIN_NAME, newNode);
    return this.compare(oldWrapped, newWrapped) !== 0;
  };

  Index.prototype.minPost = function () {
    return Node_1.NamedNode.MIN;
  };
  return Index;
}();
exports.Index = Index;