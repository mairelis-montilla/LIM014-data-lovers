import data from './data/pokemon/pokemon.js';
import{filterDataByNum} from './data.js'
const listPokemonTop = document.getElementById('listPokemonTop');
const listInicioTop = document.getElementById('listInicioTop');
const mainContainer= document.getElementById('mainPokemon')
const pokemons = data.pokemon;

listPokemonTop.addEventListener('click',()=>{
  window.location.assign('./pokemon.html');
});
listInicioTop.addEventListener('click',()=>{ window.location.assign('./index.html');
});

let showAllPokemon = (allPokemon) => {
  allPokemon.forEach(pokemon => {
    mainContainer.innerHTML += `
  <section class="card-contrainer ${pokemon.type[0]}" id="pokemon-card-contrainer">
  <article  >
  <p class="id-number">${pokemon.num}</p>
        <section class="name-card_container">
          <img class="image-pokemon" src="${pokemon.img}" alt="${pokemon.name}>
        <h1 id="namePokemon" class="namePokemon">${pokemon.name}</h1>
        </section>
          <section class="info-card_container">
          <div class="column">
            <h2>HP:</h2>
            <p id="valueHP" class="input">${pokemon.stats['max-hp']}</p>
            <h2>CP:</h2>
            <p id="valueCP" class="input">${pokemon.stats['max-cp']}</p>
            </div>
            <div class="column" id="types">
              ${pokemon.type.map(elemento => {
      return `<h3 class="input ${elemento}"> ${elemento}</h3>`
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

  let numRandom=[];
  for(let i=0; i<10;i++){

      numRandom.push( Math.floor(Math.random()*(251)));

  }
  console.log('¿que devuelve?', filterDataByNum(pokemons, numRandom))

let topPokemon = filterDataByNum(pokemons, numRandom);

showAllPokemon(topPokemon)