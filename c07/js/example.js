// Practice Event delegation

// TODO: users can add new list items
// TODO: Click to indicate an item is <status>
// TODO: Once complete, another <click> will ..
		// if 'Not complete', will 1) move to bottom 2) mark as 'complete'
		// if 'complete', will 1) fade, 2) remove from list, 3) update counter
// TODO: Updated count of the number of items there are in the list, shown at heading <h2></h2>


$(function(){
// shorthand for document.ready();
	var $list, $newItemForm, $newItemButton;
	var item = '';
	$newItemForm = $('#newItemForm');
	$newItemButton = $('#newItemButton');
	
// variables here


// UI elements
// List


$newItemButton.show();
$newItemForm.hide();
$('#showForm').on('click', function() {
	$newItemButton.hide();
	$newItemForm.show();
});

// Button
// Add a new list item
// Remove a new list item

// Fade effect
$('li').hide().each(function(index){
	$(this).delay(450 * index).fadeIn(1600);
	});
	
	// Move to the bottom of the list
	
// update the counter
function updateCount(){
	var items = $('li[class!=complete]').length;
}
updateCount();
});