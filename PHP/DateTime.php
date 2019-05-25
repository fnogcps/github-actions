<?php

/*
  * [PHP] DateTime (exercise)
  * github.com/contatofnog
*/

// Seta o timezone padrão para 'America/Sao_Paulo'
date_default_timezone_set('America/Sao_Paulo');

echo '<h2>Trabalhando com datas/horas</h2>';

echo '<br><b>Dia em números: </b>'. date('d'); // retorna o dia em digitos numéricos
echo '<br><b>Mês em números: </b>'. date('m'); // retorna o mês em digitos numéricos
echo '<br><b>Ano com 2 números: </b>'. date('y'); // retorna o ano com 2 digitos

echo '<br>';

echo '<br><b>Dia em texto: </b>'. date('D'); // retorna em formato textual
echo '<br><b>Mês em números: </b>'. date('M'); // retorna em formato textual
echo '<br><b>Ano em com números: </b>'. date('Y'); // retorna o ano com 4 digitos

echo '<br>';

echo '<br><b>Horário (p.m): </b>'. date('h:i:s'); // Horário em formato de 12 horas
echo '<br><b>Horário (a.m): </b>'. date('H:i:s');  // Horário em formato de 24 horas

echo '<br><b>Data + Horário (a.m): </b>'. date('d/m/Y H:i:s');

// Formato tradicional: d/m/Y

// Date/Datetime (MySQL)

$date = date('Y-m-d');
$datetime = date('Y-m-d H:i:s');

// echo '<br>Time(): '. time();

echo '<br>';

// mktime()
$data_pagamento = mktime(15, 30, 00, 02, 15, 2023);
echo '<br><b>data_pagamento: </b>'. date('d/m/Y - h:i', $data_pagamento);

// strtotime()
$db_data = '2019-04-10 13:30:00';
$db_data = strtotime($db_data);
echo '<br><b>db_data: </b>'. date('d/m/Y H:i:s', $db_data);