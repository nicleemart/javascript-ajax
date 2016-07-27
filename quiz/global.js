
window.addEventListener("load", function() {

    var submit = document.getElementById("submit");

    var one = document.getElementById("one");
    var two = document.getElementById("two");
    var three = document.getElementById("three");
    var four = document.getElementById("four");
    var question = document.getElementById("question1");

    one.innerHTML = "Razzamafoo";

    var answer = "";
    var currentQuestionNum = 1;

    function json() {

        var getJson = new XMLHttpRequest();
        var url = "quiz.txt";

        getJson.onreadystatechange = function() {
            if (getJson.readyState == 4 && getJson.status == 200) {
                var myArr = JSON.parse(getJson.responseText);
                myFunction(myArr);
            }
        };


    getJson.open("GET", url, true);
    getJson.send();

    };

    function myFunction(arr) {
    	one.innerHTML = arr[0].choice1a;
    	two.innerHTML = arr[0].choice2a;
    	three.innerHTML = arr[0].choice3a;
    	four.innerHTML = arr[0].choice4a;
    	question.innerHTML = arr[0].questionz;
    }

    one.addEventListener("click", function() {
        answer = one.value;
    });
    two.addEventListener("click", function() {
        answer = two.value;
    });
    three.addEventListener("click", function() {
        answer = three.value;
    });
    four.addEventListener("click", function() {
        answer = four.value;
    });

    submit.addEventListener("click", function(form) {
        form.preventDefault();

        var request = new XMLHttpRequest();

        request.addEventListener("loadstart", function() {});

        request.addEventListener("load", function(results) {

            var output = document.getElementById("output");
            output.innerHTML = results.target.responseText;

            var nextQuestion = document.getElementById("next");
            nextQuestion.style.display = "block";

            nextQuestion.addEventListener("click", function() {
            	currentQuestionNum++;
            	json();
            });

        });

        request.open("get", "answer.php?answer=" + answer + "&question=" + currentQuestionNum);
        request.send();

    });

});