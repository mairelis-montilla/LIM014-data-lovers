import data from './data/pokemon/pokemon.js';
import {
  sortData,
  attackName,
  calculateDps,
  calculateEps,
  calculateDmgStab,
} from './data.js'


const cardContainer = document.getElementById('mainPokemon')
const pokemons = data.pokemon;
const listPokemonIndex = document.getElementById('listIndexPokemon');
const listHomePokemon = document.getElementById('listHomePokemon');
const closeModal = document.querySelector('.closeModal');
const modalShow = document.getElementById('modal');
const btnPokemonStats = document.querySelector('#modalPokeType');
const btnPokemonSpawn = document.querySelector('#modalPokeSpawn');
const modalContainer = document.querySelector('.modal-information');

 
// Modal Graphic

btnPokemonStats.addEventListener('click', hideModalStats);

function hideModalStats() {
  modalShow.classList.toggle('hide');
  modalContainer.innerHTML = `<iframe style="width:100%; height:580px" src="typeChart.html" title="Stats"></iframe>
  `;
}

btnPokemonSpawn.addEventListener('click', hideModalSpawn);

function hideModalSpawn() {
  modalShow.classList.toggle('hide');
  modalContainer.innerHTML = `<iframe style="width:100%; height:580px" src="spawnData.html" title="Stats"></iframe>
  `;
}


// modal pokemon
function hideModal() {
  modalShow.classList.toggle('hide');
}

closeModal.addEventListener('click', hideModal);


//NAVEGACIÓN ENTRE PESTAÑAS
listHomePokemon.addEventListener('click', () => {
  window.location.assign('./index.html');
});


listPokemonIndex.addEventListener('click', () =>
  window.location.assign('./pokemon.html')
);



