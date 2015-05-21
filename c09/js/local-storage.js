if (window.localstorage){
var txtUsername = document.getElementById('username');
var txtAnswer = document.getElementById('answer');

txtUserName.value = localStorage.getItem('username');
txtAnswer.value = localStorage.getItem('answer');

txtUserName.addEventListener('input', function(){
localStorage.setItem('username', txtUserName.value)
});

txtAnswer.addEventListener('input', function(){
localStorage.setItem('answer',txtUserName.value)
 txtAnswer.value});
}