"use strict";
exports.__esModule = true;
exports.backend = void 0;
var nerdamer = require("nerdamer");
var backend = /** @class */ (function () {
    function backend() {
    }
    backend.parse = function (expr) {
        var result = nerdamer(expr);
        console.log(result);
        return 1.0;
    };
    return backend;
}());
exports.backend = backend;