const showAllPokemon = (allPokemon) => {

  let count = 0;

  allPokemon.forEach(pokemon => {
    count++;

    if (count < 11) {
      let container = document.createElement('section');
      container.className = 'card-contrainer ' + pokemon.type[0];
      cardContainer.appendChild(container).innerHTML = `
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
            </section>`;
      const btnModal = container.querySelector('button');
      let templateNextEvolution;
      let templatePrevEvolutions;

      if (pokemon.evolution) {

        if (pokemon.evolution['next-evolution']) {

          let nextEvolutions = getNextEvolution(pokemon.evolution['next-evolution']);
          templateNextEvolution = nextEvolutions.map(elemento => {
            return `<div><p> ${elemento.name}</p>
          <img  class="image-pokemon" src="https://www.serebii.net/pokemongo/pokemon/${elemento.num}.png"> <p> Candy Cost: ${elemento['candy-cost']}</p></div>`
          })
        }
        if (pokemon.evolution['prev-evolution']) {
          let prevEvolutions = getPrevEvolution(pokemon.evolution['prev-evolution']);
          templatePrevEvolutions = prevEvolutions.map(elemento => {
            return `<div><p> ${elemento.name}</p>
          <img class="image-pokemon"src="https://www.serebii.net/pokemongo/pokemon/${elemento.num}.png">
          <p> Candy Cost: ${elemento['candy-cost']} </p></div>`
          })
        }
      }

      btnModal.addEventListener('click', () => {
        modalShow.classList.toggle('hide');
        modalContainer.innerHTML = `
      <section class="modal-information">
      <section class="rows">
          <div class="column" id="column-small">
            <img class="image-pokemon" src="${pokemon.img}" alt="${pokemon.name}">

            <h1 class="subtitle">${pokemon.name}</h1>
                <p>#${pokemon.num}</p>
                <span class="rows">
                ${pokemon.type.map(elemento => {
                  return `<img  class="icon-type" src="./images/${elemento}.png">`
                  })}
                </span>
                  <article >
                    <h2 class="subtitle">Stats </h2>
                        <p> Max-HP:${pokemon.stats['max-hp']} </p>
                        <p> Max-CP:${pokemon.stats['max-cp']} </p>
                        <p> Base-attack:${pokemon.stats['base-attack']} </p>
                        <p> Base-Defense: ${pokemon.stats['base-defense']}</p>
                        <p> Base-Stamina:${pokemon.stats['base-stamina']}</p>
                      </article>

          </div>
          <div class="column" id="column-M">
            <p> ${pokemon.about}</p>

            <section>
              <article class="rows">
              <h2 class="subtitle">size</h2>
                    <p>Height <br>${pokemon.size['height']} </p>
                    <p>Weight <br>${pokemon.size['weight']} </p>
                    <p>Eggs <br> ${pokemon.egg}</p>
                  </article>
            <article class="rows">
            <h2 class="subtitle">Type:</h2>
            ${pokemon.type.map(elemento => {
              return `<img  class="icon-type" src="./images/${elemento}.png">`
              })}
                </article>
            <article class=rows>
              <h2 class="subtitle">Resistant:</h2>
              ${pokemon.resistant.map(elemento => {
                return `<img  class="icon-type" src="./images/${elemento}.png">`
                  })}
              </article>
            <article class=rows>
            <h2 class="subtitle">Poderes:</h2>
            ${pokemon.weaknesses.map(elemento => {
              return `<img  class="icon-type" src="./images/${elemento}.png">`
                })}

        </article>  
        <article class="rows">
        <table> 
               
        <tr><td class='tittleAttack' colspan="${(attackName(pokemon['quick-move'])).length+1}.">QUICK MOVE</td></tr>
        <tr><td>Nombre  </td>${showTable(attackName(pokemon['quick-move']))}</tr> 
        <tr><td>DPS  </td> ${showTable(calculateDps(pokemon['quick-move'], pokemon.type))}</tr>
        <tr><td>EPS  </td> ${showTable(calculateEps(pokemon['quick-move']))}</tr>
        <tr><td>STAB  </td> ${showTable(calculateDmgStab(pokemon['quick-move'], pokemon.type))}</tr>

      </table>

      </article>

      <article class="rows">
      <table> 
               
        <tr><td class='tittleAttack' colspan="${(attackName(pokemon['special-attack'])).length+1}.">SPECIAL ATTACK</td></tr>
        <tr><td>Nombre  </td>${showTable(attackName(pokemon['special-attack']))}</tr> 
        <tr><td>DPS  </td> ${showTable(calculateDps(pokemon['special-attack'], pokemon.type))}</tr>
        <tr><td>EPS  </td> ${showTable(calculateEps(pokemon['special-attack']))}</tr>
        <tr><td>STAB  </td> ${showTable(calculateDmgStab(pokemon['special-attack'], pokemon.type))}</tr>

      </table>

      </article> 
        <h2 class="subtitle">Evolution </h2>
        <article class=rows>
        ${templateNextEvolution ? templateNextEvolution : ''}
        ${templatePrevEvolutions ? templatePrevEvolutions : ''}
              </article>
              </section>
          </div>
        </section >
          </section>

      `
      });

    }

  })
};
 

// Ordenar

const iconArrow = document.querySelector('[id="iconArrow"]');
const selectOrderBy = document.querySelector('[id="order"]');

let orderBy;
let sortByValue;

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
  orderBy = iconArrow.value;
  cardContainer.innerHTML = '';
  showAllPokemon(sortData(pokemons, sortByValue, orderBy).reverse());
}


 

showAllPokemon(sortData(pokemons, 'spawn', 'Desc'));

function getNextEvolution(elemento) {
  let nextEvolution = elemento[0]['next-evolution'];
  const evolutions = [];
  if (nextEvolution) {
    evolutions.push(...getNextEvolution(nextEvolution));
  }
  evolutions.push(elemento[0]);
  return evolutions.reverse();
}



function getPrevEvolution(elemento) {
  let prevEvolution = elemento[0]['prev-evolution'];
  const evolutions = [];
  if (prevEvolution) {
    evolutions.push(...getNextEvolution(prevEvolution));
  }
  evolutions.push(elemento[0]);
  return evolutions.reverse();
}

function showTable(data) {
  const table = data.map(elemento => {
    return `<td>${elemento}</td>`
  }).join('');
  return table;
}