let usrerror = document.getElementById("usr-invalid");
let passerror = document.getElementById("pw-invalid");

// user validate

function emailvalidate(){
	let mail = document.getElementById("email").value;
	let validmail = localStorage.getItem("Email_id");
	if(mail.length == 0){
		usrerror.innerHTML = "email required";
		usrerror.style.color = "red";

		return false;
	}
	if(mail != validmail){
		usrerror.innerHTML = "Email doesn't match";
		usrerror.style.color = "red";
		
		return false;
	}
	usrerror.innerHTML = "Email matched";
	usrerror.style.color = "green";

	return true;
}

// password validate

function pswrdvalidate(){
	let passwrd = document.getElementById("password").value;
	let validpass = localStorage.getItem("password");
	let validcnfpass = localStorage.getItem("conf_password");
	if (passwrd.length == 0) {
		passerror.innerHTML = "Password required";
		passerror.style.color = "red";
		
		return false;
	}
	if(passwrd != validpass || passwrd != validcnfpass){
		passerror.innerHTML = "Password doesn't match";
		passerror.style.color = "red";
		
		return false;
	}
	passerror.innerHTML = "Password matched";
	passerror.style.color = "green";

	return true;
}

// validate sigin

function validate(){
	if(!emailvalidate() || !pswrdvalidate()){
		alert("username or password doesn't match");

		return false;
	}
}