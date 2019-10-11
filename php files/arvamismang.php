<?php

$etteAntud = 23;
$kasutaja = 23;

if($etteAntud == $kasutaja) {
    echo 'Leidsid õige numbri!<br> Number on '.$kasutaja;
} else {
    $vahemik = $kasutaja - $etteAntud;
    if(abs($vahemik) <= 5) {
        echo 'Oled lähedal!<br>';
    } if($kasutaja > $etteAntud) {
        echo $kasutaja.' on suurem kui etteantud arv';
    } else {
        echo $kasutaja.' on väiksem kui etteantud arv';
    }
}