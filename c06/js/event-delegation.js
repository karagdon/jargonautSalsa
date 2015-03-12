function getTarget(e){
	if (!e) {
		e = window.event;
	}
}

function itemDone(e){
	//Remove item from the list
	var target, elParent, elGrandparent; 			// Declare variables
	target = getTarget(e);							// Get the item clicked link
	elParent = target.parentNode;					// Get its list item
	elGrandparent = target.parentNode.parentNode;	// Get its list
	elGrandparent.removeChild('elParent')			// Remove list item from list

	// Prevent the link from taking you elsewhere
	if (e.preventDefault) {e.preventDefault();} 	// If preventDefault() works Use preventDefault()
	else { e.returnValue = false;}					// Otherwise use old IE version
}


// Set up listeners to call itemDone() on click
var el = document.getElementById('shoppingList');	// Get Shopping list
if (el.addEventListener) {							// If event listeners work
	el.addEventlistener('click', function(e) {		// Add listener on click
		itemDone(e);}, false);}						// ... which calls itemDone(), bubbling phase for flow
else {el.attachEvent('onclick', function(e){itemDone(e);} );}					// Otherwise use old IE model: onClick, call itemDone();
