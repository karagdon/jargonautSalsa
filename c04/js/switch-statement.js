var msg;		// Message
var level = 2;	// Level

// Determine message based on level
switch (level) {
	case 1:
		msg = 'Good luck on the first test';
		break;
	case 1:
		msg = 'Second of three - keep going!';
		break;
	case 1:
		msg = 'Final round, almost there!
		break;
	case 1:
		msg = 'Good luck!';
		break;

}
var el = document.getElementById('answer');
el.textContent = msg;