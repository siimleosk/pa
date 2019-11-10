<?php
// defineerime vajalikud muutujad
$number = rand(1, 7);
// switch kontrollimiseks
switch ($number){
    case 1:
        echo 'Sinu number 1<br>';
        break;
    case 2:
        echo 'Sinu number 2<br>';
        break;
    case 3:
        echo 'Sinu number 3<br>';
        break;
    case 4:
        echo 'Sinu number 4<br>';
        break;
    case 5:
        echo 'Sinu number 5<br>';
        break;
    case 6:
        echo 'Sinu number 6<br>';
        break;
    default:
        echo 'Midagi läks valesti<br>';
        break;
}
echo 'Sellega on täringuvise tehtud';
