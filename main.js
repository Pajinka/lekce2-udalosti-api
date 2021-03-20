// tady je místo pro náš program

let nadpis = document.querySelector('h1');
nadpis.classList.toggle('zluty');

//nadpis.classList.remove('zluty');

function secti(a, b) {
    nadpis.innerHTML = a + b;
}

function ztucni() {
    document.querySelector('#js-paragraph').style.fontWeight = 'bold';
}
let audioElement = document.getElementById('js-pisnicka');
/**
 * Funkce, která přehraje předaný prvek
 * 
 */

function prehraj() {
  audioElement.play();
}

function zastav(elementSelector) {
    audioElement.pause();
}

//a tlačítko s nápisem “červený po kliknutí”.
function cervene() {
  document.querySelector('#js-paragraph').style.color = 'red';
}


//Domácí úkol 1: Tlačítko “červené po kliknutí” bude odstavci přidávat/odebírat třídu, 
//která bude barvu písma v odstavci měnit na červenou.
let odstavec = document.querySelector('#js-paragraph');
function zcervena() {
  odstavec.classList.add('cerveny');
}


//Domácí úkol 2: přidej tlačítko “větší po kliknutí”, které písmo zvětší o jeden pixel oproti jeho aktuální velikost.
function zvetsi() {
  fontSize = parseInt(odstavec.style.fontSize)
  newFontSize = fontSize + 1
  document.querySelector('#js-paragraph').style.fontSize = newFontSize +'px';
}

//Domácí úkol 3: Dopracuj ovládání audio souboru
//nastavení zvuku na 0, 0.5 a 1
//vrácení se na začátek

function potichu() {
  //samozrejme bych mohla i volume 0.0, a pak bych nemusela blbnout s muted u ostatnich, ale to by nebyla takova zabava
  audioElement.muted = true;
}

function napul() {
  audioElement.muted = false
  audioElement.volume = 0.5;
}

function hlasite() {
  audioElement.muted = false
  audioElement.volume = 1;
}

function odZacatku() {
  audioElement.currentTime = 0;
}