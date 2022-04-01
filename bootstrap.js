
// const email = document.getElementById(".email");

// email.addEventListener("input", function (event) {
//   if (email.validity.typeMismatch) {
//     email.setCustomValidity("I am expecting an e-mail address!");
//     email.reportValidity();
//   } else {
//     email.setCustomValidity("");
//   }
// });

// function validate(){
//     let email = document.getElementsByClassName(".email")
// }

// function chkpasswords(){
//     var pass = document.getElementsByClassName("password");
//     var cpass = document.getElementsByClassName("conformPassword");
//     var email=document.querySelector(".email")
//     var cEmail=document.querySelector(".conformEmail")
//     if(pass.value == "" && email.value == ""){
//         if(pass.value == ""){
//             alert("you did not enter a password \n"+ "please enter")
//             pass.focus();
//             return false;
//         }if(email.value == ""){
//             alert("you did not enter a email \n"+ "please enter")
//         email.focus();
//         return false;
//         }
        
//     }
//     if(pass.value != cpass.value && email.value != cEmail.value){
//         if(pass.value != cpass.value){
//             alert("password are not same" + "please re-enter both now");
//         pass.focus();
//         pass.select();
//         return false;
//     }else
//     return true;
//         }
//         if(email.value != cEmail.value){
//             alert("password are not same" + "please re-enter both now");
//         pass.focus();
//         pass.select();
//         return false;
//     }else
//     return true;

//  }
//    document.querySelector(".password").onblur = chkpasswords;
//     document.querySelector("#enroll-account-form").onsubmit = chkpasswords; 
        
// function rotate(){
//     document.querySelector(".icon-nav-carrot-down").style.rotate="180deg"
// }

document.querySelector("#enroll-account-form").addEventListener("submit",myFunction)
var signArr = JSON.parse(localStorage.getItem("registrationDetails")) || [];

function myFunction(event){
    event.preventDefault()
    var obj = {
        fName:document.querySelector(".firstName").value,
        lNmae:document.querySelector(".lastName").value,
        email:document.querySelector(".email").value,
        cEmail:document.querySelector(".conformEmail").value,
        pass:document.querySelector(".password").value,
        cPass:document.querySelector(".conformPassword").value,
    };
    
    
    // function chkform(){
    
    //     var email=document.querySelector(".email")
    //    var cEmail=document.querySelector(".conformEmail")
       
    //    if(email.value == "")
    //    {
    //        alert("Enter Your Email\n" + "please enter");
    //        email.focus();
    //        return false;
    //    }
    //    if(email.value != cEmail.value){
    //        alert("Email are not same" + "please re-enter both");
    //        email.focus();
    //        email.select();
    //        return false;
    //    }else
    //        return true;
       
    // }
    
    // function chkpasswords(){
    //    var pass=document.querySelector(".password")
    //    var cPass=document.querySelector(".conformPassword")
       
       
    // if(pass.value == ""){
    //     alert("you did not enter a password \n"+ "please enter")
    //     pass.focus();
    //     return false;
    // }
    // if(pass.value != cPass.value){
    //     alert("password are not same" + "please re-enter both now");
        
        
    //     return false;
    // }else
    // return true;
    // }

    
    
    signArr.push(obj);
    console.log(signArr);
    // document.querySelector(".conformEmail").onblur = chkform;
    // document.querySelector("#enroll-account-form").onclick = chkform;

    // document.querySelector(".conformPassword").onblur = chkpasswords;
    // document.querySelector("#enroll-account-form").onclick = chkpasswords;
    
    localStorage.setItem("registrationDetails",JSON.stringify(signArr))
    document.querySelector("input[type='submit']").addEventListener("click",function(){
        window.location.href="contactDetails.html";
    });


    
}