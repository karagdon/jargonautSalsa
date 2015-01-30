text = ''
function cat(){
	for (var i=1; i <= document.getElementById("aNumber").value; i++){
		if (i % 15 == 0)
		text += '<img src="images/gcat.png">'
		else if (i % 3 == 0)
		text += '<img src="images/paw.png">'
		else if (i % 5 == 0)
		text += '<img src="images/cat.png">'
		else
		text += '<img src="images/bee.png">'
	}
	document.getElementById("output").innerHTML = text 


}