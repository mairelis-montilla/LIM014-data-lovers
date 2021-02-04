import data from './data/pokemon/pokemon.js';

const listPokemonTop = document.getElementById('listPokemonTop');
const listInicioTop = document.getElementById('listInicioTop');
const pokemons = data.pokemon;
console.log(pokemons);

listPokemonTop.addEventListener('click',()=>{
  window.location.assign('./pokemon.html');
});
listInicioTop.addEventListener('click',()=>{ window.location.assign('./index.html');
});
