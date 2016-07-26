window.addEventListener("load", function(){

	var submit = document.getElementById("submit");

	submit.addEventListener("click", function(){
]
		var request = new XMLHttpRequest();

		request.addEventListener("loadstart", function(){
		});

		request.addEventListener("load", function(results){
			var output = document.getElementById("output");

			output.innerHTML = results.target.responseText;

		});

		request.open ("get", "answer.php?answer=");
		request.send();

	});

});