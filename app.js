//Arrays
let numeros = ['A','2','3','4','5','6','7','8','9','10','J','Q','K']
let pintas= ["&spades;","&clubs;","&hearts;","&diams;"]
//linkHtml
var nume = document.getElementById('nmero');
var pintaU = document.getElementById('pintArriba')
var pintaD = document.getElementById('pintAbajo')


//Numero random
let random_numero =Math.floor(Math.random()*numeros.length);

nume.innerHTML = numeros[random_numero]

//Pinta random

let random_pinta = Math.floor(Math.random()*pintas.length)

//onload + condicional
window.onload = () => {
if (pintas[random_pinta] === "&hearts;" || pintas[random_pinta] === "&diams;") {            
        pintaU.style.color = "red";
        pintaD.style.color = "red";
        pintaU.innerHTML = pintas[random_pinta];
        pintaD.innerHTML = pintas[random_pinta];
}else {
        pintaU.innerHTML = pintas[random_pinta];
        pintaD.innerHTML = pintas[random_pinta];
    }
}



