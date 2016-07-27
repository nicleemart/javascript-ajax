<html>
	<head>
		<title>Single Page Quiz</title>

		<script type="text/javascript" src="global.js"></script>

		<h2>Quiz</h2>
	</head>

	<body>
		Question<br><br>
		<div id= "question1"></div>
		<form action="" method="get" id="quiz">
			<input type="radio" name="answer" value="A"><div id="one"></div><br>
			<input type="radio" name="answer" value="B"><div id="two"></div><br>
			<input type="radio" name="answer" value="C"><div id="three"></div><br>
			<input type="radio" name="answer" value="D"><div id="four"></div><br>
			<input type="submit" value="Submit" id="submit">
		</form>
		<div id="output"></div>
		<button id ="next" style="display:none">Next Question</button>
	</body>
</html>