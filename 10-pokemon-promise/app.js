'use strict';

function GetData(url, message){
    return fetch(url)
        .then (response => {
            if (!response.ok) {
                throw new Error(`${message}. Ошибка ${response.status}`);
            }
            return response.json();
        })
}

GetData('https://pokeapi.co/api/v2/pokemon/ditto', 'Не смогли получить данные от сервера')
    .then((data) =>  {
        return GetData(data.abilities[0].ability.url, 'Не смогли получить данные дальше')
    })
    .then(data => {
        console.log(data.effect_entries.find(entry => entry.language.name === 'en').effect);
    })
    .catch(error => {
        const el = document.querySelector('.errorMessage');
        el.innerHTML = error.message;
    });
    