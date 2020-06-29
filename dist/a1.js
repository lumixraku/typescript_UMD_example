(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var A1 = /** @class */ (function () {
        function A1() {
        }
        A1.AAA = "///////////";
        return A1;
    }());
    exports.default = A1;
});
//# sourceMappingURL=a1.js.map