var username, noteName, textEntered, target;
note Name = document.getElementById('noteName');

function writeLabel(e)
{if (!e) {e = window.event;}} // ie5-8 fallback

target = event.target || event.srcElement;
textEntered = e.target.value;
noteName.textContent = textEntered;

