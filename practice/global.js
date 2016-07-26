window.addEventListener("load", function(){

	var clicker = document.getElementById("clicker");

	clicker.addEventListener("click", function(){
		var request = new XMLHttpRequest();

		request.addEventListener("loadstart", function(){
			document.getElementById("myP").style.cursor = "wait";
		});

		request.addEventListener("load", function(hello){
			var textHere = document.getElementById("container");

			textHere.innerHTML = hello.target.responseText;
			document.style.cursor = "default";
		});

		request.open ("get", "words.txt");
		request.send();

	});

});