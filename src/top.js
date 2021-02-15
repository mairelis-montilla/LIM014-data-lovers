import data from './data/pokemon/pokemon.js';
import{sortData} from './data.js' 


const mainContainer= document.getElementById('mainPokemon')
const pokemons = data.pokemon;   
const listPokemonIndex = document.getElementById('listIndexPokemon');
const listTopPokemon = document.getElementById('listTopPokemon'); 
const listHomePokemon = document.getElementById('listHomePokemon'); 
//NAVEGACIÓN ENTRE PESTAÑAS
 

listHomePokemon.addEventListener('click', () => {
  window.location.assign('./index.html');
}); 
  
listTopPokemon.addEventListener('click', () => {
  window.location.assign('./top.html');
}); 

listPokemonIndex.addEventListener('click', () =>
  window.location.assign('./pokemon.html')
); 

const showAllPokemon = (allPokemon) => {
  
  let count = 0;

  allPokemon.forEach(pokemon => { 
  count++;

  if (count < 11 ) { 
    console.log(count);
    let container = document.createElement('section');
    container.className = 'card-contrainer ' + pokemon.type[0];
    mainContainer.appendChild(container).innerHTML = `
   

            <article id="modal-${pokemon.num}">
    <p class="id-number">${pokemon.num}</p>
          <section class="name-card_container">
            <img class="${pokemon.num}" src="${pokemon.img}" alt="${pokemon.name}">
          <h1 id="namePokemon" class="namePokemon">${pokemon.name}</h1>
          </section>
            <section class="info-card_container">
            <div class="rows">
              <p id="valueHP"> Max-HP: ${pokemon.stats['max-hp']}</p>
              <p id="valueCP"> Max-CP: ${pokemon.stats['max-cp']}</p>
              </div>
              <div class="rows" id="types"> 
              <p class="input">Spawn</p> 
              <p class="input">${pokemon['spawn-chance']}</p> 
              </div>
              <button class="input">More</button>
              </section></article>
                     
            `   
    }   
  })
};
 

showAllPokemon(sortData(pokemons, 'spawn', 'Desc'));   