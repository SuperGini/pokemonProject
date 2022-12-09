'use strict'

const gateway = new PokemonGateway();

class PokemonService {

    async getPokemon(){

        const pokemonBody = await gateway.getPokemon();

        console.log(pokemonBody);

        return pokemonMapper.pokemon(pokemonBody);

    }


}