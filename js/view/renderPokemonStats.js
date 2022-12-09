'use strict'

class RenderPokemonStats {

    renderTopStats(pokemon){
        return `
            <div class="type top-attribute">type: ${pokemon.type}</div>
            <div class="name">${pokemon.name}</div>
            <div class="hp top-attribute">hp: ${pokemon.stats.hp}</div>
        `;
    }

    renderImage(pokemon){
        return `
        <img class="img" src="${pokemon.pokemonImg}" style="transform: translateZ(100px)" alt="">
        `;
    }

    renderAbility(pokemon){
        return `
            <div class="ability-name">
                <label class="ability-label">ABILITY:</label>
                <p class="ability-name">${pokemon.ability}</p>
            </div>
<!--            <p class="ability-description">bla bla bla bla</p>-->
        `;
    }

    renderBottomStats(pokemon){
        return `
            <div class="attack util-one">
                <label class="atack-label">Attack:</label>
                <p class="atack-value">${pokemon.stats.attack}</p>
            </div>
            <div class="defense util-one">
                <label class="defense-label">Defense:</label>
                <p class="defense-value">${pokemon.stats.defense}</p>
            </div>
            <div class="speed util-one">
                <label class="speed-label">Speed:</label>
                <p class="speed-value">${pokemon.stats.speed}</p>
            </div>
        `;
    }
}