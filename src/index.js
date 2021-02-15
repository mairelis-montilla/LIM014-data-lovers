const listPokemonIndex = document.getElementById('listIndexPokemon');
const listTopPokemon = document.getElementById('listTopPokemon');
const homeButton = document.getElementById('homeButton'); 
const listHomePokemon = document.getElementById('listHomePokemon'); 
//NAVEGACIÓN ENTRE PESTAÑAS

homeButton.addEventListener('click', () => {
  window.location.assign('./pokemon.html');
});

listHomePokemon.addEventListener('click', () => {
  window.location.assign('./top.html');
}); 
  
listTopPokemon.addEventListener('click', () => {
  window.location.assign('./top.html');
}); 

listPokemonIndex.addEventListener('click', () =>
  window.location.assign('./pokemon.html')
);