var elList, addLink, addFirst, addLinkFirst, addClass, newEl, newText, counter, listitems;

elList = document.getElementById('list');
addLink = document.getElementById('addLast');
counter = document.getElementById('counter');
addClass = document.querySelector('li');
addLinkFirst = document.getElementById('addFirst');


function addFirst(e) {
	e.preventDefault();
	newEl = document.createElement('li');
	newItem = document.getElementById('newItemInput').value;
	newText = document.createTextNode(newItem);
	newEl.appendChild(newText);
	elList.appendChild(newEl);
	var list = document.getElementsByTagName('ul')[0];
	list.insertBefore(newEl, list.firstChild);
}

function addItem(e) {
	e.preventDefault();
	newEl = document.createElement('li');
	newItem = document.getElementById('newItemInput').value;
	newText = document.createTextNode(newItem);
	newEl.appendChild(newText);
	elList.appendChild(newEl);
}
function updateCount() {
	listitems = list.getElementsByTagName('li').length;
	counter.innerHTML = listitems;
}

// function updateClass() {
//  	// change the class for msg, add the msg
//  	if (newEl.className == 'warm')
//  		{newEl.className == 'cool';}
//  		else{newEl.className = 'warm';}
// }


addLink.addEventListener('click', addItem, false);
addLinkFirst.addEventListener('click', addFirst, false);
elList.addEventListener('DOMNodeInserted', updateCount, false);
// status.addEventListener('click', updateClass, false);
