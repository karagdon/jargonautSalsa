var elList, addLink, addFirst, addLinkFirst, addClass, newEl, newText, counter, listitems;

elList = document.getElementById('list');
addLink = document.querySelector('a');
counter = document.getElementById('counter');
addClass = document.querySelector('li');
addLinkFirst = document.querySelector('a');
var list = document.getElementsByTagName('ul')[0];

function addFirst(e) {
	e.preventDefault();
	newEl = document.createElement('li');
	newItem = document.getElementById('newItemInput').value;
	newText = document.createTextNode(newItem);
	newEl.appendChild(newText);
	elList.appendChild(newEl);
	list.insertBefore(elList, list.firstChild);
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

function updateClass() {
 	// change the class for msg, add the msg
 	if (newEl.className == 'warm')
 		{newEl.className == 'cool';}
 		else{newEl.className = 'warm';}
}


// addLink.addEventListener('click', addItem, false);
addLink.addEventListener('click', updateClass, false);
addLinkFirst.addEventListener('click', addFirst, false);
elList.addEventListener('DOMNodeInserted', updateCount, false);

