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
    const container = document.createElement('section');
    container.className = 'card-contrainer ' + pokemon.type[0];
    cardContainer.appendChild(container).innerHTML = `
    <article id="modal-${pokemon.num}">
    <p class="id-number">${pokemon.num}</p>
          <section class="name-card_container">
            <img class="image-pokemon" src="${pokemon.img}" alt="${pokemon.name}">
          <h1 id="namePokemon" class="namePokemon">${pokemon.name}</h1>
          </section>
            <section class="info-card_container">
            <div class="rows">
              <p id="valueHP" > Max-HP: ${pokemon.stats['max-hp']} </p>
              <p id="valueCP" > Max-CP: ${pokemon.stats['max-cp']} </p>
              </div>
              <div class="rows" id="types">
                ${pokemon.type.map(elemento => {
        return `<h3 class="input ${elemento}" > ${elemento}</h3>`
      })
        }
              </div>
              <button class="input">More</button>
              </article>
            </section>
            `;
    const btnModal = container.querySelector('button');
    let templateNextEvolution;
    let templatePrevEvolutions;

    if (pokemon.evolution) {

      if (pokemon.evolution['next-evolution']) {

        let nextEvolutions = getNextEvolution(pokemon.evolution['next-evolution']);
        templateNextEvolution = nextEvolutions.map(elemento => {
          return `<div><h2> ${elemento.name}</h2>
          <img  class="image-pokemon" src="https://www.serebii.net/pokemongo/pokemon/${elemento.num}.png"> <h3> Candy Cost: ${elemento['candy-cost']}</h3></div>`
            })
      }
      if(pokemon.evolution['prev-evolution']){
          let prevEvolutions = getPrevEvolution(pokemon.evolution['prev-evolution']);
          templatePrevEvolutions =prevEvolutions.map(elemento =>{
          return`<div><h2> ${elemento.name}</h2>
          <img class="image-pokemon"src="https://www.serebii.net/pokemongo/pokemon/${elemento.num}.png">
          <h3> Candy Cost: ${elemento['candy-cost']} </h3></div>`
          })
      }
    }

    btnModal.addEventListener('click',() => {
        modalShow.classList.toggle('hide');
        modalContainer.innerHTML = `
        <p class="id-number">${pokemon.num}</p>
      <section class="name-card_container">
        <article>
          <img class="image-pokemon" src="${pokemon.img}" alt="${pokemon.name}">
          <h1 class="namePokemon">${pokemon.name}</h1>
        </article>
        <h2 class="subtitle">Type:</h2>
        <article class="rows">
            ${pokemon.type.map(elemento => {
          return `<p class="input ${elemento}"> ${elemento}</p>`
          })}
        </article>
      </section>
        <section>
        <h2 class="subtitle">size</h2>
        <article class="rows">
              <p>Height : ${pokemon.size['height']}</p>
              <p>Weight : ${pokemon.size['weight']}</p>
            </article>
        <h2 class="subtitle">Stats </h2>
            <article class="rows">
            <p id="valueHP" > Max-HP: ${pokemon.stats['max-hp']}</p>
            <p id="valueCP" > Max-CP: ${pokemon.stats['max-cp']}</p>
            <p> Base-attack: ${pokemon.stats['base-attack']}</p>
            <p> Base-Defense: ${pokemon.stats['base-defense']}</p>
            <p> Base-Stamina: ${pokemon.stats['base-stamina']}</p>
          </article>
          </section>
      <section>
<section>
        <h2 class="subtitle">Resistant:</h2>
        <article class=rows>
          ${pokemon.resistant.map(elemento => {
          return `<p class="input ${elemento}" > ${elemento}</p>`
            })
            }</article>
      <h2 class="subtitle">Weaknesses:</h2>
      <article class=rows>
      ${pokemon.weaknesses.map(elemento => {
  return `<p class="input ${elemento}" > ${elemento}</p>`
    })
  }</article>
          <h2 class="subtitle">Evolution </h2>
        <article class=rows>
        ${templateNextEvolution ? templateNextEvolution : ''}
        ${templatePrevEvolutions ? templatePrevEvolutions : ''}
        </article>
        </section>
        </section> `
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


function getNextEvolution(elemento) {
  let nextEvolution = elemento[0]['next-evolution'];
  const evolutions =[];
  if(nextEvolution) {
    evolutions.push(...getNextEvolution(nextEvolution));
  }
  evolutions.push(elemento[0]);
  return evolutions.reverse();
}
function getPrevEvolution(elemento) {
  let prevEvolution = elemento[0]['prev-evolution'];
  const evolutions =[];
  if(prevEvolution) {
    evolutions.push(...getNextEvolution(prevEvolution));
  }
  evolutions.push(elemento[0]);
  return evolutions.reverse();
}
