
  //SETUP
    var $list, $newItemForm;
    var item = '';
    $list = $('ul');
    $newItemForm = $('#newItemForm');

  
  // ADDING A NEW LIST ITEM
  $newItemForm.on('submit', function(e) {
    e.preventDefault();
    var text = $('input:text').val();
    
    var newlistItem = $('<li class="cool">' + text + '<button class="delete"></button></li>');
    $list.append(newlistItem);
    $('input:text').val('');
    updateCount();
    
  });

 //DONE: click on X icon button to remove item
  $list.on('click', 'button.delete',function(e){
    e.preventDefault();
        // $(this).parent('li').remove();
        $(this).parent('li').animate({opacity: 0.0, paddingLeft: '+=80'}, 500, function(){$(this).parent('li').remove()});
        $(this).animate({opacity: 0.0}, 500, function(){$(this).parent('li').remove()});
  });

  // TODO: click on TRASH to remove all 'complete' / marked for deletion
  $(document).on('click', 'button.deleteComplete',function(e){
    e.preventDefault();
        $('li.complete').animate({opacity: 0.0}, 350, function(){$(this).remove()});
        updateCount();
  });
  
    // TODO: click on TRASH to remove ALL Li
  $(document).on('click', 'button.clearAll',function(e){
    e.preventDefault();
         $('li').animate({opacity: 0.0}, 350, function(){$(this).remove()});
        

        updateCount();
  });

  // ALL CLICK ITEMS THAT HAPPEN ON OR PERTAIN TO A LIST ITEM
  $list.on('click', 'li' ,function () {
  
    //Update the counter
    
  
    // change the class
    var classes = ['hot','warm','cool', 'complete'];
      $(this).each(function(){
        this.className = classes[($.inArray(this.className, classes)+1  )%classes.length];
      
  });
  updateCount();
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
