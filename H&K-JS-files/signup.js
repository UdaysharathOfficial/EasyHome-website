let usr_error = document.getElementById("usr-err");
let email_error = document.getElementById("email-err");
let passworderror = document.getElementById("password-err");
let cnfpasserror = document.getElementById("cnf-password-err");
let submit_error = document.getElementById("submit-error");

// usrname validate

function usrname(){
    let username = document.getElementById("username").value;
    
    
    if(username.length == 0){
        usr_error.innerHTML = "name is required";
        usr_error.style.color = "red";

        return false;
    }
    if(!username.match(/^[a-zA-Z0-9_-]{4,16}$/)){
        usr_error.innerText = "name must contain min 4 and max 16 characters";
        usr_error.style.color = "red";

        return false;
    }
    usr_error.innerText = "valid";
    usr_error.style.color = "green";

    return true;
}

// email validate

function validatemail(){
    let email = document.getElementById("mail").value;
    if(email.length == 0){
        email_error.innerHTML = "E-mail required";
        email_error.style.color = "red";

        return false;
    }
    if(!email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
        email_error.innerHTML = "E-mail is invalid";
        email_error.style.color = "red";

        return false;
    }
    email_error.innerHTML = "valid";
    email_error.style.color = "green";

    return true;
}

// password validate

function validatePassword(){
    let usrpass = document.getElementById("password").value;
    if(usrpass.length == 0){
        passworderror.innerHTML = "password required";
        passworderror.style.color = "red";
        
        return false;
    }
    if(!usrpass.match(/^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/)){
        passworderror.innerHTML = "password must contain 1 Upper case 1 lower case 1 digit 1 special character";
        passworderror.style.color = "red";

        return false;
    }
    passworderror.innerHTML = "valid";
    passworderror.style.color = "green";

    return true;

}

// confirmpassword validate

function validatecnfpassword(){
    let usrpass = document.getElementById("password").value;
    let cnfpass = document.getElementById("cnf-password").value;
    if(cnfpass == 0){
        cnfpasserror.innerHTML = "Password required";
        cnfpasserror.style.color = "red";

        return false;
    }
    if(cnfpass != usrpass){
        cnfpasserror.innerHTML = "Password don't match";
        cnfpasserror.style.color = "red";

        return false;
    }
    cnfpasserror.innerHTML = "valid";
    cnfpasserror.style.color = "green";

    return true;

}

// form validate

function validateform(){
    let username = document.getElementById("username").value;
    let user_key = "Username";
    localStorage.setItem(user_key,username);
    
    let email = document.getElementById("mail").value;
    let mail_key = "Email_id";
    localStorage.setItem(mail_key,email);

    let usrpass = document.getElementById("password").value;
    let pass_key = "password";
    localStorage.setItem(pass_key,usrpass);

    let cnfpass = document.getElementById("cnf-password").value;
    let cnf_key = "conf_password";
    localStorage.setItem(cnf_key,cnfpass);

    if(!usrname() || !validatemail() || !validatePassword() || !validatecnfpassword()){

        alert("All feilds are required!")

        return false;
    }

}
