<?php

// Seta o timezone padrão para 'America/Sao_Paulo'
date_default_timezone_set('America/Sao_Paulo');

echo "Dia em números: ", date('d'); // retorna o dia em digitos numéricos
echo "\nMês em números: ", date('m'); // retorna o mês em digitos numéricos
echo "\nAno com apenas 2 números: ", date('y'); // retorna o ano com 2 digitos

echo "\n\nDia em texto: ", date('D'); // retorna em formato textual
echo "\nMês em texto: ", date('M'); // retorna em formato textual
echo "\nAno completo: ", date('Y'); // retorna o ano com 4 digitos

echo "\n\nHorário (p.m): ", date('h:i:s'); // Horário em formato de 12 horas
echo "\nHorário (a.m): ", date('H:i:s');  // Horário em formato de 24 horas
echo "\nData e Horário (a.m): ", date('d/m/Y H:i:s');

// Date/Datetime (MySQL)
$date = date('Y-m-d');
$datetime = date('Y-m-d H:i:s');

// Exemplo com mktime
$data_pagamento = mktime(15, 30, 00, 02, 15, 2023);
echo "\n\nExemplo com mktime (data_pagamento): ", date('d/m/Y - h:i', $data_pagamento);

// Exemplo com strtotime
$db_data = '2019-04-10 13:30:00';
$db_data = strtotime($db_data);
echo "\nExemplo com strtotime (db_data): ", date('d/m/Y H:i:s', $db_data);
