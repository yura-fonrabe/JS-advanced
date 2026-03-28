'use strict';

class Personage {
    constructor(race, name, language) {
        this.race = race;
        this.name = name;
        this.language = language;
    }

    speak () {
        console.log(`${this.language} ${this.name}`);
    }
}

class Orc extends Personage {
    constructor(race, name, language, weapon) {
        super(race, name, language);
        this.weapon = weapon;
    }

    speak () {
        console.log('Рычание орка');
    }

    hit () {
        console.log('Орк нанес удар');
    }
}

class Elf extends Personage {
    constructor(race, name, language, spell){
        super(race, name, language);
        this.spell = spell;
    }

    speak () {
        console.log('Я - ельф!')
    }

    spell() {
        console.log('Эльф применил заклинание');
    }
}