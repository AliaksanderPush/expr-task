"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseController = void 0;
var express_1 = require("express");
var BaseController = /** @class */ (function () {
    function BaseController() {
        this._router = (0, express_1.Router)();
    }
    Object.defineProperty(BaseController.prototype, "router", {
        get: function () {
            return this._router;
        },
        enumerable: false,
        configurable: true
    });
    BaseController.prototype.send = function (res, code, message) {
        res.status(code);
        return res.type('application/json').json(message);
    };
    BaseController.prototype.ok = function (res, message) {
        return this.send(res, 200, message);
    };
    BaseController.prototype.created = function (res) {
        return res.sendStatus(201);
    };
    BaseController.prototype.bindRouters = function (routers) {
        for (var _i = 0, routers_1 = routers; _i < routers_1.length; _i++) {
            var router = routers_1[_i];
            console.log("[".concat(router.methot, "] ").concat(router.path));
            var handler = router.func.bind(this);
            this.router[router.methot](router.path, handler);
        }
    };
    return BaseController;
}());
exports.BaseController = BaseController;
