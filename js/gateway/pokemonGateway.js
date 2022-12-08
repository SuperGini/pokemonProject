'use strict'

const pokemonMapper = new Mapper();

class PokemonGateway {

    async getPokemon(){

        try{

            const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/1`);
            const pokemonBody = await pokemonResponse.json();

            return pokemonBody;

        }catch (e) {

            throw Error(e);
        }
    }
}

