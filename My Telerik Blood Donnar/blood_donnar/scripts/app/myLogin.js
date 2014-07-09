var app = app || {};

app.Login = (function(){
    
    var LoginViewModel = (function(){
        
        var login = function(){
             var username = $("#LoginUsername").val();
             var password = $("#LoginPassword").val();

              // Authenticate using the username and password
              app.el.Users.login(username, password)
              .then(function () {
                  app.application.navigate('views/Home.html');
                })
                .then(null,
                      function (err) {
                          navigator.notification.alert(err.message, function(){}, 'Login', 'OK');
                      }
                )
        };
        
        return{
          login:login  
        };
    }());
    return LoginViewModel;
}());