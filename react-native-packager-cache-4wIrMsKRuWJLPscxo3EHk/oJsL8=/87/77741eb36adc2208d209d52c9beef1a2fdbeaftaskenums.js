"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskEvent = {
    STATE_CHANGED: 'state_changed'
};
exports.InternalTaskState = {
    RUNNING: 'running',
    PAUSING: 'pausing',
    PAUSED: 'paused',
    SUCCESS: 'success',
    CANCELING: 'canceling',
    CANCELED: 'canceled',
    ERROR: 'error'
};
exports.TaskState = {
    RUNNING: 'running',

    PAUSED: 'paused',

    SUCCESS: 'success',

    CANCELED: 'canceled',

    ERROR: 'error'
};
function taskStateFromInternalTaskState(state) {
    switch (state) {
        case exports.InternalTaskState.RUNNING:
        case exports.InternalTaskState.PAUSING:
        case exports.InternalTaskState.CANCELING:
            return exports.TaskState.RUNNING;
        case exports.InternalTaskState.PAUSED:
            return exports.TaskState.PAUSED;
        case exports.InternalTaskState.SUCCESS:
            return exports.TaskState.SUCCESS;
        case exports.InternalTaskState.CANCELED:
            return exports.TaskState.CANCELED;
        case exports.InternalTaskState.ERROR:
            return exports.TaskState.ERROR;
        default:
            return exports.TaskState.ERROR;
    }
}
exports.taskStateFromInternalTaskState = taskStateFromInternalTaskState;