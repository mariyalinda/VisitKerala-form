function alertUser(){
alert("Thank you for showing interest! Hope to see you in Kerala soon!");
}
//checking firstname
function checkname1(){
	var field=document.getElementById("fname").value;
	var rel=/^[a-zA-Z\s\'\-]{2,15}$/;
	if(rel.test(field))
		document.getElementById("message1").innerHTML="Input accepted";
	else
		document.getElementById("message1").innerHTML="Your name should have 2-15 characters";
}
//checking lastname
function checkname2(){
	var field=document.getElementById("lname").value;
	var rel=/^[a-zA-Z\s\'\-]{2,15}$/;
	if(rel.test(field))
		document.getElementById("message2").innerHTML="Input accepted";
	else
		document.getElementById("message2").innerHTML="Your name should have 2-15 characters";
}
//checking mobile number
function checkmob(){
	var field=document.getElementById("mobile").value;
	var regex=/^[1-9]{10}$/;
	if(regex.test(field))
		document.getElementById("message3").innerHTML="Input accepted";
	else
		document.getElementById("message3").innerHTML="Enter a 10 digit number";
}
//checking email-id
function validateEmail() {
	var field=document.getElementById("mail").value;
	var regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(regex.test(field))
		document.getElementById("message4").innerHTML="Input accepted";
	else
		document.getElementById("message4").innerHTML="Enter a valid email id";
}