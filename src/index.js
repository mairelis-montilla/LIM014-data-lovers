const listPokemonIndex = document.getElementById('listPokemonIndex');
const listTopIndex = document.getElementById('listTopIndex');
const homeButton = document.getElementById('homeButton');

listPokemonIndex.addEventListener('click', () =>
  window.location.assign('./pokemon.html')
);
listTopIndex.addEventListener('click', () =>
  window.location.assign('./top.html'));

homeButton.addEventListener('click', () =>
window.location.assign('./pokemon.html'));