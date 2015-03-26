var elList, addLink, addFirst, addLinkFirst, addClass, newEl, newText, counter, listitems;

elList = document.getElementById('list');
addLink = document.getElementById('addLast');
counter = document.getElementById('counter');
addClass = document.querySelector('li');
addLinkFirst = document.getElementById('addFirst');
addClass.setAttribute('onclick', 'updateClass();');

function addFirst(e) {
	e.preventDefault();
	newEl = document.createElement('li');
	newItem = document.getElementById('newItemInput').value;
	newText = document.createTextNode(newItem);
	newEl.appendChild(newText);
	newEl.className = 'cool';
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
	newEl.className = 'hot';
	elList.appendChild(newEl);
}

function updateCount() {
	listitems = list.getElementsByTagName('li').length;
	counter.innerHTML = listitems;
}

function updateClass() {
 	// change the class for msg, add the msg
 	if (addClass.className == 'warm')
 	
 		{addClass.className == 'hot';
 			if (addClass.className == 'cool')
 			{addClass.className == 'hot';}
 			
 		}else{addClass.className = 'cool';}
		
}

addClass.addEventListener('onclick', updateClass, false);
addLink.addEventListener('click', addItem, false);
addLinkFirst.addEventListener('click', addFirst, false);
elList.addEventListener('DOMNodeInserted', updateCount, false);

