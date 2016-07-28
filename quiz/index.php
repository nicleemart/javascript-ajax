<html>
	<head>
		<title>Single Page Quiz</title>

		 <link rel="stylesheet" type="text/css" href="style.css">
		<script type="text/javascript" src="global.js"></script>

		<h2>Quiz</h2>
	</head>

	<body>
		<div class="style">
		<div id= "question"></div>
		<form action="" method="get" id="quiz">
			<div class="answersRow">
			<input type="radio" name="answer" value="A" id="checkOne"><div id="one"></div>
			<input type="radio" name="answer" value="B" id="checkTwo"><div id="two"></div>
			<input type="radio" name="answer" value="C" id="checkThree"><div id="three"></div>
			<input type="radio" name="answer" value="D" id="checkFour"><div id="four"></div>
			</div>
			<input type="submit" value="Submit" id="submit">
		</form>
		</div>
		<div id="output" style="display:none"></div>
		<button id ="next" style="display:none">Next Question</button>
	</body>
</html>