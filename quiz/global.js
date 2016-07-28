
window.addEventListener("load", function() {

    var submit = document.getElementById("submit");

    var one = document.getElementById("checkOne");
    var oneDiv = document.getElementById("one");
    var two = document.getElementById("checkTwo");
    var twoDiv = document.getElementById("two");
    var three = document.getElementById("checkThree");
    var threeDiv = document.getElementById("three");
    var four = document.getElementById("checkFour");
    var fourDiv = document.getElementById("four");
    var question = document.getElementById("question");

    var currentQuestionNum = -1;

    function json() {

        var getJson = new XMLHttpRequest();
        var url = "quiz.txt";

        getJson.onreadystatechange = function() {
            if (getJson.readyState == 4 && getJson.status == 200) {
                var myArr = JSON.parse(getJson.responseText);
                currentQuestionNum += 1;
                myFunction(myArr);
            }
        };


    getJson.open("GET", url, true);
    getJson.send();

    };

    json();

    function myFunction(arr) {
    	oneDiv.innerHTML = arr[currentQuestionNum].choice1;
    	twoDiv.innerHTML = arr[currentQuestionNum].choice2;
    	threeDiv.innerHTML = arr[currentQuestionNum].choice3;
    	fourDiv.innerHTML = arr[currentQuestionNum].choice4;
    	question.innerHTML = arr[currentQuestionNum].questions;
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

        request.addEventListener("loadstart", function() {
        });

        request.addEventListener("load", function(results) {

            var output = document.getElementById("output");
            output.innerHTML = results.target.responseText;
            output.style.display ="block";

            var nextQuestion = document.getElementById("next");
            nextQuestion.style.display = "block";

            nextQuestion.addEventListener("click", function() {
            	json();
                output.style.display = "none";
                nextQuestion.style.display = "none";
            });

        });

        request.open("get", "answer.php?answer=" + answer + "&question=" + currentQuestionNum);
        request.send();

    });

});