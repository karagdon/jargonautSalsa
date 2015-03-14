function checkUsername() {
	var username = el.value;
	if (username.length < 5) {
		// If username < 5 char, change class on msg, update msg
		elMsg.className = 'warning';
		elMsg.textContent = 'Not long enough, yet...';
	} else {
		// Otherwise Clear the msg
		elMsg.textContent = '';
	}
 }
 function tipUsername() {
 	// change the class for msg, add the msg
 	elMsg.className = 'tip';
 	elMsg.innerHTML = 'Username must be atleast 5 characters;'
 }
 
 var el = document.getElementById('username');
 var elMsg = document.getElementById('feedback');
 
 // When the username input gains or loses focus, call the functions above!
 el.addEventListener('focus', tipUsername, false); // focus call tipUsername()
