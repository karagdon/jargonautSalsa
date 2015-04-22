   updateCount();

  //SETUP
    var $list, $newItemForm, $newItemButton;
    var item = '';
    $list = $('ul');
    $newItemForm = $('#newItemForm');

  
  // ADDING A NEW LIST ITEM
  $newItemForm.on('submit', function(e) {
    e.preventDefault();
    var text = $('input:text').val();
    $list.append('<li class="cool">' + text + '</li>');
    $('input:text').val('');
    updateCount();
  
    // TODO: change class of new list items
    $('li').click(function () {
      
      // change the class
      var classes = ['hot','warm','cool', 'complete'];
        $(this).each(function(){
          this.className = classes[($.inArray(this.className, classes)+1)%classes.length];
        });
      
      //Update the counter
      updateCount();
        
    });

  });

  $('li').click(function () {
    
    // change the class
    var classes = ['hot','warm','cool', 'complete'];
      $(this).each(function(){
        this.className = classes[($.inArray(this.className, classes)+1)%classes.length];
      });
    
    //Update the counter
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
