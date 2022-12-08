'use strict'
class Mapper {

    pokemon(pokemonBody){

        const pokemonStats = new Stats();

        pokemonBody.stats
            .forEach(x => this._setPokemonStats(x, pokemonStats));

        const pokemonType = pokemonBody.types
            .map(x => x.type)
            .map(y => y.name)
            .shift();


        const pokemonAbility = pokemonBody.abilities
            .map(x => x.ability)
            .map(y => y.name)
            .shift();


        const pokemonName = pokemonBody.name;

        const pokemonPicture = pokemonBody.sprites
            .other
            .dream_world
            .front_default;


        return new Pokemon(pokemonAbility,
            pokemonName,
            pokemonStats,
            pokemonType,
            pokemonPicture);
    }


    _setPokemonStats (stat, pokeStats){

        const pokemonStatName = stat.stat.name.toUpperCase();

        switch (pokemonStatName) {
            case 'HP':
                pokeStats.hp = stat.base_stat;
                break;

            case 'ATTACK':
                pokeStats.attack = stat.base_stat;
                break;

            case 'SPEED':
                pokeStats.speed =  stat.base_stat;
                break;

            case 'DEFENSE':
                pokeStats.defense = stat.base_stat;
                break;
        }
    }
}