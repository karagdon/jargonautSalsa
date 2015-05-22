if (window.sessionstorage){
var txtUsername = document.getElementById('username');
var txtAnswer = document.getElementById('answer');

txtUserName.value = sessionStorage.getItem('username');
txtAnswer.value = sessionStorage.getItem('answer');

txtUserName.addEventListener('input', function(){
sessionStorage.setItem('username', txtUserName.value)
}, false);

txtAnswer.addEventListener('input', function(){
sessionStorage.setItem('answer',txtUserName.value)
 txtAnswer.value}, false);
}