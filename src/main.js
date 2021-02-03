//import { example } from './data.js';
import { filterData } from './data.js';
import data from './data/pokemon/pokemon.js';


const pokemonData = data.pokemon;
const categories = document.querySelector(`[id="category"]`);
const cardContainer = document.getElementById("mainPokemon"); 

  
// MOSTRAR TODOS LOS POKEMONS

let showAllPokemon = (allPokemon) => { 
  allPokemon.forEach(pokemon => { 
  cardContainer.innerHTML += `
  <section class="card-contrainer" id="pokemon-card-contrainer">
  <article  >
  <p class="id-number">${pokemon.num}</p>
        <section class="name-card_container">
          <img class="image-pokemon" src="${pokemon.img}" alt="${pokemon.name}>
        <h1 id="namePokemon" class="namePokemon">${pokemon.name}</h1>
        </section>
          <section class="info-card_container">
          <div class="column">
            <h2>HP</h2>
            <p id="valueHP" class="input">${pokemon.stats["max-hp"]}</p>
            <h2>CP</h2>
            <p id="valueCP" class="input">${pokemon.stats["max-cp"]}</p>
            </div>
            <div class="column" id="types">
              ${pokemon.type.map(elemento => {
      return `<h3 class="input"> ${elemento}</h3>`
    })
      }
            </div>
            </article>
          </section>
          </section>
                  `;
  
  })  
}; 

// PARA MOSTRAR TODOS LOS POKEMONS AL INICIO
showAllPokemon(pokemonData); 
 
categories.addEventListener(`change`, (e) => {
  // log(`e.target`, e.target);
  const select = e.target;
  const value = select.value; 

  if (value == "all") {
    cardContainer.innerHTML = "";
    showAllPokemon(pokemonData);
    console.log("entró all");
  }
  else {

    cardContainer.innerHTML = "";
    showAllPokemon(filterData(pokemonData, value));
    console.log("entró");

  } 

   
});

