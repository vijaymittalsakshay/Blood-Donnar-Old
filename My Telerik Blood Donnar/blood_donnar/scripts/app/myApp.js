/****
*********
******/

var app = (function(global){
    
    //Initialize the mobile application  
    var mobileApp = new kendo.mobile.Application($(document.body),{
        										layout:'blood-donnar',
        										skin:'flat',
        										transition:'fade'
    });
    
    //everlive initialize for telerik backend service
    var el = new Everlive({
            apiKey: 'bAuOM0qWC4hWddCw', // Put your Backend Services API key here
        	scheme: 'http'
    });
    
    //All registration filed initialization event listener
    document.addEventListener("deviceready",function(){
    
        $(document).ready(function(){
          
            //Masked textbox
           /* $("#Pincode").kendoMaskedTextBox({
               mask:"000 000"
           });*/
            
            //DateTimePicekr
           
            
            function onChange()
            {
            	var DOB = this.value();
                var CDATE = new Date();
                var DIFF = ((CDATE-DOB)/1000/60/60/24);
                
                var MONTH = parseInt(DIFF/30);
                var DAYS = DIFF%30;
               // alert(DAYS);
                var YEAR = parseInt(MONTH/12);
                var yy = MONTH%12; //month
                
                var valueOfDob = YEAR+"Y ,"+yy+"M "+parseInt(DAYS)+" D";
                var day = parseInt(DAYS);
                
                alert("year : "+YEAR);
                alert("month :"+yy);
                alert("days "+day);
               
                
                //alert(valueOfDob);
               /* if(DOB>CDATE){
                    navigator.notification.alert("Select valid date of birth",setValue,"Date of birth","OK");
                }
                
                else
                {
                    $("#Age").val(valueOfDob);
                } */   
            }
            
            //state drop down
             $("#categories").kendoDropDownList({
                   optionLabel: "Select state...",
                   dataTextField: "statename",
                   dataValueField: "stateid",
                   dataSource: {
                   	transport:{
                       		read:{
                                    url:"blood_donnar/data/stateData.json",
                                    dataType:"json"
                                   }
                               }
                             }
                         }).data("kendoDropDownList");
            
            //city drop down
            $("#products").kendoDropDownList({
                   autoBind: false,
                   cascadeFrom: "categories",
                   optionLabel: "Select City...",
                   dataTextField: "cityname",
                   dataValueField: "cityid",
                   	dataSource: {
                               transport:{
                                    	read:{
                                            url:"blood_donnar/data/cityData.json",
                                            dataType:"json"
                                          }
                                       }
                                   }
                          }).data("kendoDropDownList");
        });
    },false);
    
    
    //add event listener 
    document.addEventListener("deviceready",function(){
        document.addEventListener("backbutton",onBackKeyDown,false);  
    },false);
    
    //onBackKeyDown function for backbutton
    var onBackKeyDown = function(e){
      var x = mobileApp.view()['element']['0']['id'];
        
		if(x === "login")
        {
            //navigator.app.exitApp(); 
             navigator.notification.confirm('Do you really want to exit?',function(confirmed){
                
                if(confirmed === true || confirmed ===1)
                {
                 	navigator.app.exitApp();
                }
                
            },'Exit','Yes,No');
        }
        else if(x==="signup" || x==="donnar_list" || x==="donnar_detail")
        {
            e.preventdefault();
        }
        else if(x === "home")
        {
            navigator.notification.confirm('Do you want to Logout ?',function(confirmed){
                
                if(confirmed === true || confirmed ===1)
                {
                 	mobileApp.navigate("#index.html");
                }
                
            },'Logout','Yes,No');
        }
        else
        {
            //history.go(-1);
           // navigator.app.backhistory();
        }
    };
    
    return{
      application:mobileApp,
        el:el
    };

}(window));