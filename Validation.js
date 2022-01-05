function validationsignup()
{
var firstname=document.signup.fname; var lastname=document.signup.lname; var sex=document.signup.rd_gen;
var email=document.signup.txtsin_email; var regno=document.signup.s_Id;
var dept=document.signup.s_Dept; var batch=document.signup.s_Batch;
var pass=document.signup.s_password; var rpass=document.signup.s_rpassword; var mobile=document.signup.s_Mno;
var dob=document.signup.s_Dob;
var textarea=document.signup.ta_add; if (firstname.value == "")
{
window.alert("Please enter your first name."); firstname.focus();
return false;
}
if (lastname.value == "")
{
window.alert("Please enter your last name."); lastname.focus();
return false;
}
if (sex.value == "")
{
window.alert("Please enter your gender."); sex.focus();
return false;
}
if (email.value == "")
{
window.alert("Please enter your email."); email.focus();
return false;
}
if (email.value.indexOf("@", 0) < 0)
{
window.alert("Please enter a valid e-mail address."); email.focus();
return false;
}
if (email.value.indexOf(".", 0) < 0)
{
13
window.alert("Please enter a valid e-mail address."); email.focus();
return false;
}
if (regno.value == ""){
window.alert("Please enter your register no"); regno.focus();
return false;
}
if (dept.selectedIndex<1)
{
window.alert("Please enter your department"); dept.focus();
return false;
}
if (batch.selectedIndex<1)
{
window.alert("Please enter your batch period"); batch.focus();
return false;
}
if (pass.value == "")
{
window.alert("Please enter your password"); pass.focus();
return false;
}
if (rpass.value == "")
{
window.alert("Please re enter your password"); rpass.focus();
return false;
}
if (mobile.value == "")
{
window.alert("Please enter your mobile number"); mobile.focus();
return false;
}
if (dob.value == "")
{
window.alert("Please enter your date of birth."); dob.focus();
return false;
}
if (textarea.value == "")
{
window.alert("Please enter your first name."); textarea.focus();
return false;
}
true;
}