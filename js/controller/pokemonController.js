'use strict'

const pokemonBtn = document.querySelector('.btn');

const pokemonService = new PokemonService();


async function zzz(){

    let x = await pokemonService.getPokemon();
    console.log(x);
}




pokemonBtn.addEventListener('click', zzz);

