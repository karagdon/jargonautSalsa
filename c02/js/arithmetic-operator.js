var subtotal = (13+1) * 5;	// Subtotal is 70
var shipping = (13+1) * 0.5;	// Subtotal is 7

var total = subtotal + shipping // Total is 7
var elSub = document.getElementById('subtotal');
elSub.textContent = subtotal;

var elShip = document.getElementById('shipping');
elShip.textContent = shipping;

var elTotal = document.getElementById('total');
elTotal.textContent = total;