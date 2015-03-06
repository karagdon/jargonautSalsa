// ADDING ITEMS TO START AND END OF LIST
var list = document.getElementsByTagName('ul')[0];

// ADD NEW ITEM TO END OF LIST
// CREATE ELEMENT
var newItemLast = document.createElement('li');
// CREATE TEXT NODE
var newTextLast = document.createTextNode('cream');
// ADD TEXT NODE TO TELEMENT
newItemLast.appendChild(newTextLast)
// AND ELEMENT TO END OF LIST
list.appendChild(newItemLast)

// ADD NEW ITEM TO START OF LIST
// CREATE ELEMENT)
var newItemFirst = document.createElement('li');

// CREATE TEXT NODE
var newTextFirst= document.createTextNode('cheese');

// ADD TEXT NODE TO TELEMENT
newItemFirst.appendChild(newTextFirst)

// AND ELEMENT TO END OF LIST
list.insertBefore(newItemFirst, list.firstChild)


// ADD A CLASS OF COOL TO ALL LIST ITEMS
var listItems = document.querySelectorAll('li');
// COUNTER VARIABLE

var i;
// LOOP THROUGH ELEMENTS
for (i = 0; i < listItems.length; i++) {
	// CHANGE CLASS TO COOL
	listItems[i].className = 'cool';
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
// H2 ELEMENT
var heading = document.querySelector('h2');

// H2 TEXT
var headingText = heading.firstChild.nodeValue;

// # OF LI ELEMENTS
var totalItems = listItems.length;

// CONTENT
var newHeading = headingText + '<span>' + totalItems + '</span>'

// UPDATE H2
heading.innerHTML = newHeading;