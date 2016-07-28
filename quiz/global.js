
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
    var nextQuestion = document.getElementById("next");
    var output = document.getElementById("output");

    var currentQuestionNum = -1;

    function json() {

        var getJson = new XMLHttpRequest();

        getJson.onreadystatechange = function() {
            if (getJson.readyState == 4 && getJson.status == 200) {
                var myArr = JSON.parse(getJson.responseText);
                console.log("INCREMENTING currentQuestionNum");
                currentQuestionNum += 1;
                myFunction(myArr);
            }
        };


    getJson.open("GET", "quiz.txt", true);
    getJson.send();

    };

    json();

    function myFunction(arr) {
    if (currentQuestionNum < arr.length){
        oneDiv.innerHTML = arr[currentQuestionNum].choice1;
        twoDiv.innerHTML = arr[currentQuestionNum].choice2;
        threeDiv.innerHTML = arr[currentQuestionNum].choice3;
        fourDiv.innerHTML = arr[currentQuestionNum].choice4;
        question.innerHTML = arr[currentQuestionNum].questions;
        }
    else {
        question.innerHTML = "Complete";
        oneDiv.style.display = "none";
        twoDiv.style.display = "none";
        threeDiv.style.display = "none";
        fourDiv.style.display = "none";
        submit.style.display = "none";
        one.style.display = "none";
        two.style.display = "none";
        three.style.display = "none";
        four.style.display = "none";
    }
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

            
            output.innerHTML = results.target.responseText;
            output.style.display = "block";

            
            nextQuestion.style.display = "block";

        });

        request.open("get", "answer.php?answer=" + answer + "&question=" + currentQuestionNum);
        request.send();

    });

    nextQuestion.addEventListener("click", function() {
        json();
        output.style.display = "none";
        nextQuestion.style.display = "none";
    });

});