"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Node_1 = require("../snap/Node");
var Change_1 = require("./Change");
var util_1 = require("@firebase/util");

var EventGenerator = function () {
    function EventGenerator(query_) {
        this.query_ = query_;

        this.index_ = this.query_.getQueryParams().getIndex();
    }

    EventGenerator.prototype.generateEventsForChanges = function (changes, eventCache, eventRegistrations) {
        var _this = this;
        var events = [];
        var moves = [];
        changes.forEach(function (change) {
            if (change.type === Change_1.Change.CHILD_CHANGED && _this.index_.indexedValueChanged(change.oldSnap, change.snapshotNode)) {
                moves.push(Change_1.Change.childMovedChange(change.childName, change.snapshotNode));
            }
        });
        this.generateEventsForType_(events, Change_1.Change.CHILD_REMOVED, changes, eventRegistrations, eventCache);
        this.generateEventsForType_(events, Change_1.Change.CHILD_ADDED, changes, eventRegistrations, eventCache);
        this.generateEventsForType_(events, Change_1.Change.CHILD_MOVED, moves, eventRegistrations, eventCache);
        this.generateEventsForType_(events, Change_1.Change.CHILD_CHANGED, changes, eventRegistrations, eventCache);
        this.generateEventsForType_(events, Change_1.Change.VALUE, changes, eventRegistrations, eventCache);
        return events;
    };

    EventGenerator.prototype.generateEventsForType_ = function (events, eventType, changes, registrations, eventCache) {
        var _this = this;
        var filteredChanges = changes.filter(function (change) {
            return change.type === eventType;
        });
        filteredChanges.sort(this.compareChanges_.bind(this));
        filteredChanges.forEach(function (change) {
            var materializedChange = _this.materializeSingleChange_(change, eventCache);
            registrations.forEach(function (registration) {
                if (registration.respondsTo(change.type)) {
                    events.push(registration.createEvent(materializedChange, _this.query_));
                }
            });
        });
    };

    EventGenerator.prototype.materializeSingleChange_ = function (change, eventCache) {
        if (change.type === 'value' || change.type === 'child_removed') {
            return change;
        } else {
            change.prevName = eventCache.getPredecessorChildName(change.childName, change.snapshotNode, this.index_);
            return change;
        }
    };

    EventGenerator.prototype.compareChanges_ = function (a, b) {
        if (a.childName == null || b.childName == null) {
            throw util_1.assertionError('Should only compare child_ events.');
        }
        var aWrapped = new Node_1.NamedNode(a.childName, a.snapshotNode);
        var bWrapped = new Node_1.NamedNode(b.childName, b.snapshotNode);
        return this.index_.compare(aWrapped, bWrapped);
    };
    return EventGenerator;
}();
exports.EventGenerator = EventGenerator;