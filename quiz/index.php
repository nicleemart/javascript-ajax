<html>
	<head>
		<title>Single Page Quiz</title>

		<script type="text/javascript" src="global.js"></script>

		<h2>Quiz</h2>
	</head>

	<body>
		Question<br><br>
		<div>What is the value of 1 + 1 ?</div>
		<form action="answer.php" method="GET" id="quiz">
			<input type="radio" name="one-A" value="A">One<br>
			<input type="radio" name="one-B" value="B">Two<br>
			<input type="radio" name="one-C" value="C">Three<br>
			<input type="radio" name="one-D" value="D">Four<br>
			<input type="submit" value="Submit" id="submit">
		</form>
		<div id="container"></div>
	</body>
</html>