<?php

if ($_GET["answer"] == "B" &&
	$_GET["question"] == "0")
{

?>

Correct

<?php }

elseif ($_GET["answer"] == "D" &&
	$_GET["question"] == "1")
{

?>

Correct

<?php }

elseif ($_GET["answer"] == "A" &&
	$_GET["question"] == "2")
{

?>

Correct

<?php } else {

?>

Incorrect

<?php } ?>