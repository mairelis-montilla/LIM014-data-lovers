const listPokemonIndex = document.getElementById('listIndexPokemon');
const listTopPokemon = document.getElementById('listTopPokemon');
//const homeButton = document.getElementById('homeButton');
//NAVEGACIÓN ENTRE PESTAÑAS

//homeButton.addEventListener('click', () => {
  //window.location.assign('./pokemon.html');});

listTopPokemon.addEventListener('click', () => {
  window.location.assign('./top.html');
});

listPokemonIndex.addEventListener('click', () =>{
  window.location.assign('./pokemon.html')}
);