window.addEventListener("load", function(){

	var clicker = document.getElementById("clicker");

	clicker.addEventListener("click", function(){
		var request = new XMLHttpRequest();

		request.addEventListener("loadstart", function(){
			document.style.cursor = "wait";
		});

		request.addEventListener("load", function(){
			alert("Done!");
			document.style.cursor = "default";
		});

		request.open ("get", "words.txt");
		request.send();

	});

});