const listPokemonIndex = document.getElementById('listPokemonIndex');
const listTopIndex = document.getElementById('listTopIndex');

listPokemonIndex.addEventListener('click', () =>
  window.location.assign('./pokemon.html')
);
listTopIndex.addEventListener('click', () =>
  window.location.assign('./top.html'));