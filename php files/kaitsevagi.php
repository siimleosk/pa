<?php

// defineerime muutujad
$kodakontsus = 'eestlane';
$vanus = 18;
$haridus = 'kutseharidus';
// kontrollime
// kas oled eestlane
if ($kodakontsus == 'eestlane') {
    // siis saab juba edasi kontrollida
    // milline on inimese vanus
    if ($vanus >= 18) {
        // oled piisavalt vana
        // vaatame mis on su haridus
        if ($haridus == 'pohiharidus' or $haridus == 'kutseharidus' or $haridus == 'keskharidus' or $haridus == 'korgharidus') {
            // haridustase on sobilik
            echo 'Haridustase on sobilik<br>';
            echo 'Oled sõjaväekohustuslane<br>';
        } else {
            echo 'Haridustase ei ole piisav<br>';
        }
    } else {
        // liiga noor
        echo 'Oled veel liiga noor<br>';
    }
} else {
    // väliskodanikud Eestit ei kaitse
    echo 'Riigiseadus ei kohustu sõevaekohustuseks<br>';
}