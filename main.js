console.log('hello World!');

const card = document.querySelector('.card__inner');
let cantidadClicks = 0;

card.addEventListener('click', function () {
    console.log(cantidadClicks)
    cantidadClicks++
    card.classList.toggle('is-flipped');
    console.log(cantidadClicks);
}
)