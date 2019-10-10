<?php

$arv = 15;

var_dump($arv > 0);

if($arv > 0) {
    echo $arv.' arv on positiivne';
 } else if ($arv < 0) {
    echo $arv.' arv on negatiivne';
} else {
    echo $arv.' on null';
}

//Kui väärtus on tõene, siis edastatakse esimene echo rida, kui väärtus on väär, siis edastatakse teine echo rida.