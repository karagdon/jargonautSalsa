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
	newEl.setAttribute('onclick', 'li-task');
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
	newEl.setAttribute('onclick', 'updateClass');
}


////change code to work with this instead of below
//$("li-task").mouseover(function () {
//    $(this).addClass("hovered-task");
//});
//
//$("li-task").mouseout(function () {
//    $(this).removeClass("unhovered-task");
//});
//
//
//$("li-task").click(function() {
// 	if ($(this).className === '')
// 		{$(this).addClass('hot');}
//
//	else if ($(this).className == 'hot')
// 		{
// 			$(this).removeClass('hot');
// 			$(this).addClass('cold');
// 		}
// 		else if ($(this).className == 'cold')
// 		{
// 			$(this).removeClass('cold');
// 			$(this).addClass('warm');
// 		}
//  		else if ($(this).className == 'warm')
// 		{
// 			$(this).removeClass('warm');
// 			$(this).addClass('hot');
// 		}
//})


function updateClass() {
 	//change the class for msg, add the msg
 	if (addClass.className === '')
 		{addClass.className = 'hot';}
	else if (addClass.className == 'hot')
 		{addClass.className = 'cool';}
	else if (addClass.className == 'cool')
 		{addClass.className = 'warm';}
	else if (addClass.className == 'warm')
 		{addClass.className = 'hot';}	}

addClass.addEventListener('onclick', updateClass(), false);

addLink.addEventListener('click', addItem, false);
addLinkFirst.addEventListener('click', addFirst, false);
elList.addEventListener('DOMNodeInserted', updateCount, false);
newEl.addEventListener('DOMNodeInserted', updateListwithClass, false);