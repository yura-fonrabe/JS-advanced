'use strict';

const Personage = function(race, name, language) {
    this.race = race;
    this.name = name;
    this.language = language;
    this.speak = function() {
        console.log(`${this.language} ${this.name}`);
    }
}

Personage.prototype.weapon = "weapon";
Personage.prototype.hit = function() {
    console.log('Что-нибудь');
}


const Ork = new Personage('Орк', 'Gregor', 'english');
Ork.weapon = 'gun';
Ork.hit();

Personage.prototype.spell = function() {
    console.log('Что-то');
}
Personage.prototype.createSpell = function(){
    console.log('Логика заклинания');
}

const Elf = new Personage('Elf', 'Jack', 'spanish');
Elf.createSpell();
Elf.spell();

console.log(Ork);
console.log(Elf);
