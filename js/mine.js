
/////////

/* Validation */
var userName= document.getElementById("userName");
    clientName= document.getElementById("clientName");
    userMail= document.getElementById("userMail");
    userPhone= document.getElementById("userPhone");
    textArea= document.getElementById("textArea");
   

 var contacts=[];


function validateClientName()
{
    var alert = document.getElementById("clientNameAlert");
     var regex = /^[\u0600-\u06FF\u0750-\u077F]/;
    
    
   if(regex.test(clientName.value)==false)
        {
            alert.style.display="block";
            return false;
        }
      else
          {
            alert.style.display="none";
              return true;
          } 
   
   
    
}

function validateName()
{
    
    var alert = document.getElementById("userNameAlert");
     var regex = /^[a-zA-Z]{3,}/;
    
    
    if(regex.test(userName.value)==false)
        {
            alert.style.display="block";
            return false;
        }
      else
          {
            alert.style.display="none";
              return true;
          }
}


function validateMail()
{
    
    var alert = document.getElementById("userMailAlert");
     var regex = /^[a-z0-9_]{1,}[-_.]{0,1}[a-z0-9_]{1,}@[a-z0-9]{2,63}(\.[a-z]{2,6}){1,2}/;
    
    
    if(regex.test(userMail.value)==false)
        {
            alert.style.display="block";
            return false;
        }
      else
          {
            alert.style.display="none";
              return true;
          }
}

function validatePhone()
{
    
    var alert = document.getElementById("userPhoneAlert");
     var regex = /^01[0-1-2]{1}[0-9]{8}$/;
    
    
    if(regex.test(userPhone.value)==false)
        {
            alert.style.display="block";
            return false;
        }
      else
          {
            alert.style.display="none";
              return true;
          }
}

function validateArea()
{
    var textArea = document.getElementById("textArea").value;
	var textLimiter = 50;
	var def = textLimiter-textArea.length;
	if(def>0){
		document.getElementById("textdef").innerHTML= def + " Letters Remaning";
	}else{
		document.getElementById("textdef").innerHTML= "Finish";
	}
}


 function addUser()
{
    if(validateName() == true && validateMail()  == true && validatePhone() == true)
        
        
        {
    var contact={name:userName.value,mail:userMail.value,phone:userPhone.value,area:textArea.value};
    
    contacts.push(contact);
    //set contacts array as string in local storage 
    localStorage.setItem("contacts",JSON.stringify(contacts));
     
    clearForm();
        }
    
    else
        {
            alert ("can't register");
        }
    
}

function clearForm(){
    var inputs=document.getElementsByTagName("input");
    for(var i=0;i<inputs.length;i++){
      inputs[i].value="";
        textArea.value="";
    }
}
