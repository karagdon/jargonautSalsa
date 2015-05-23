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
});