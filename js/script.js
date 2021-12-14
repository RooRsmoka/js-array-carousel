// Creo array di titoli.
const headings = ['Questo è un titolo.', 'Questo è un\'altro titolo.', 'Anche questo è un titolo.', 'Questo è sicuramente un titolo.', 'Questo invece è Bob'];
// Creo array di paragrafi.
const paragraph = ['', '', '', '', ''];
// Creo la variabile currentIndex.
let currentIndex = 0;
// Salvo in una variabile l'elemento titolo.
const headingsHtml = document.querySelector('.headings');
// Salvo in una variabile l'elemento paragrafo.
const paragraphHtml = document.querySelector('.paragraph');
// Salvo in una variabile il "bottone" che userò per cambiare slide (avanti).
const rightArrow = document.querySelector('.next');
// Salvo in una variabile il "bottone" che userò per cambiare slide (indietro).
const leftArrow = document.querySelector('.previous');
// con la variabile currentIndex a 0 parto col mostrare il titolo e parafrafo con indice 0.
headingsHtml.innerHTML = headings[currentIndex];
paragraphHtml.innerHTML = paragraph[currentIndex];
// Metto in ascolto il "bottone" (avanti) di un evento (click) e
// incremento il currentIndex per cambiare titolo e paragrafo.
rightArrow.addEventListener('click', function() {
    currentIndex++;
    if (currentIndex > headings.length - 1 && currentIndex > paragraph.length - 1) {
        currentIndex = 0;
    }
    headingsHtml.innerHTML = headings[currentIndex];
    paragraphHtml.innerHTML = paragraph[currentIndex];
});
// Metto in ascolto il "bottone" (indietro) di un evento (click) e
// decremento il currentIndex per cambiare titolo e paragrafo.
leftArrow.addEventListener('click', function() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = 4;
    }
    headingsHtml.innerHTML = headings[currentIndex];
    paragraphHtml.innerHTML = paragraph[currentIndex];
});