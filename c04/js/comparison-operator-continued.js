var score1 = 90;
var score2 = 95;
var highScorel = 75;
var highScore2 = 95;

var comparison= (score1 + score2) > (highScorel + highScore2);

var el = document.getElementById('answer');
el.textContent ='New high score:'+ comparison;