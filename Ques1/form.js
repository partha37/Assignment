

function formValidation()
{
    var users=['parthi'];
var pass=['parthi123'];
var passid = document.registration.passid;
var uname = document.registration.username;
var uemail = document.registration.email;
if(allLetter(uname))
{
if(passid_validation(passid,7,12))
{
if(ValidateEmail(uemail))
{
} 
}
} 
users.forEach(element => {
    if(uname==element)
    {
        // document.getElementById("write").innerHTML="Hey";
        alert("Password ");
    }
    
});
}



function passid_validation(passid,mx,my)
{
var passid_len = passid.value.length;
if (passid_len == 0 ||passid_len >= my || passid_len < mx)
{
alert("Password should not be empty / length between "+mx+" to "+my);
passid.focus();
return false;
}
return true;
}





function allLetter(uname)
{ 
var letters = /^[A-Za-z]+$/;
if(uname.value.match(letters))
{
return true;
}
else
{
alert('Username must have alphabet characters only');
uname.focus();
return false;
}
}

function ValidateEmail(uemail)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(uemail.value.match(mailformat))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
uemail.focus();
return false;
}
}