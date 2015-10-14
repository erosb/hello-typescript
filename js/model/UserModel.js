var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "backbone"], function (require, exports, Backbone) {
    var UserModel = (function (_super) {
        __extends(UserModel, _super);
        function UserModel() {
            _super.apply(this, arguments);
        }
        Object.defineProperty(UserModel.prototype, "firstName", {
            get: function () { return this.get("firstName"); },
            set: function (firstName) { this.set("firstName", firstName); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UserModel.prototype, "lastName", {
            get: function () { return this.get("lastName"); },
            set: function (lastName) { this.set("lastName", lastName); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UserModel.prototype, "fullName", {
            get: function () {
                return this.firstName + " " + this.lastName;
            },
            enumerable: true,
            configurable: true
        });
        UserModel.prototype.defaults = function () {
            return {
                firstName: "Foo",
                lastName: "Bar"
            };
        };
        UserModel.prototype.initialize = function (attributes) {
            var _this = this;
            if (attributes === void 0) { attributes = {}; }
            this.on("change:firstName change:lastName", function () { return _this.set("fullName", _this.fullName); });
        };
        return UserModel;
    })(Backbone.Model);
    return UserModel;
});
