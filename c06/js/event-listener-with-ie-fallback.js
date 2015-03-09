var elUsername = document.getElementById('username');
var elMsg = document.getElementById('feedback');

function chewckUsername(minLength) {
	if (elUsername.value.length < minLength ) {
	// Set Msg
		elMsg.innerHTML = 'username must be ' + minLength + ' characters or more';
	} else {
	elMsg.innerHTML = '';
	}
}
if (elUsername.addEventListener) {
	elUsername.addEventListener('blur', function(){checkUsername(5);}, false);
}else {
	//IE fallback: onblur
	elUsername.attachEvent('onblur',function(){checkUsername(5);});
}
