import { example } from './data.js';
// import data from './data/pokemon/pokemon.js';

// import data from './data/rickandmorty/rickandmorty.js';

// traer data

fetch('./data/pokemon/pokemon.json')

  .then( response => response.json())
  .then( pokemons => { getAllPokemon(pokemons.pokemon);
  });


// Primera función
function getAllPokemon(pokemons) {
  for (let pokemon of pokemons) {
    let arrayPokemon = [];

    if (pokemon.num <= "030") {  
    console.log('Pokemones', arrayPokemon); 
    const cardContainer = document.getElementById("mainPokemon"); 

    cardContainer.innerHTML += `

    <section id="pokemon-card-contrainer">
    <article class="card-contrainer">
    <p class="id-number">${pokemon.num}</p>
          <section class="name-card_container">
            <img src="${pokemon.img}" alt="">
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
                ${pokemon.type.map((elemento) => {
      return `<h3 class="input"> ${elemento} </h3>`
    })
      }

              </div>
              </article>
            </section>
            </section>
                    `

                  }

  }
}
