// console.log('hello world')

const idInput = document.getElementById('idInput');
const colorInput = document.getElementById('colorInput');

function setCard() {
  let card = document.getElementById(idInput.value);
  card.style.color = colorInput.value;
  console.log(card);
}

function resetCard() {
  const diamonds = document.getElementById("diamonds");
  const clubs = document.getElementById("clubs");
  const hearts = document.getElementById("hearts");
  const spades = document.getElementById("spades");

  diamonds.style.color = 'grey';
  clubs.style.color = 'grey';
  hearts.style.color = 'grey';
  spades.style.color = 'grey';
}
