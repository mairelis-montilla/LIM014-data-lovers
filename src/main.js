 import {
   example
 } from './data.js';
 // import data from './data/pokemon/pokemon.js';

 // import data from './data/rickandmorty/rickandmorty.js';

 // traer data
 fetch('./data/pokemon/pokemon.json')

   .then(response => response.json())
   .then(pokemons => {
     getAllPokemon(pokemons.pokemon);
   });


 // Primera función
 function getAllPokemon(pokemons) {
   for (let pokemon of pokemons) {

     let arrayPokemon = [];

     if (pokemon.num <= "030") {
       arrayPokemon.push({
         NUM: pokemon.num,
         NAME: pokemon.name,
         HP: pokemon.stats["max-hp"],
         CP: pokemon.stats["max-cp"],
         IMG: pokemon.img,
         TYPE: pokemon.type,
       })

       console.log(arrayPokemon);

     }

     const cardContainer = document.getElementById("mainPokemon"); 



     cardContainer.innerHTML += `

    <section id="pokemon-card-contrainer">
    <article class="card-contrainer">
    <p class="id-number">${arrayPokemon[0].NUM}</p>
          <section class="name-card_container">
            <img src="${arrayPokemon[0].IMG}" alt="">
          <h1 id="namePokemon" class="namePokemon">${arrayPokemon[0].NAME}</h1>
          </section>
            <section class="info-card_container">
            <div class="column">
              <h2>HP</h2>
              <p id="valueHP" class="input">${arrayPokemon[0].HP}</p>
              <h2>CP</h2>
              <p id="valueCP" class="input">${arrayPokemon[0].CP}</p>
              </div>
              <div class="column" id="types"> 
              <h3 class="input">${arrayPokemon[0].TYPE[0]}</h3>
              <h3 class="input">${arrayPokemon[0].TYPE[1]}</h3>


              </div>
              </article>
            </section>
            </section>

                    ` 


   }
 }
