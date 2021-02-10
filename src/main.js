import {
  filterDataByType,
  filterDataByName,
  filterDataByRegion,
  orderDataByName,
  orderDataByNum,
  orderDataByCP,
  orderDataByHP
} from './data.js';
import data from './data/pokemon/pokemon.js';



const pokemonData = data.pokemon;
const searchInput = document.querySelector('#searchInput');
const showRegion = document.querySelector('#region');
const showTypes = document.querySelector('[id="types"]');
const orderBy = document.querySelector('[id="order"]');
const cardContainer = document.getElementById('mainPokemon');


/*
const btnModal = document.getElementById('btnModal');  */
const modalShow = document.getElementById('modal');
/*
btnModal.addEventListener('click', mostrarModal);   */


const closeModal = document.getElementById('closeModal');
closeModal.addEventListener('click', hideModal);

function hideModal() {
  modalShow.classList.toggle('hide');
}



const listIndexPokemon = document.getElementById('listIndexPokemon');
const listTopPokemon = document.getElementById('listTopPokemon');





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

//NAVEGACIÓN ENTRE PESTAÑAS

listIndexPokemon.addEventListener('click', () => {
  window.location.assign('./index.html');
});
listTopPokemon.addEventListener('click', () => {
  window.location.assign('./top.html');
});


// MOSTRAR TODOS LOS POKEMONS



const modalContainer = document.querySelector('.modal-container');


const showAllPokemon = (allPokemon) => {
  allPokemon.forEach(pokemon => {
    const container = document.createElement('section');
    container.className = 'card-contrainer ' + pokemon.type[0];
    cardContainer.appendChild(container).innerHTML = `
    <article id="modal-${pokemon.num}">
    <p class="id-number">${pokemon.num}</p>
          <section class="name-card_container">
            <img class="image-pokemon" src="${pokemon.img}" alt="${pokemon.name}>
          <h1 id="namePokemon" class="namePokemon">${pokemon.name}</h1>
          </section>
            <section class="info-card_container">
            <div class="column">
              <h2>HP:</h2>
              <p id="valueHP"  class="input">${pokemon.stats['max-hp']}</p>
              <h2>CP:</h2>
              <p id="valueCP" class="input">${pokemon.stats['max-cp']}</p>
              </div>
              <div class="column" id="types">
                ${pokemon.type.map(elemento => {
        return `<h3 class="input ${elemento}" > ${elemento}</h3>`
      })
        }
              </div>
              <button>Cualquiera</button>
              </article>
            </section> 
                     
            `;
    const btnModal = container.querySelector('button');
    btnModal.addEventListener('click',
      function mostrarModal() {
        modalShow.classList.toggle('hide'); 
        modalContainer.innerHTML =
          `<h1>${pokemon.name}</h1>
        <p>${pokemon.about}
      
        </p>
        <p>
         POKEMON

          
        </p>`
      });



  })
};


// PARA MOSTRAR TODOS LOS POKEMONS AL INICIO //
showAllPokemon(pokemonData);
///////////////////////////////////////////////

showTypes.addEventListener('change', () => {
  const value = showTypes.value;
  cardContainer.innerHTML = '';
  showAllPokemon(filterDataByType(pokemonData, value));
});

showRegion.addEventListener('change', () => {
  const value = showRegion.value;
  typeSelected = document.querySelector('[id="types"]').value;
  cardContainer.innerHTML = '';
  showAllPokemon(filterDataByRegion(filterDataByType(pokemonData, typeSelected), value));
});


orderBy.addEventListener('change', () => {
  const value = orderBy.value;

  cardContainer.innerHTML = '';
  let data = filterDataByType(pokemonData, typeSelected);

  if (value === 'nameAsc' || value === 'nameDesc') {
    showAllPokemon(orderDataByName(data, value));
  } else if (value === 'numAsc' || value === 'numDesc') {
    showAllPokemon(orderDataByNum(data, value));
  } else if (value === 'cpAsc' || value === 'cpDesc') {
    showAllPokemon(orderDataByCP(data, value));
  } else if (value === 'hpAsc' || value === 'hpDesc') {
    showAllPokemon(orderDataByHP(data, value));
  } else {
    showAllPokemon(pokemonData);
  }
});

// Busqueda
searchInput.addEventListener('input', () => {

  const pokemonSearch = filterDataByName(pokemonData, searchInput.value.toLowerCase());

  if (pokemonSearch.length == 0) {
    cardContainer.textContent = 'Pokemon no encontrado';
  } else {
    cardContainer.innerHTML = '';
    showAllPokemon(pokemonSearch);
  }

})