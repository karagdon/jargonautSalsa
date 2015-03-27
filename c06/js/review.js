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
	newEl.setAttribute('onclick', 'updateClass();');
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
	newEl.setAttribute('onclick', 'updateClass();');
	newEl.appendChild(newText);
	newEl.className = 'hot';
	elList.appendChild(newEl);
}

function updateCount() {
	listitems = list.getElementsByTagName('li').length;
	counter.innerHTML = listitems;
}


function updateClass() {
 	//change the class for msg, add the msg
 	if (addClass.className === '')
 		{addClass.className = 'hot';}
	else if (addClass.className == 'hot')
 		{addClass.className = 'cool';}
	else if (addClass.className == 'cool')
 		{addClass.className = 'warm';}
	else if (addClass.className == 'warm')
 		{addClass.className = 'hot';}

// 	switch (this) {
//     case (this.className = 'cool'):
//     	this.className = 'warm';
//     	break;
    	
//     	case (this.className = 'warm'):
//     	this.className = 'hot';
//     	break;
    	
//     	case (this.className = 'hot'):
//     	this.className = 'cool';
//     	break;
    	
//     	case (this.className = null):
//     	this.className = 'warm';
//     	break;
// }
}



addClass.setAttribute('onclick', 'updateClass();');

addClass.addEventListener('onclick', updateClass, false);
addLink.addEventListener('click', addItem, false);
addLinkFirst.addEventListener('click', addFirst, false);
elList.addEventListener('DOMNodeInserted', updateCount, false);

