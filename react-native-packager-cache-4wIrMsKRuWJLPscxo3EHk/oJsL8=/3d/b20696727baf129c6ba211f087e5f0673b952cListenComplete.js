"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Path_1 = require("../util/Path");
var Operation_1 = require("./Operation");

var ListenComplete = function () {
    function ListenComplete(source, path) {
        this.source = source;
        this.path = path;

        this.type = Operation_1.OperationType.LISTEN_COMPLETE;
    }
    ListenComplete.prototype.operationForChild = function (childName) {
        if (this.path.isEmpty()) {
            return new ListenComplete(this.source, Path_1.Path.Empty);
        } else {
            return new ListenComplete(this.source, this.path.popFront());
        }
    };
    return ListenComplete;
}();
exports.ListenComplete = ListenComplete;