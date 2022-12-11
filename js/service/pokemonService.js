'use strict'

const gateway = new PokemonGateway();

class PokemonService {

    async getPokemon() {

        let randomNumber = Math.floor(1 + Math.random() * 100);

        const pokemonBody = await gateway.getPokemon(randomNumber);

        const abilityUrl = pokemonBody.abilities[0].ability.url;

        const ability = await gateway.getPokemonAbility(abilityUrl);

        const abilityDescription = ability.effect_entries
            .filter(ability => EN_LANGUAGE === ability.language.name.toUpperCase())
            .map(ability => ability.short_effect)
            .toString();

        return pokemonMapper.pokemon(pokemonBody, abilityDescription);

    }


}