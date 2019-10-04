<html lang="en"><head><meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <style>
        table, th, td {
            border: 1px solid black;
            border-collapse: collapse;
            text-align: center;
        }

        th {
            background-color: crimson;
        }
    </style>
    <title>Aritmeetilised operaatorid</title>
    </head>
    <body>
<?php

// Operaatorid ja tehted


// Muutujate defineerimine
$x = 8;
$y = 3;

// Aritmeetilised operaatorid
$liitmine = $x + $y;
$lahutamine = $x - $y;
$korrutmine = $x * $y;
$jagamine = $x / $y;
$jaak = $x % $y;

//Tabeli väljastamine

echo
    '<table>
    <!-- Tabeli päis -->
    <thead>
        <th>Operaator</th>        
        <th>Nimetus</th>
        <th>Näide</th>
        <th>Tulemus</th>
    </thead>
    <!-- Tabeli keha -->
    <tbody>
    <!-- Liitmine -->
    <tr>
        <td>x + y</td>
        <td>Liitmine</td>
        <td>'.$x.' + '.$y.'</td>
        <td>'.$liitmine.'</td>
    </tr>
    <!-- Lahutamine -->
    <tr>
        <td>x - y</td>
        <td>Lahutamine</td>
        <td>'.$x.' - '.$y.'</td>
        <td>'.$lahutamine.'</td>
    </tr>
    <!-- korrutamine -->
    <tr>
        <td>x * y</td>
        <td>Korrutamine</td>
        <td>'.$x.' * '.$y.'</td>
        <td>'.$korrutmine.'</td>
    </tr>
    <!-- jagamine -->
    <tr>
        <td>x / y</td>
        <td>Jagamine</td>
        <td>'.$x.' / '.$y.'</td>
        <td>'.$jagamine.'</td>
    </tr>
    <!-- Jääk -->
    <tr>
        <td>x % y</td>
        <td>Jääk</td>
        <td>'.$x.' % '.$y.'</td>
        <td>'.$jaak.'</td>
    </tr>
    
    </tbody>
    
    
    </table>';