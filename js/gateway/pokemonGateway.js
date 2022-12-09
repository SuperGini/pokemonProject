'use strict'

const pokemonMapper = new Mapper();

class PokemonGateway {

    async getPokemon(){

        try{

            const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/1`);
            return await pokemonResponse.json();

        }catch (e) {

            throw Error(e);
        }
    }
}

