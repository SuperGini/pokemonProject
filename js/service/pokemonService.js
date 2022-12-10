'use strict'

const gateway = new PokemonGateway();

class PokemonService {

    async getPokemon(randomNumber){

        const pokemonBody = await gateway.getPokemon(randomNumber);

        console.log(pokemonBody);

        return pokemonMapper.pokemon(pokemonBody);

    }


}