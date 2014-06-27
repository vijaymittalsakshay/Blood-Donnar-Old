/*(function (global) {
    var SignupViewModel,
        app = global.app = global.app || {};

    SignupViewModel = kendo.data.ObservableObject.extend({
  
        Signup: function () {
           //alert("this is a register");
        }
    });

    app.signupService = {
        viewModel:new SignupViewModel()
    };
})(window);*/

var app = app || {};

app.Signup = (function(){
    
    var SignupViewModel = (function(){
        
        var dataSource;
        
       	var signup = function(){
              // alert("Hello");
               
              // var name = dataSource.DisplayName;
              // alert(name);
              
              /*  Everlive.$.Users.register(
                    dataSource.Username,
                    dataSource.Password,
                    dataSource)
                .then(function () {
                    app.showAlert("Registration successful");
                    app.application.navigate('#login');
                },
                function (err) {
                    app.showError(err.message);
                });*/
           };
        
        	/*var init = function(){
              //alert("init");  
                
                $signUpForm = $('#signUp-form');
                $formFields = $signUpForm.find('input, select');
                $signupBtnWrp = $('#signupBtnWrp');
                validator = $signUpForm.kendoValidator({ validateOnBlur: false }).data('kendoValidator');

                $formFields.on('keyup keypress blur change input', function () {
                    if (validator.validate()) {
                        $signupBtnWrp.removeClass('disabled');
                    } else {
                        $signupBtnWrp.addClass('disabled');
                    }
                });
            };*/
        
        	/*var show = function(){
                //alert("show");
                dataSource = kendo.observable({
                Username: '',
                Password: '',
                DisplayName: '',
                Email: '',
                Gender: '0',
                Blood_Group: '',
                State: '',
                DOB: '',
                Age:'',
                City:'',
                PinCode:''
            });
            kendo.bind($('#signUp'), dataSource, kendo.mobile.ui);
            };*/
        
        return{
           // init:init,
           // show:show,
            signup:signup
        };
    }());
    return SignupViewModel;
}());