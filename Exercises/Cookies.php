<?php

/*
  * [PHP] Cookies (exercise)
  * github.com/contatofnog
*/

if($_COOKIE['name'] == 'Felipe') {
  echo $_COOKIE['name'] ."<br>";

  // Delete a Cookie
  setcookie('name', '', time()-3600);
}

// Create/Retrieve a Cookie
setcookie('name', 'Felipe', time()+3600);