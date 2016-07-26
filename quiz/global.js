window.addEventListener("load", function(){

	var submit = document.getElementById("submit");

	submit.addEventListener("click", function(){
		var request = new XMLHttpRequest();

		request.addEventListener("loadstart", function(){
		});

		request.addEventListener("load", function(results){
			var textHere = document.getElementById("container");

			textHere.innerHTML = results.target.responseText;
		});

		request.open ("get", "answer.php");
		request.send();

	});

});