// Declare function
function checklength(e, minLength) {

	// Declare variables
	var el, elMsg;
	
	// If event object doesn't exist
	if (!e) {
		// Use IE fallback
		e = window.event;
	}
	//Get target of event
	el = e.target || e.srcElement;
	
	//Get its next sibling
	elMsg = el.nextSibling;
	
	//If length is too short set msg
	if (el.value.length < minLength) {elMsg.innerHTML = 'Username msut be ' + minLength + 'characters or more';}
	
	//	Otherwise, clear msg
	else {elMsg.innerHTML = '';}
}

//Get username input
var elUsername = document.getElementById('username');
//If event listener supported//On blur event //Call checkUsername()//Capture in bubble phase
if (elUsername.addEventListener) {elUsername.addEventListener('blur', function(e) {checklength(e, 5);}, false);}
//Otherwise 	//IE fallback onblur //Call checkUsername()
else {elUsername.attachEvent('onblur',function(e){checklength(e, 5);});}