<?php
$path = $_SERVER ['DOCUMENT_ROOT'];
$path .= '/functions/dbConnection.php';
include($path);
if(isset($_POST['email'])){
	$email = $_POST['email'];
	$conn = new mysqli($GLOBALS ['servername'], $GLOBALS ['dbuser'], $GLOBALS ['dbpass'], $GLOBALS ['dbname']);
	if($conn->connect_error)
		die('Connection failed: ' . $conn->connect_error);
	$query = "INSERT INTO `newsletter`(`email`) VALUES ('" . $email ."')";
	$res = $conn->query($query);
	if($res === false)
		echo false;
	else
		echo true;
	return;
}
?>