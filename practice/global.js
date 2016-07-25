window.addEventListener("load", function(){

	var clicker = document.getElementById("clicker");

	clicker.addEventListener("click", function(){
		var request = new XMLHttpRequest();

		request.addEventListener("loadstart", function(){
			document.style.cursor = "wait";
		});

		request.addEventListener("load", function(response){
			alert("response.target.responseText");
			document.style.cursor = "default";
		});

		request.open ("get", "words.txt");
		request.send();

	});

});