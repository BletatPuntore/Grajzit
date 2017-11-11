"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

var ServerActions = function () {
  function ServerActions() {}

  ServerActions.prototype.put = function (pathString, data, onComplete, hash) {};

  ServerActions.prototype.merge = function (pathString, data, onComplete, hash) {};

  ServerActions.prototype.refreshAuthToken = function (token) {};

  ServerActions.prototype.onDisconnectPut = function (pathString, data, onComplete) {};

  ServerActions.prototype.onDisconnectMerge = function (pathString, data, onComplete) {};

  ServerActions.prototype.onDisconnectCancel = function (pathString, onComplete) {};

  ServerActions.prototype.reportStats = function (stats) {};
  return ServerActions;
}();
exports.ServerActions = ServerActions;