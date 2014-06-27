(function (global) {
    var LoginViewModel,
        app = global.app = global.app || {};

    LoginViewModel = kendo.data.ObservableObject.extend({
        Username: "",
        Password: "",

        onlogin: function () {
            var that = this,
                username = that.get("Username").trim(),
                password = that.get("Password").trim();

            if (username === "" || password === "") {
                navigator.notification.alert("Both fields are required!",
                    function () { }, "Login failed", 'OK');
            }
            else if(username === "vijay" && password === "mittal")
            {
                app.application.navigate("views/Home.html");
            }
            else
            {
                navigator.notification.alert("Password Mismatch",
                    function () { }, "Login failed", 'OK');
            }
        },
        clearForm: function () {
            var that = this;

            that.set("username", "");
            that.set("password", "");
        },
        checkEnter: function (e) {
            var that = this;

            if (e.keyCode == 13) {
                $(e.target).blur();
                that.onLogin();
            }
        }
    });

    app.loginService = {
        viewModel: new LoginViewModel()
    };
})(window);