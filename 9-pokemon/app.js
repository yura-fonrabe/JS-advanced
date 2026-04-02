'use strict';

const request = new XMLHttpRequest();
request.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto');
request.send();

request.addEventListener('load', function() {
    const pok = JSON.parse(this.responseText);
    const url1 = pok.abilities[0].ability.url;
        
    const request = new XMLHttpRequest();
    request.open('GET', url1);
    request.send();

    request.addEventListener('load', function() {
        const pok = JSON.parse(this.responseText);
        console.log(pok.effect_entries[2].effect);    
    })
})