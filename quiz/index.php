<html>
	<head>
		<title>Single Page Quiz</title>

		 <link rel="stylesheet" type="text/css" href="style.css">
		<script type="text/javascript" src="global.js"></script>

		<h2>Quiz</h2>
	</head>

	<body>
		<div class="style">
		<div id= "question1"></div>
		<form action="" method="get" id="quiz">
			<div class="display">
			<input type="radio" name="answer" value="A"><div id="one"></div>
			<input type="radio" name="answer" value="B"><div id="two"></div>
			<input type="radio" name="answer" value="C"><div id="three"></div>
			<input type="radio" name="answer" value="D"><div id="four"></div>
			</div>
			<input type="submit" value="Submit" id="submit">
		</form>
		</div>
		<div id="output"></div>
		<button id ="next" style="display:none">Next Question</button>
	</body>
</html>