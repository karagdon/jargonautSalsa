var sx = document.getElementById('sx'); //Element to hold screen x
var sy = document.getElementById('sy'); //Element to hold screen y
var px = document.getElementById('px'); //Element to hold page x
var py = document.getElementById('py'); //Element to hold page y
var cx = document.getElementById('cx'); //Element to hold client x
var cy = document.getElementById('cy'); //Element to hold client y

function showPosition(event){
sx.value = event.screenX;		//update the element with ...
sy.value = event.screenY;
px.value = event.pageX;
py.value = event.pageY;
cx.value = event.clientX;
cy.value = event.clientY;
}

// Get the body Element
var el = document.getElementById('body');
// Move updates position
el.addEventListener('mousemove', showPosition, false);