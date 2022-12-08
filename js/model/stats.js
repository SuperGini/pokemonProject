'use strict'
class Stats {

    constructor(attack, defense, speed, hp) {
        this._attack = attack;
        this._defense = defense;
        this._speed = speed;
        this._hp = hp;
    }


    get attack() {
        return this._attack;
    }

    set attack(value) {
        this._attack = value;
    }

    get defense() {
        return this._defense;
    }

    set defense(value) {
        this._defense = value;
    }

    get speed() {
        return this._speed;
    }

    set speed(value) {
        this._speed = value;
    }

    get hp() {
        return this._hp;
    }

    set hp(value) {
        this._hp = value;
    }
}
