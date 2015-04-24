
    updateCount();

  //SETUP
    var $list, $newItemForm;
    var item = '';
    $list = $('ul');
    $newItemForm = $('#newItemForm');

  
  // ADDING A NEW LIST ITEM
  $newItemForm.on('submit', function(e) {
    e.preventDefault();
    var text = $('input:text').val();
    
    var newlistItem = $('<li class="cool">' + text + '</li>');
    $list.append(newlistItem);
    $('input:text').val('');
    updateCount();
    
  });
  
  
  //if class is complete, (to the right) click on trash icon button to remove item


$list.on('click', 'li',function () {
    // change the class
    var classes = ['hot','warm','cool', 'complete completebtn'];
      $(this).each(function(){
        this.className = classes[($.inArray(this.className, classes)+1)%classes.length];
    
    var delButton = $('<button/>');
    
         
//Update the counter
    updateCount();
      
  });
});
  
  // ITEM COUNTER
  function updateCount() {
    var itemsAll = $('li[class!=complete]').length;
    $('#counter').text(itemsAll);
      
    // COOL ITEM COUNTER
      var itemsHot = $('li[class=hot]').length;
      $('#counterHot').text(itemsHot);
  
    
    // WARM ITEM COUNTER
      var itemsWarm = $('li[class=warm]').length;
      $('#counterWarm').text(itemsWarm);
  
    
    // HOT ITEM COUNTER
      var itemsCool = $('li[class=cool]').length;
      $('#counterCool').text(itemsCool);
  
    // COMPLETE ITEM COUNTER
      var itemsDone = $('li[class=complete]').length;
      $('#counterComplete').text(itemsDone);
  }
  

//Update the counter
updateCount();
