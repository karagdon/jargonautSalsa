var elList, addLink, addClass, newEl, newText, counter, listitems;

elList = document.getElementById('list');
addLink = document.querySelector('a');
counter = document.getElementById('counter');
addClass = document.querySelector('li');

function addItem(e) {
	e.preventDefault();
	newEl = document.createElement('li');
	newText = document.createTextNode('New list item');
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

addLink.addEventListener('click', addItem, false);
elList.addEventListener('DOMNodeInserted', updateCount, false);