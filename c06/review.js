
var list = document.getElementsByTagName('ul')[0];

// ADD NEW ITEM TO END OF LIST

var newItemLast = document.createElement('li');
var newTextLast = document.createTextNode('cream');
newItemLast.appendChild(newTextLast)
list.appendChild(newItemLast)
// ADD NEW ITEM TO START OF LIST



function addItem(e) {
	
	e.preventDefault();
	newEl = document.createElement('li');
	newText = document.createTextNode('New list item');
	newEl.appendChild(newText);
	elList.appendChild(newEl);


}


// var listItems = document.querySelectorAll('li');


// var i;
// for (i = 0; i < listItems.length; i++) {
// 	listItems[i].className = 'cool';
// }
// // ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING

// var heading = document.querySelector('h2');
// var headingText = heading.firstChild.nodeValue;
// var totalItems = listItems.length;
// var newHeading = headingText + '<span>' + totalItems + '</span>'
// heading.innerHTML = newHeading;


addLink.addEventListener('click', addItem, false);
elList.addEventListener('DOMNodeInserted', updateCount, false);