'use strict'

const pokemonMapper = new Mapper();

class PokemonGateway {

    async getPokemon(randomNumber){

        try{

            const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`);
            return await pokemonResponse.json();

        }catch (e) {

            throw Error(e);
        }
    }
}

