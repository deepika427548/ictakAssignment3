'use strict'
const userName=document.getElementById('name');
const password=document.getElementById('pass');

function validation(){
   

     if(userName.value=="admin" && password.value=="12345"){

      alert('valid info')

        window.location="main.html"
        
     }

     else{
        alert('incorrect password');
     }

}
  
navbar

// function validateName(){
//    var userName=document.getElementById('name').value;

//     if(userName.length==0){
//         nameerror.innerHTML="user name required";
//         return false;
//     }
//     if(!userName.match("admin")){
//         nameerror.innerHTML="Incorrect username";
//         return false;
//     }
//     return true;

// }

// function validatePassword(){
//     var password=document.getElementById('password').value;

//     if(password.length==0){
//         passworderror.innerHTML="password is required";
//         return false;
//     }
//     if(!password.match("12345")){
//         passworderror.innerHTML="Incorrect password";
//         return false;
//     }
//     return true;

// }


// function validation()
// {
//  if(!validateName() || !validatePassword()){
//     submiterror.style.display='block';
//     submiterror.innerHTML="please fix the error";
//     setTimeout(function(){submiterror.style.display='none';},3000);
//     return false;
//  }
//   return true;
//  }




