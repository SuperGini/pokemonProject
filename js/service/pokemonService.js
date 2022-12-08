'use strict'

const gateway = new PokemonGateway();

class PokemonService {

    async getPokemon(){

        const pokemonBody = await gateway.getPokemon();

        return pokemonMapper.pokemon(pokemonBody);

    }


}