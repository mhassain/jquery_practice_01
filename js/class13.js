function checkFirstName(){
    var firstNameLength = $('#firstName').val().length;
    if (firstNameLength>=6 && firstNameLength<=15){
        $('#firstNameError').text('');
		return true;
    }else{
       $('#firstNameError').text('First name should be between 6 to 15 character.');
		return false;
    }
};

$('#firstName').blur(function(){
   checkFirstName();
});

$('#firstName').keyup(function(){
    checkFirstName();
});




function checkLastName(){
    var lastNameLength = $('#lastName').val().length;
    if (lastNameLength>=6 && lastNameLength<=15){
        $('#lastNameError').text('');
		return true;
    }else{
       $('#lastNameError').text('Last name should be between 6 to 15 character.'); 
	   return false;
    }
};

$('#lastName').blur(function(){
   checkLastName();
});

$('#lastName').keyup(function(){
    checkLastName();
});



function checkEmailAddress(){
    var pattern = new RegExp (/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,4}$/i);
    if(pattern.test($('#emailAddress').val())){
       $('#emailAddressError').text('') ;
	   return true;
    }else{
        $('#emailAddressError').text('Email address is invalid');
		return false;
    }
};

$('#emailAddress').blur(function(){
   checkEmailAddress(); 
});

$('#emailAddress').keyup(function(){
   checkEmailAddress();
});



function checkPassword(){
  var passwordLength = $('#password').val().length;
  if(passwordLength>=8 && passwordLength<=14){
      $('#passwordError').text('');
	  return true;
  }else{
      $('#passwordError').text('Password should be 8 to 14 character');
	  return false;
  }
}


$('#password').blur(function(){
   checkPassword(); 
});

$('#password').keyup(function(){
   checkPassword(); 
});


function checkConfirmPassword(){
	var passwordValue = $('#password').val();
	var confirmPasswordValue = $('#confirmPassword').val();
	if(passwordValue == confirmPasswordValue){
		$('#confirmPasswordError').text('');
		return true;
	}else{
		$('#confirmPasswordError').text('Password are not the same');
		return false;
	}
}

$('#confirmPassword').keyup(function(){
	checkConfirmPassword();
});

$('#showPassword').click(function(){
	if(this.checked){
		$('#password').attr('type','text');
	}else{
		$('#password').attr('type','password');
	}
});


function checkGender(){
	var genderValue = $('input[type="radio"]:checked').val();
	if(genderValue == 'Male'){
		$('#genderError').text(' ');
		return true;
	}else if(genderValue == 'Female'){
		$('#genderError').text(' ');
		return true;
	}else{
		$('#genderError').text('Please select your gender.');
		return false;
	}
}

function checkDistrictName(){
	var districtNameValue = $('#districtName').val();
	if(districtNameValue == ' '){
		$('#districtNameError').text('Please select a district name');
		return false;
	}else{
		$('#districtNameError').text(' ');
		return true;
	}
}

$('#districtName').change(function(){
	checkDistrictName();
});

$('#registrationForm').submit(function(){
   if(checkFirstName() == true && checkLastName() == true &&  checkEmailAddress() == true && checkPassword() == true && checkConfirmPassword() == true && checkGender() == true && checkDistrictName() == true){
	   return true;
   }else{
	   return false;
   }
});

