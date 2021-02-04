//import { example } from './data.js';
import { 
  
  filterDataByType,
  filterDataByName,
  filterDataByRegion,
  orderDataByName,
  orderDataByNum,
  orderDataByCP,
  orderDataByHP } from './data.js';
import data from './data/pokemon/pokemon.js'; 


const pokemonData = data.pokemon;
const searchInput = document.querySelector(`[id="searchInput"]`); 
const showRegion = document.querySelector(`[id="region"]`);
const showTypes = document.querySelector(`[id="types"]`);

const orderBy = document.querySelector(`[id="order"]`);

const cardContainer = document.getElementById("mainPokemon"); 


let typeSelected;
/*
const showPokemonBasic = (allPokemon) => {
  let basicPokemon = [];
  allPokemon.forEach(pokemon => 
    basicPokemon.push({
      num: pokemon.num,
      name: pokemon.name,
      hp: pokemon.stats["max-hp"],
      stats: pokemon.stats["max-cp"],
      img: pokemon.img,
      type: pokemon.type,
      }))

  return basicPokemon;
}; */


// MOSTRAR TODOS LOS POKEMONS 

let showAllPokemon = (allPokemon) => { 
  allPokemon.forEach(pokemon => { 
  cardContainer.innerHTML += `
  <section class="card-contrainer ${pokemon.type[0]}" id="pokemon-card-contrainer">
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
  return allPokemon;
}; 

// PARA MOSTRAR TODOS LOS POKEMONS AL INICIO //
showAllPokemon(pokemonData); 
///////////////////////////////////////////////
 
showTypes.addEventListener(`change`, () => { 
  const value = showTypes.value;  
  cardContainer.innerHTML = "";
  typeSelected = document.querySelector(`[id="types"]`).value;
  showAllPokemon(filterDataByType(filterDataByType(pokemonData, typeSelected), value));  
});
 
showRegion.addEventListener(`change`, () => { 
  const value = showRegion.value;   
  typeSelected = document.querySelector(`[id="types"]`).value;
  cardContainer.innerHTML = "";
  showAllPokemon(filterDataByRegion(filterDataByType(pokemonData, typeSelected), value));  
});
 

orderBy.addEventListener(`change`, () => { 
  const value = orderBy.value;  

    cardContainer.innerHTML = "";
    let data = filterDataByType(pokemonData, typeSelected);
 
    if (value == "nameAsc" || value == "nameDesc") {
      showAllPokemon(orderDataByName(data, value));  
    }
    else if (value == "numAsc" || value == "numDesc"){
      showAllPokemon(orderDataByNum(data, value));  
    }
    else if (value == "cpAsc" || value == "cpDesc"){
      showAllPokemon(orderDataByCP(data, value));  
    }
    else if (value == "hpAsc" || value == "hpDesc"){
      showAllPokemon(orderDataByHP(data, value));  
    }
    else {
      showAllPokemon(pokemonData);
    }
    console.log("value = " + value + " typeSelected = "+ typeSelected); 
});

// Busqueda 
searchInput.addEventListener('input', () => {

const pokemonSearch = filterDataByName(pokemonData, searchInput.value.toLowerCase());

if (pokemonSearch.length == 0){
  cardContainer.innerHTML = "Pokemon no encontrado";
}
else {
  cardContainer.innerHTML = '';
  showAllPokemon(pokemonSearch);
}

})