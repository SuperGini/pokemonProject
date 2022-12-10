'use strict'

const gateway = new PokemonGateway();

class PokemonService {

    async getPokemon(){

        let randomNumber = Math.floor(1 + Math.random()*100);

        const pokemonBody = await gateway.getPokemon(randomNumber);

        console.log(pokemonBody);

        return pokemonMapper.pokemon(pokemonBody);

    }


}