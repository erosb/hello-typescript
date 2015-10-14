define(["require", "exports", "jquery", "view/UserView", "model/UserModel"], function (require, exports, $, UserView, UserModel) {
    function app() {
        $("body").append(new UserView({ model: new UserModel() }).render().$el);
    }
    return app;
});
