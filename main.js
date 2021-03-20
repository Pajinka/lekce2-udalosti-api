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

/**
 * Funkce, která přehraje předaný prvek
 * 
 */
function prehraj() {
    let audioElement = document.querySelector('#js-audio');
    audioElement.play();
}

/**
 * Funkce, která pozataví předaný prvek
 * 
 * @param {string} elementSelector 
 */
 function zastav(elementSelector) {
    let audioElement = document.querySelector(elementSelector);
    audioElement.pause();
}
