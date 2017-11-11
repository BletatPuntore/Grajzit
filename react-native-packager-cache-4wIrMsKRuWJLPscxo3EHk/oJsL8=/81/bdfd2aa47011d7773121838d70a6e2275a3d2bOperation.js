"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("@firebase/util");

var OperationType;
(function (OperationType) {
  OperationType[OperationType["OVERWRITE"] = 0] = "OVERWRITE";
  OperationType[OperationType["MERGE"] = 1] = "MERGE";
  OperationType[OperationType["ACK_USER_WRITE"] = 2] = "ACK_USER_WRITE";
  OperationType[OperationType["LISTEN_COMPLETE"] = 3] = "LISTEN_COMPLETE";
})(OperationType = exports.OperationType || (exports.OperationType = {}));

var OperationSource = function () {
  function OperationSource(fromUser, fromServer, queryId, tagged) {
    this.fromUser = fromUser;
    this.fromServer = fromServer;
    this.queryId = queryId;
    this.tagged = tagged;
    util_1.assert(!tagged || fromServer, 'Tagged queries must be from server.');
  }

  OperationSource.User = new OperationSource(true, false, null, false);

  OperationSource.Server = new OperationSource(false, true, null, false);

  OperationSource.forServerTaggedQuery = function (queryId) {
    return new OperationSource(false, true, queryId, true);
  };
  return OperationSource;
}();
exports.OperationSource = OperationSource;