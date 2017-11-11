
var __global = function () {
    if (typeof global !== 'undefined') {
        return global;
    }
    if (typeof window !== 'undefined') {
        return window;
    }
    if (typeof self !== 'undefined') {
        return self;
    }
    throw new Error('unable to locate global object');
}();

if (typeof Promise === 'undefined') {
    __global['Promise'] = Promise = require('promise-polyfill');
}