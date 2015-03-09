function checkUsername(){
	var elMsg = document.getElementById('feedback');
	if (this.value.length < 5) {
		elMsg.textContent = 'Username must be 5 characters or more';
	}else {
		elMsg.textContent = '';
	}
}
var elUsername = document.getElementById('username');
// When it loses focus call the function
elUsername.addEventListener('blur',checkUsername, false);
