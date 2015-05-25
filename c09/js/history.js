// HTML 5 History api describes the functionalirt of the history object in modern web browsers. You can access and update the browser history with this!

// history.back();
// history.forward();
// history.go();
// history.pushState();
// history.replaceState();
// history.length
// window.onpopstate

$(function(){
  function loadContent(url){
    $('#content').load(url + '#container').hide().fadeIn('slow');
  }
  
  $('nav a').on('click', function(e){
    e.preventDefault();
    var href = this.href;
    var $this = $(this);
    $('a').removeClass('current');
    $this.addClass('current');
    loadContent(href);
    history.pushState('', $this.text, href);
  });

window.onpopstate = function(){
  var path = location.pathname;
  loadContent(path);
  var page = path.substring(location.pathname.lastIndexOf("/") + 1);
  $('a').removeClass('current');
  $('[href="' + page + '"]').addClass('current');
};
});
