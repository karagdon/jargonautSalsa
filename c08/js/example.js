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