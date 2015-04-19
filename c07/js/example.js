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

$( "li" ).on( 'click',function() {
    var status = ["hot","complete","cool","warm"];
     i = (i+1)%status.length;
     $('this').removeClass().addClass(status[i]);
});

// TODO: fix switch class