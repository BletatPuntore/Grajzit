"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Deferred = function () {
    function Deferred() {
        var _this = this;
        this.promise = new Promise(function (resolve, reject) {
            _this.resolve = resolve;
            _this.reject = reject;
        });
    }

    Deferred.prototype.wrapCallback = function (callback) {
        var _this = this;
        return function (error, value) {
            if (error) {
                _this.reject(error);
            } else {
                _this.resolve(value);
            }
            if (typeof callback === 'function') {
                _this.promise.catch(function () {});

                if (callback.length === 1) {
                    callback(error);
                } else {
                    callback(error, value);
                }
            }
        };
    };
    return Deferred;
}();
exports.Deferred = Deferred;