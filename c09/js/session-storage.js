if (window.sessionstorage){
  
// get the form elements!
var txtUsername = document.getElementById('username');
var txtAnswer = document.getElementById('answer');

// populate the form elements
txtUserName.value = sessionStorage.getItem('username');
txtAnswer.value = sessionStorage.getItem('answer');


// save the data!
txtUserName.addEventListener('input', function(){
sessionStorage.setItem('username', txtUserName.value)
}, false);

// save the data!
txtAnswer.addEventListener('input', function(){
sessionStorage.setItem('answer',txtUserName.value)
 txtAnswer.value}, false);
}