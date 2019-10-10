<?php
// Praegune aasta
$hetkeAasta = 2019;
// kasutaja poolt sisestatud sünniaasta
$sunniAasta = 2008;
// aastate vahe - kasutaja vanus
$vanus = $hetkeAasta - $sunniAasta;
echo 'Oled '.$vanus.' aastat vana<br>';
// kontrollime, kas vanus jagub 5-ga
// selleka leiame jagamise jääk
$jaak = $vanus % 5;
// kui jääk on null - vanus jagub 5-ga
if($jaak == 0){
    echo 'Sel aasta on juubel! Õnnitleme!<br>';
} else {
    echo 'Veel juubelit ei ole<br>';
}
