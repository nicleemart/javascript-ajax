window.addEventListener("load", function(){

	var submit = document.getElementById("submit");

	var one = document.getElementById("one");
	var two = document.getElementById("two");
	var three = document.getElementById("three");
	var four = document.getElementById("four");

	var guess = "";

	one.addEventListener("click", function(){
		guess = one.value;
	})
	two.addEventListener("click", function(){
		guess = two.value;
	})
	three.addEventListener("click", function(){
		guess = three.value;
	})
	four.addEventListener("click", function(){
		guess = four.value;
	})

	submit.addEventListener("click", function(e){
		e.preventDefault();

		var request = new XMLHttpRequest();

		request.addEventListener("loadstart", function(){
		});

		request.addEventListener("load", function(results){

			var output = document.getElementById("output");
			output.innerHTML = results.target.responseText;

		});

		request.open ("get", "answer.php?answer=" + guess);
		request.send();

	});

});