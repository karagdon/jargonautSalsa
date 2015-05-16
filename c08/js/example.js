$(function() {
  
  var times;
  $.ajax ({
    beforeSend: function(xhr){
      if (xhr.overrideMimeType){
        xhr.overrideMimeType("application/json");
      }
    }
  });
});
function loadTimeTable(){
  $.getJSON('data/example.json').done(function(data){
    times = data;}).fail(function(){
      $('event').html("Sorry!")});
  }

loadTimeTable();

$('#content').on('click', '#event a', function(e){
  
  e.preventDefault();
  var loc = this.id.toUppperCase();
  var newContent = '';
  for (var i = 0; i < times[loc].length; i++){
    newContent +=' <li><span class="time">' + times[loc][i].time + '</span>';
    newContent += '<a href="descriptions.html#"';
    newContent += times[loc][i].title.replace(/ /g, '-' +'">');
    newContent += times[loc][i].title + '</a></li>';
  }
});
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

$('nav a').on('click', function(e){
  e.preventDefault();
  var url = this.href;

$('nav a.current').removeClass('current');
$(this).addClass('current');

$('#container').remove();
$('#content').load(url + '#container').hide().fadeIn('slow');
});


