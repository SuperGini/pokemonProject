'use strict'
class Pokemon {


    constructor(ability, name, stats, type, pokemonImg, abilityDescription) {
        this._ability = ability;
        this._name = name;
        this._stats = stats;
        this._type = type;
        this._pokemonImg = pokemonImg;
        this._abilityDescription = abilityDescription;
    }


    get abilityDescription() {
        return this._abilityDescription;
    }

    set abilityDescription(value) {
        this._abilityDescription = value;
    }

    get ability() {
        return this._ability;
    }

    set ability(value) {
        this._ability = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get stats() {
        return this._stats;
    }

    set stats(value) {
        this._stats = value;
    }

    get type() {
        return this._type;
    }

    set type(value) {
        this._type = value;
    }

    get pokemonImg() {
        return this._pokemonImg;
    }

    set pokemonImg(value) {
        this._pokemonImg = value;
    }
}