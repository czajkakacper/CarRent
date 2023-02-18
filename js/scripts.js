/*!
* Start Bootstrap - Heroic Features v5.0.5 (https://startbootstrap.com/template/heroic-features)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-heroic-features/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

function sprawdzPole(pole_id, obiektRegex) {
    var obiektPole = document.getElementById(pole_id);
    if(!obiektRegex.test(obiektPole.value)) return (false);
    else return (true);
}

function sprawdz_radio(nazwa_radio){
    var obiekt=document.getElementsByName(nazwa_radio);
    for (i=0;i<obiekt.length;i++) { 
        wybrany=obiekt[i].checked;
        if (wybrany) return true; 
    }
    return false;
}

function sprawdz_box(box_id) {
    var obiekt=document.getElementById(box_id);
    if (obiekt.checked) return true;
    else return false;
}

function zapisz() {
    var item = {};

    var ok=true; 
    obiektImie = /^[a-zA-Z]{2,20}$/;
    obiektNazwisko = /^[a-zA-Z]{2,20}$/; 
    obiektEmail = /^([a-zA-Z0-9])+([.a-zA-Z0-9_-])*@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-]+)+/;
    obiektWiek = /^[1-9][0-9]{1,2}$/;
    obiektTelefon = /^([1-9]{1})+([0-9]{8})$/;
    obiektKluczyki = /^[1-5]{1}$/;

    if (!sprawdzPole("imie",obiektImie)) { 
        ok=false;
        document.getElementById("imie_error").innerHTML = "Wpisz poprawnie Imię!";
    }
    else {
        document.getElementById("imie_error").innerHTML = "";
        item.imie = document.getElementById('imie').value;
    }

    if (!sprawdzPole("nazwisko",obiektNazwisko)) { 
        ok=false;
        document.getElementById("nazwisko_error").innerHTML = "Wpisz poprawnie Nazwisko!";
    }
    else{
        document.getElementById("nazwisko_error").innerHTML="";
        item.nazwisko = document.getElementById('nazwisko').value;
    }

    if(!sprawdzPole("wiek", obiektWiek)) {
        ok=false;
        document.getElementById("wiek_error").innerHTML = "Wpisz poprawnie Wiek!";
    }
    else{
        document.getElementById("wiek_error").innerHTML="";
        item.wiek = document.getElementById('wiek').value;
    } 

    if(!sprawdzPole("email", obiektEmail)) {
        ok=false;
        document.getElementById("email_error").innerHTML = "Wpisz poprawnie adres Email!";
    }
    else{
        document.getElementById("email_error").innerHTML="";
        item.email = document.getElementById('email').value;
    }

    if(!sprawdzPole("telefon", obiektTelefon)) {
        ok=false;
        document.getElementById("telefon_error").innerHTML = "Wpisz poprawnie numer Telefonu!";
    }
    else{
        document.getElementById("telefon_error").innerHTML="";
        item.telefon = document.getElementById('telefon').value;
    }
    
    if(!sprawdzPole("kluczyki", obiektKluczyki)) {
        ok=false;
        document.getElementById("kluczyki_error").innerHTML = "Wpisz poprawnie liczbę Kluczyków!";
    }
    else{
        document.getElementById("kluczyki_error").innerHTML="";
        item.kluczyki = document.getElementById('kluczyki').value;
    }   

    if(ok == true){
        item.data = document.getElementById('data').value;
        item.czas = document.getElementById('czas').value;
        item.silnik = document.getElementById('silnik').value;
        item.komentarz = document.getElementById('komentarz').value;
        var tab = document.getElementsByName('nadwozie');
        var nadwozie_result = "";
        for(let i=0; i<tab.length; i++){
            if(tab[i].checked){
                nadwozie_result = tab[i].value;
                break;
            }
        }
        item.nadwozie = nadwozie_result;
        var tab2 = document.getElementsByName('wyposazenie');
        var wyposazenie_result = "";
        for(let i=0; i<tab2.length; i++){
            if(tab2[i].checked) wyposazenie_result += tab2[i].value + " ";
        }
        item.wyposazenie = wyposazenie_result;       
        localStorage.setItem(item.email, JSON.stringify(item)); 
    }
}

function pokaz(){
    var content = '',
    startTab = "<table>",
    startCol = "<tr>",
    startRow = "<td>",
    endRow = "</td>",
    endCol = "</tr>",
    endTab = "</table> <br>";
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i), keyValue = JSON.parse(localStorage.getItem(key));
        content += startTab + startCol + startRow + "Imię: " + endRow + startRow + keyValue.imie + endRow + endCol;
        content += startTab + startCol + startRow + "Nazwisko: " + endRow + startRow + keyValue.nazwisko + endRow + endCol;
        content += startTab + startCol + startRow + "Email: " + endRow + startRow + keyValue.email + endRow + endCol;
        content += startTab + startCol + startRow + "Wiek: " + endRow + startRow + keyValue.wiek + endRow + endCol;
        content += startTab + startCol + startRow + "Numer telefonu: " + endRow + startRow + keyValue.telefon + endRow + endCol;
        content += startTab + startCol + startRow + "Ilość kluczyków: " + endRow + startRow + keyValue.kluczyki + endRow + endCol;
        content += startTab + startCol + startRow + "Data rezerwacji: " + endRow + startRow + keyValue.data + endRow + endCol;
        content += startTab + startCol + startRow + "Czas odbioru: " + endRow + startRow + keyValue.czas + endRow + endCol;
        content += startTab + startCol + startRow + "Rodzaj nadwozia: " + endRow + startRow + keyValue.nadwozie + endRow + endCol;
        content += startTab + startCol + startRow + "Dodatkowe wyposażenie: " + endRow + startRow + keyValue.wyposazenie + endRow + endCol;
        content += startTab + startCol + startRow + "Rodzaj silnika: " + endRow + startRow + keyValue.silnik + endRow + endCol;
        content += startTab + startCol + startRow + "Komenatrz: " + endRow + startRow + keyValue.komentarz + endRow + endCol + endTab;
    }
    document.getElementById('cart').innerHTML = content;
}

function usun() {
    localStorage.clear();
}

function usunWynajem() {
    var temp = document.getElementById('email').value;
    localStorage.removeItem(temp);
}