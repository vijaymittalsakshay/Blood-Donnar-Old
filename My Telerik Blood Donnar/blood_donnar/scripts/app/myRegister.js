var app = app || {};

app.Register = (function(){
    
    var SignupViewModel = (function(){
      
        var signup = function(){
            
  /******************/
     //This is 1st way for registered the detail of USERS
  /******************/
            
            
           /* var name = $("#Name").val();
            var email = $("#Email").val();
            var username = $("#Username").val();
            var password = $("#Password").val();
            var blood_group = $("#blood_group").val();
            var gender = $("#gender").val();
            var dob = kendo.parseDate($("#datepicker").val(),"yyyy/MM/dd");
            var age = $("#Age").val();
            var state = $("#categories").val();
            var city = $("#products").val();
            var pincode = $("#Pincode").val(); 
            
            el.Users.register(username,password,{
                Email:email,
                Blood_Group:blood_group,
                Gender:gender,
                DOB:dob,
                Age:age,
                State:state,
                City:city,
                Pincode:pincode,
                DisplayName:name
            }).then(function(){
                alert("User Registration Successfull");
                app.application.navigate("#index.html");
            },
            function(err){
                navigator.notification.alert(err.message, function(){}, 'New User', 'OK');
            });*/
            
            
     /******************/
       //This is another way for registered the detail of USERS
    /******************/
            
            
           app.el.Users.register(dataSource.Username,dataSource.Password,{
            				Email:dataSource.Email,
                            Blood_Group:dataSource.bloodGroup,
                            Gender:dataSource.Gender,
                            DOB:kendo.parseDate(dataSource.DOB),
                            Age:dataSource.Age,
                            State:dataSource.State,
                            City:dataSource.City,
                            Pincode:dataSource.PinCode,
                            DisplayName:dataSource.DisplayName	   
           })
            .then(function(){
                alert("User Registration Successfull");
                app.application.navigate("#index.html");
            },
            function(err){
                navigator.notification.alert(err.message, function(){}, 'New User', 'OK');
            });
        };
        
        var init = function () {

          
        };
        
        var show = function(){
           dataSource = kendo.observable({
                Username: '',
                Password: '',
                DisplayName: '',
                Email: '',
                Gender: '0',
                bloodGroup:'0',
                DOB:new Date(),
                Age:'',
                State:'0',
                City:'0',
                PinCode:''
            });
            kendo.bind($('#signUp'), dataSource, kendo.mobile.ui);
        };
        
        var check = function(){
          alert("this is done");  
        };
        
        return{
          signup:signup ,
            init:init,
            show:show,
            check:check
        };
    }());
    return SignupViewModel;
}());