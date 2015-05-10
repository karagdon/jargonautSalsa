$(#content).on('click', '#sessions il a', function(e){
  e.preventDefault();
  var fragment = this.href;

  fragment = fragment.replace('#', ' #');
  $('#details').load(fragment);
  
});

