var elUsername = document.getElementById('username');
var elMsg = document.getElementById('feedback');

function checkUsername(minLength){
	if (elUsername.value.length < 5) {
		elMsg.textContent = 'Username must be' + minLength + ' characters or more';
	}else {
		elMsg.textContent = '';
	}
}

// When it loses focus call the function
elUsername.addEventListener('blur',function(){checkUsername(5);}, false);