window.addEventListener("load", function(){

	var clicker = document.getElementById("clicker");

	clicker.addEventListener("click", function(){
		var request = new XMLHttpRequest();

		request.addEventListener("loadstart", function(){
			document.style.cursor = "wait";
		});

		request.addEventListener("load", function(hello){
			var loadHere = document.getElementById("container");
			
			loadHere(hello.target.responseText);
			document.style.cursor = "default";
		});

		request.open ("get", "words.txt");
		request.send();

	});

});