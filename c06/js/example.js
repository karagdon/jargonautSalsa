var username, noteName, textEntered, target;
note Name = document.getElementById('noteName');

function writeLabel(e)
{if (!e) {e = window.event;}} // ie5-8 fallback

target = event.target || event.srcElement;
textEntered = e.target.value;
noteName.textContent = textEntered;

if (document.addEventListener)
	{
		document.addEventListener('click', function(e){recorderControls(e);}, false);
		username.addEventListener('input', writeLabel, false);
	}else{
		docuement.attachEvent('onclick', function(e){recorderControls(e);} );
		username.attachEvent('onkeyup', writeLabel, false);
		
	}
