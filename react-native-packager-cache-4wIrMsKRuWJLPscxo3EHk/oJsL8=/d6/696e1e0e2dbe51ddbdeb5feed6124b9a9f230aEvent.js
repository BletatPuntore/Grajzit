"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("@firebase/util");

var DataEvent = function () {
    function DataEvent(eventType, eventRegistration, snapshot, prevName) {
        this.eventType = eventType;
        this.eventRegistration = eventRegistration;
        this.snapshot = snapshot;
        this.prevName = prevName;
    }

    DataEvent.prototype.getPath = function () {
        var ref = this.snapshot.getRef();
        if (this.eventType === 'value') {
            return ref.path;
        } else {
            return ref.getParent().path;
        }
    };

    DataEvent.prototype.getEventType = function () {
        return this.eventType;
    };

    DataEvent.prototype.getEventRunner = function () {
        return this.eventRegistration.getEventRunner(this);
    };

    DataEvent.prototype.toString = function () {
        return this.getPath().toString() + ':' + this.eventType + ':' + util_1.stringify(this.snapshot.exportVal());
    };
    return DataEvent;
}();
exports.DataEvent = DataEvent;
var CancelEvent = function () {
    function CancelEvent(eventRegistration, error, path) {
        this.eventRegistration = eventRegistration;
        this.error = error;
        this.path = path;
    }

    CancelEvent.prototype.getPath = function () {
        return this.path;
    };

    CancelEvent.prototype.getEventType = function () {
        return 'cancel';
    };

    CancelEvent.prototype.getEventRunner = function () {
        return this.eventRegistration.getEventRunner(this);
    };

    CancelEvent.prototype.toString = function () {
        return this.path.toString() + ':cancel';
    };
    return CancelEvent;
}();
exports.CancelEvent = CancelEvent;