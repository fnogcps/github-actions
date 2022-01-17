<?php

/*
  * [PHP] Superglobals (exercise)
  * github.com/fnogcps
*/

$a = 30;
$b = 10;

// $GLOBALS

echo '<h2>$GLOBALS</h2>';

function Sum() { 
    $GLOBALS['x'] = $GLOBALS['a'] + $GLOBALS['b'];
}

Sum();

echo "<b>[GLOBALS]</b> ". $x;

// $_SERVER

echo '<h2>$_SERVER</h2>';

echo "<b>[PHP_SELF]</b> ". $_SERVER['PHP_SELF'];
echo "<br><b>[HTTP_REFERER]</b> ". $_SERVER['SERVER_NAME'];
echo "<br><b>[HTTP_HOST]</b> ". $_SERVER['HTTP_HOST'];
echo "<br><b>[HTTP_REFERER]</b> ". $_SERVER['HTTP_REFERER'];
echo "<br><b>[HTTP_USER_AGENT]</b> ". $_SERVER['HTTP_USER_AGENT'];
echo "<br><b>[SCRIPT_NAME]</b> ". $_SERVER['SCRIPT_NAME'];

// $_COOKIE

setcookie("testCookie", 100);

echo '<h2>$_COOKIE</h2>';
echo '<b>[$_COOKIE]</b> ', var_dump($_COOKIE);

// $_REQUEST

echo '<h2>$_REQUEST</h2>';
echo '<b>[$_REQUEST]</b> ', var_dump($_REQUEST);

?>

<!DOCTYPE html>

<html>
	<head>
		<meta charset="utf-8">
		<style type="text/css">
			#frmPost {padding-top: 15px;}
		</style>
	</head>

	<body>
		<form method="post" id="frmPost">
			<input type="text" name="postValue" placeholder="POST">
			<button type="submit" form="frmPost" value="Submit">Method POST</button>
		</form>

		<form method="get" id="frmGet">
			<input type="text" name="getValue" placeholder="GET">
			<button type="submit" form="frmGet" value="Submit">Method GET</button>
		</form>

		<?php
			// $_POST & $_GET

			echo '<h2>$_POST & $_GET</h2>';
			echo '<b>[postValue]</b> '. $_POST['postValue'];
			echo '<br> <b>[getValue]</b> '. $_GET['getValue'];
		?>

	</body>
</html>