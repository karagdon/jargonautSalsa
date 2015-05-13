$(function() {
  
  var times;
  $.ajax ({
    beforeSend: function(xhr){
      if (xhr.overrideMimeType){
        xhr.overrideMimeType("application/json");
      }
    }
  })
}
function loadTimeTable(){
  $.getJSON('data/example.json').done(function(data){times = data;}).fail(function(){$('event').html("Sorry!");
    
  });
}
loadTimeTable();
// Click on a session to load the description

$('#content').on('click', '#sessions il a', function(e){
  e.preventDefault();
  var fragment = this.href;

  fragment = fragment.replace('#', ' #');
  $('#details').load(fragment);

  // Update selected snippet
  $('#sessions a.current').removeClass('current');
  $('this').addClass('current');
});


// Click on primary navigation


$('#details').text('');
});

#page414
