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
const closeModal = document.querySelector('.closeModal');
const modalShow = document.getElementById('modal');
const modalContainer = document.querySelector('.modal-information');

//NAVEGACIÓN ENTRE PESTAÑAS
const listTopPokemon = document.getElementById('listTopPokemon');
const listHomePokemon = document.getElementById('listHomePokemon');
const  pokemonNotFount =`<section class="column"><h2 class="slogan">Ups!! pokemon not found</h2>
<img src="./images/pokemon.gif" alt="pokemon"> </section>`

listHomePokemon.addEventListener('click', () => {
  window.location.assign('./index.html');
});
listTopPokemon.addEventListener('click', () => {
  window.location.assign('./top.html');
});

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

 // MOSTRAR TODOS LOS POKEMONS
const showAllPokemon = (allPokemon) => {
  allPokemon.forEach(pokemon => {
    const container = document.createElement('section');
    container.className = 'card-contrainer ';
    let pokemonTypes = pokemon.type.map(elemento => {
      return `<img  class="icon-type" src="./images/${elemento}.png">`
    });
    let pokemonResistant = pokemon.resistant.map(elemento => {
      return `<img  class="icon-type" src="./images/${elemento}.png">`
        });
        let pokemonWeaknesses = pokemon.weaknesses.map(elemento => {
          return `<img  class="icon-type" src="./images/${elemento}.png">`
            });

    cardContainer.appendChild(container).innerHTML = `
    <article>
    <section class="name-card_container">
    <img class="image-pokemon" src="${pokemon.img}" alt="${pokemon.name}">
    <p class="subtitle">#${pokemon.num}</p>
          <h1 id="namePokemon" class="namePokemon">${pokemon.name}</h1>
          </section>
            <section class="info-card_container">
          <div class="rows">
            <p class="p"id="valueHP"> Max-HP  <br> ${pokemon.stats['max-hp']}</p>
            <p class="p"id="valueCP"> Max-CP  <br> ${pokemon.stats['max-cp']}</p>
          </div>
              <div class="rows">
              ${pokemonTypes.join('')}
              </div>
              <button class="btn-secondary">About</button>
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
          return `<div>
          <img  class="image-pokemon" src="https://www.serebii.net/pokemongo/pokemon/${elemento.num}.png">
          <h1 class="subtitle">${elemento.name}</h1>
          <p> Candy Cost ${elemento['candy-cost']}</p></div>`
            })
      }
      if(pokemon.evolution['prev-evolution']){
          let prevEvolutions = getPrevEvolution(pokemon.evolution['prev-evolution']);
          templatePrevEvolutions =prevEvolutions.map(elemento =>{
            return`<div>
            <img class="image-pokemon"src="https://www.serebii.net/pokemongo/pokemon/${elemento.num}.png">
            <h1 class="subtitle">${elemento.name}</h1>
          <p> Candy Cost ${elemento['candy-cost']} </p></div>`
          })
      }
    }

    btnModal.addEventListener('click',() => {
      modalShow.classList.toggle('hide');
      modalContainer.innerHTML = `
      <section class="modal-information">
      <section class="rows">
          <div class="column" id="column-small">
            <img class="image-pokemon" src="${pokemon.img}" alt="${pokemon.name}">

            <h1 class="subtitle">${pokemon.name}</h1>
                <p>#${pokemon.num}</p>
                <span class="rows">
                ${pokemonTypes.join('')}
                </span>
                  <article class="column" >
                    <h2 class="subtitle">Stats </h2>
                        <p> Max-HP<br>${pokemon.stats['max-hp']} </p>
                        <p> Max-CP<br>${pokemon.stats['max-cp']} </p>
                        <p> Base-attack<br>${pokemon.stats['base-attack']} </p>
                        <p> Base-Defense<br>${pokemon.stats['base-defense']}</p>
                        <p> Base-Stamina<br>${pokemon.stats['base-stamina']}</p>
                      </article>

          </div>
          <div class="column" id="column-M">
            <p> ${pokemon.about}</p>

            <section>
            <h2 class="subtitle">size</h2>
              <article class="rows">
                    <p>Height <br>${pokemon.size['height']} </p>
                    <p>Weight <br>${pokemon.size['weight']} </p>
                    <p>Eggs <br> ${pokemon.egg}</p>
                  </article>
                  <h2 class="subtitle">Resistant:</h2>
                    <article class=rows>
                    ${pokemonResistant.join('')}
              </article>
              <h2 class="subtitle">Weaknesses:</h2>
            <article class=rows>
            ${pokemonWeaknesses.join('')}

        </article>
        <h2 class="subtitle">Evolution </h2>
        <article class=rows>
        ${templateNextEvolution ? templateNextEvolution.join('') : ''}
        ${templatePrevEvolutions ? templatePrevEvolutions.join(''): ''}
              </article>
              </section>
          </div>
        </section >
          </section>

      `});



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
  data.length > 0 ?showAllPokemon(sortData(data, sortByValue, orderBy)):cardContainer.innerHTML = pokemonNotFount;
}


// Filtrar Data por Tipo
showTypes.addEventListener('change', () => {
  sortByValue = selectOrderBy.value;
  regionValue = showRegion.value;
  typeSelected = showTypes.value;
  orderBy = iconArrow.value;
  cardContainer.innerHTML = '';
  let data = filterDataByRegion(filterDataByType(pokemonData, typeSelected), regionValue);
  data.length > 0?showAllPokemon(sortData(data, sortByValue, orderBy)):cardContainer.innerHTML = pokemonNotFount;
});

// Filtrar Data por Región
showRegion.addEventListener('change', () => {
  sortByValue = selectOrderBy.value;
  regionValue = showRegion.value;
  typeSelected = showTypes.value;
  orderBy = iconArrow.value;
  cardContainer.innerHTML = '';
  let dataRegion = filterDataByRegion(filterDataByType(pokemonData, typeSelected), regionValue);
  dataRegion.length > 0? showAllPokemon(dataRegion):cardContainer.innerHTML = pokemonNotFount;

});

// Busqueda
searchInput.addEventListener('input', () => {
  const pokemonSearch = filterDataByName(pokemonData, searchInput.value.toLowerCase());
  if (pokemonSearch.length === 0) {
    cardContainer.innerHTML = pokemonNotFount;
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
