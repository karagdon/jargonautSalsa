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
	newEl.setAttribute('onclick', 'updateClass()');
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

function updateListwithClass() {
	newEl.setAttribute('onclick', 'updateClass()');
}


//change code to work with this instead of below
$("todo-state").click(function(){
	$(this).addClass("updateClass")
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

// 	switch () {
//     case (className = 'cool'):
//     	className = 'warm';
//     	break;
    	
//     	case (className = 'warm'):
//     	className = 'hot';
//     	break;
    	
//     	case (className = 'hot'):
//     	className = 'cool';
//     	break;
    	
//     	case (className = null):
//     	className = 'warm';
//     	break;
// }
}





addClass.addEventListener('onclick', updateClass(), false);
addLink.addEventListener('click', addItem, false);
addLinkFirst.addEventListener('click', addFirst, false);
elList.addEventListener('DOMNodeInserted', updateCount, false);
newEl.addEventListener('DOMNodeInserted', updateListwithClass, false);

