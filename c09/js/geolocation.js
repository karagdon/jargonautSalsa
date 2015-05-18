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
  elMap.textContent = "Where are you...?";
}
else {
  elMap.textContent = "Message";
}


function success(position){
  msg =  '<h3>Longitude:<br/>';
  msg +=  position.coords.latitude + '</h3>';
   msg +=  '<h3>Latitude:<br/>';
  msg +=  position.coords.longitude + '</h3>';
  elMap.innerHTML = msg;
  
}

function fail(msg){
  elMap.textContent = msg;
  console.log(msg.code);
}


