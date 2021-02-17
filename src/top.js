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
    let container = document.createElement('section');
    container.className = 'card-contrainer ' + pokemon.type[0];
    mainContainer.appendChild(container).innerHTML = `
    <article>
    <section class="name-card_container">
    <img class="image-pokemon" src="${pokemon.img}" alt="${pokemon.name}">
    <p class="subtitle">#${pokemon.num}</p>
          <h1 id="namePokemon" class="namePokemon">${pokemon.name}</h1>
          </section>
            <section class="info-card_container">
          <div class="rows">
            <p class="p" id="valueHP"> Max-HP <br> ${pokemon.stats['max-hp']}</p>
            <p class="p"id="valueCP"> Max-CP <br> ${pokemon.stats['max-cp']}</p>
            <p class="p">Spawn <br> ${pokemon['spawn-chance']}</p>
          </div>
              <div class="rows">
                ${pokemon.type.map(elemento => {
        return `<img  class="icon-type" src="./images/${elemento}.png">`
      })
        }
              </div>
              <button class="btn-secondary">About</button>
              </article>
            </section>`
            }
            
  })
};
 

showAllPokemon(sortData(pokemons, 'spawn', 'Desc'));