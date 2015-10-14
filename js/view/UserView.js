/// <amd-dependency path="text!../template/UserView.html" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "backbone", "handlebars", "text!../template/UserView.html"], function (require, exports, Backbone, Handlebars) {
    var template = require("text!../template/UserView.html");
    var UserView = (function (_super) {
        __extends(UserView, _super);
        function UserView() {
            _super.apply(this, arguments);
        }
        UserView.prototype.initialize = function (options) {
            if (options === void 0) { options = {}; }
            this.template = Handlebars.compile(template);
            options.model.on("change", this.updateFullName.bind(this));
        };
        UserView.prototype.events = function () {
            return {
                "keyup [name=firstName],[name=lastName]": "nameTextChanged"
            };
        };
        UserView.prototype.nameTextChanged = function () {
            this.model.set({
                firstName: this.$("[name=firstName]").val(),
                lastName: this.$("[name=lastName]").val()
            });
        };
        UserView.prototype.updateFullName = function () {
            this.$("#userName").text(this.model.fullName);
        };
        UserView.prototype.render = function () {
            this.$el.html(this.template({
                firstName: this.model.firstName,
                lastName: this.model.lastName,
                fullName: this.model.fullName
            }));
            return this;
        };
        return UserView;
    })(Backbone.View);
    return UserView;
});
