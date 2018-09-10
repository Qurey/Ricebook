
function tz(){
   window.location.href='main.html';
}

function change(){
  document.getElementById("errmsg").innerText="";
  document.getElementById("msg").innerText="";
	if(validate_empty("dis")){
		var re=/^[a-zA-Z]{1}[a-zA-Z0-9]*$/;
		var val=document.getElementById("dis").value
  		if (!re.test(val)){
  			document.getElementById("errmsg").innerText="Error: Account name can only be upper or lower case letters and numbers, but may not start with a number";
    		dname.focus();}
  		else {
  			document.getElementById("msg").innerText="The display name has been updated";
  			document.getElementById("fixname").innerText=val;
  		}
  		document.getElementById("dis").value="";
  	}

  	if(validate_empty("eaddr")){
		var re=/^[a-zA-Z0-9]+@[a-zA-Z0-9]+[.a-zA-Z0-9]*$/;
		var val=document.getElementById("eaddr").value
  		if (!re.test(val)){
  			document.getElementById("errmsg").innerText="Error: e-mail address isn't valid";}
  		else {
  			document.getElementById("msg").innerText="The e-mail address has been updated";
  			document.getElementById("fixeaddr").innerText=val;
  		}
  		document.getElementById("eaddr").value="";
  	}

  	if(validate_empty("tele")){
		var re=/^\d{3}-\d{3}-\d{4}$/;
		var val=document.getElementById("tele").value
  		if (!re.test(val)){
  			document.getElementById("errmsg").innerText="Error: Telephone number isn't valid";}
  		else {
  			document.getElementById("msg").innerText="The telephone number has been updated";
  			document.getElementById("fixtele").innerText=val;
  		}
  		document.getElementById("tele").value="";
  	}

  	if(validate_empty("zip")){
		var re=/^[0-9]{5}$/;
		var val=document.getElementById("zip").value
  		if (!re.test(val)){
  			document.getElementById("errmsg").innerText="Error: Zipcode must be 5-digit number";}
  		else {
  			document.getElementById("msg").innerText="The zipcode has been updated";
  			document.getElementById("fixzip").innerText=val;
  		}
  		document.getElementById("zip").value="";
  	}

  	if(validate_empty("psw")){
		var val=document.getElementById("psw").value
  		if (!validate_empty("fpsw")){
  			document.getElementById("errmsg").innerText="Error: You must confirm the password";}
  		else if(document.getElementById("psw").value!=document.getElementById("fpsw").value){
  			document.getElementById("errmsg").innerText="Error: Password must match the password confirmation";
  		}
  		else{
  			document.getElementById("msg").innerText="The password and password confirmation have been updated";
  			document.getElementById("fixpsw").innerText=val;
  			document.getElementById("fixfpsw").innerText=document.getElementById("fpsw").value;
  		}
  		document.getElementById("psw").value="";
  		document.getElementById("fpsw").value="";
  	}


 
}

function validate_empty(field)
{
  if (document.getElementById(field).value==null||document.getElementById(field).value=="")
    {return false;}
  else {return true;}
}