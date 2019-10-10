<?php

// defineerime muutujad
$x = 5;
$y = -5;
// jagame üks arv teisega
$jagatis = $x / $y;
// kontrollime, kas jagaja on 0
if($y == 0){
    // siis väljastame hoiatava lause
    echo 'NULLIGA JAGAMINE ON KEELATUD<br>';
} else {
    echo $x.' / '.$y.' = '.$jagatis.'<br>';
}