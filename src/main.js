import {
  filterDataByType,
  filterDataByName,
  filterDataByRegion, 
  sortData,

} from './data.js';
import data from './data/pokemon/pokemon.js';



const pokemonData = data.pokemon;
const searchInput = document.querySelector('#searchInput');
const showRegion = document.querySelector('[id="region"]');
const showTypes = document.querySelector('[id="types"]');
const iconArrow = document.querySelector('[id="iconArrow"]');
const selectOrderBy = document.querySelector('[id="order"]');
const cardContainer = document.getElementById('mainPokemon');
const closeModal = document.getElementById('closeModal'); 
const modalShow = document.getElementById('modal'); 
const modalContainer = document.querySelector('.modal-container'); 

//NAVEGACIÓN ENTRE PESTAÑAS
const listPokemonIndex = document.getElementById('listIndexPokemon');
const listTopPokemon = document.getElementById('listTopPokemon'); 
const listHomePokemon = document.getElementById('listHomePokemon'); 

listHomePokemon.addEventListener('click', () => {
  window.location.assign('./index.html');
}); 
  
listTopPokemon.addEventListener('click', () => {
  window.location.assign('./top.html');
}); 

listPokemonIndex.addEventListener('click', () =>
  window.location.assign('./pokemon.html')
); 

 

// modal
closeModal.addEventListener('click', hideModal);

function hideModal() {
  modalShow.classList.toggle('hide');
}
  
// global filter variables
let regionValue;
let typeSelected;
let orderBy;
let sortByValue;
let typeValue;
 
 
 // MOSTRAR TODOS LOS POKEMONS
const showAllPokemon = (allPokemon) => {
  allPokemon.forEach(pokemon => {
    let container = document.createElement('section');
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
                     
            `  
    let btnModal = container.querySelector('button');
    btnModal.addEventListener('click',
      function mostrarModal() {
        console.log("entró");
        modalShow.classList.toggle('hide'); 
        modalContainer.innerHTML =
          `<h1>${pokemon.name}</h1>
        <p>${pokemon.about}</p>
        <p>
         POKEMON 
        </p>`
      }); 
  })
};


// PARA MOSTRAR TODOS LOS POKEMONS AL INICIO //
showAllPokemon(pokemonData);
/////////////////////////////////////////////// 

// Order
iconArrow.addEventListener('click', () => {
  iconArrow.src = toggleImg(); 
  iconArrow.value = valueImg(); 
  sortByArrow();
})

function toggleImg() {
  let imgSRC = iconArrow.src;
  imgSRC.includes('/data/images/arrowBottom.svg') ? 
  imgSRC = '/data/images/arrowTop.svg' : imgSRC = '/data/images/arrowBottom.svg'; 
  return imgSRC;
}

function valueImg() {
  let imgValue = iconArrow.value;
  imgValue.includes('Asc') ? imgValue = 'Desc' : imgValue = 'Asc'; 
  return imgValue;
}


// Ordenar Data
selectOrderBy.addEventListener('change', sortByArrow);

function sortByArrow() {
  sortByValue = selectOrderBy.value;  
  regionValue = showRegion.value;
  typeSelected = showTypes.value;  
  orderBy = iconArrow.value;
  cardContainer.innerHTML = ''; 
  let data = filterDataByRegion(filterDataByType(pokemonData, typeSelected), regionValue); 
  showAllPokemon(sortData(data, sortByValue, orderBy));  
}


// Filtrar Data por Tipo
showTypes.addEventListener('change', () => {
  typeValue = showTypes.value;
  cardContainer.innerHTML = '';
  showAllPokemon(filterDataByType(pokemonData, typeValue));
});

// Filtrar Data por Región
showRegion.addEventListener('change', () => {
  regionValue = showRegion.value;
  typeSelected = document.querySelector('[id="types"]').value;
  cardContainer.innerHTML = '';
  let dataRegion = filterDataByRegion(filterDataByType(pokemonData, typeSelected), regionValue);  
  showAllPokemon(dataRegion);
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