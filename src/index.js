const listPokemonIndex = document.getElementById('listIndexPokemon');
const listTopPokemon = document.getElementById('listTopPokemon');
const homeButton = document.getElementById('homeButton');
const logoPokemon = document.getElementsByClassName('logo')[0];

//NAVEGACIÓN ENTRE PESTAÑAS
logoPokemon.addEventListener('click', () => {
  window.location.assign('./index.html');
});
homeButton.addEventListener('click', () => {
  window.location.assign('./pokemon.html');});

listTopPokemon.addEventListener('click', () => {
  window.location.assign('./top.html');
});

listPokemonIndex.addEventListener('click', () =>{
  window.location.assign('./pokemon.html')}
);