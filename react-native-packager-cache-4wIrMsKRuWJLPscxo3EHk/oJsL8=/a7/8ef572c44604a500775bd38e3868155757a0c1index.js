"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("@firebase/app");
var string_1 = require("./src/implementation/string");
var taskenums_1 = require("./src/implementation/taskenums");
var taskenums_2 = require("./src/implementation/taskenums");
var xhriopool_1 = require("./src/implementation/xhriopool");
var reference_1 = require("./src/reference");
var service_1 = require("./src/service");

var STORAGE_TYPE = 'storage';
function factory(app, unused, opt_url) {
    return new service_1.Service(app, new xhriopool_1.XhrIoPool(), opt_url);
}
function registerStorage(instance) {
    var namespaceExports = {
        TaskState: taskenums_2.TaskState,
        TaskEvent: taskenums_1.TaskEvent,
        StringFormat: string_1.StringFormat,
        Storage: service_1.Service,
        Reference: reference_1.Reference
    };
    instance.INTERNAL.registerService(STORAGE_TYPE, factory, namespaceExports, undefined, true);
}
exports.registerStorage = registerStorage;
registerStorage(app_1.default);