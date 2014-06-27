(function(global){
    var app = global.app = global.app || {};
    
  /*  document.addEventListener("deviceready", function () {
        navigator.splashscreen.hide();

        app.application = new kendo.mobile.Application(document.body, { layout: "tabstrip-layout" });
    }, false);*/
    
    app.application = new kendo.mobile.Application(document.body,{transition:'slide',layout:'blood-donnar',skin:'flat'});
    
    //initialize everlive sdk
     app.el = new Everlive({
         					apiKey: appSettings.everlive.apiKey,
                              scheme: appSettings.everlive.scheme
     });
    
     app.showAlert = function(message, title, callback) {
        navigator.notification.alert(message, callback || function () {
        }, title, 'OK');
    };

    app.showError = function(message) {
        showAlert(message, 'Error occured');
    };
})(window);