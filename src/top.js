import data from './data/pokemon/pokemon.js';
import{sortData} from './data.js'


const mainContainer= document.getElementById('mainPokemon')
const pokemons = data.pokemon;
const listPokemonIndex = document.getElementById('listIndexPokemon');
const listHomePokemon = document.getElementById('listHomePokemon');
const closeModal = document.querySelector('.closeModal');
const modalShow = document.getElementById('modal');
const modalContainer = document.querySelector('.modal-information');
closeModal.addEventListener('click', hideModal);

function hideModal() {
  modalShow.classList.toggle('hide');
}
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
      if(pokemon.evolution['prev-evolution']){
          let prevEvolutions = getPrevEvolution(pokemon.evolution['prev-evolution']);
          templatePrevEvolutions =prevEvolutions.map(elemento =>{
          return`<div><p> ${elemento.name}</p>
          <img class="image-pokemon"src="https://www.serebii.net/pokemongo/pokemon/${elemento.num}.png">
          <p> Candy Cost: ${elemento['candy-cost']} </p></div>`
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
            <h2 class="subtitle">Weaknesses:</h2>
            ${pokemon.weaknesses.map(elemento => {
              return `<img  class="icon-type" src="./images/${elemento}.png">`
                })}

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

      `});

            }

  })
};
 

showAllPokemon(sortData(pokemons, 'spawn', 'Desc'));
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
  return evolutions.reverse();}
