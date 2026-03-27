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
Ork.__proto__ = Personage;
Ork.prototype.hit = function(){
    console.log('Орк нанес удар');
}

const Elf = function(race, name, language, spell) {
    Personage.call(this);
    this.race = race;
    this.name = name;
    this.language = language;
    this.spell = spell;
}
Elf.__proto__ = Personage;
Elf.prototype.createSpell = function() {
    console.log('Эльф применил заклинание');
}

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
