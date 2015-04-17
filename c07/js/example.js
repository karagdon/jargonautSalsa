$(function() {

  // SETUP
  var $list, $newItemForm, $newItemButton;
  var item = '';
  $list = $('ul');
  $newItemForm = $('#newItemForm');
  
  // ITEM COUNTER
  function updateCount() {
    var items = $('li[class!=complete]').length;
    $('#counter').text(items);
  }
  updateCount();

  // ADDING A NEW LIST ITEM
  $newItemForm.on('submit', function(e) {
    e.preventDefault();
    var text = $('input:text').val();
    $list.append('<li>' + text + '</li>').delay(450 * index).fadeIn(1600);
    $('input:text').val('');
    updateCount();
  });
});

// $( "li" ).click(function() {
//   $(this).toggleClass("warm cool complete hot");
// });


var cls = [ "cool", "warm", "hot", "complete" ];
var uls = $( "ul" ).children();
$( "li" ).on( "click", function( event ) {
  event.preventDefault();
  this.each(function( i ) {
    this.className = cls[ i ];
  });
  appendClass();
});