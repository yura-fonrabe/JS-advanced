'use strict';

const Personage = function(race, name, language) {
    this.race = race;
    this.name = name;
    this.language = language;
}

Personage.prototype.speak = function() {
    console.log(`${this.language} ${this.name}`);
}
const Ork = function(race, name, language, weapon) {
    Personage.call(this);
    this.race = race;
    this.name = name;
    this.language = language;
    this.weapon = weapon;
}
// Ork.__proto__ = Personage;
Ork.prototype = Object.create(Personage.prototype);
Ork.prototype.constructor = Ork;
Ork.prototype.hit = function(){
    console.log('Орк нанес удар');
}

const Elf = function(race, name, language, spell) {
    Personage.call(this, race, name, language);
    // this.race = race;
    // this.name = name;
    // this.language = language;
    this.spell = spell;
}
Elf.__proto__ = Personage;
Elf.prototype.createSpell = function() {
    console.log('Эльф применил заклинание');
}

