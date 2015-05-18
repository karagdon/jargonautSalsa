// TODO: Is geolocation supported + enabled?
//TODO: Ask for permission to share their location
//  TODO: IF YES, WRITE the location
//  TODO: IF NO, WRITE not found message
// TODO: If location not gained (for any reason), cannot be found, log to //
// cosole
 
var elMap = document.getElementById('loc');
var msg = 'I don\'t know where you are\! :(';

if (Modernizr.geolocation){
  navigator.geolocation.getCurrentPosition(success, fail);
  elMap.textContent = "Where am i...?";
}
else {
  elMap.textContent = msg;
}

$("button#loc").on('click', function(){

function success(position){
  msg =  '<h3>Longitude:</h3>' + position.coords.longitude + '<br/><h3>Latitude:</h3>' + position.coords.latitude + '';
  elMap.innerHTML = msg;
  
}

function fail(msg){
  elMap.textContent = msg;
  console.log(msg.code);
}


});