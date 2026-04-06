'use strict'
const divCount = document.querySelector('.count');
const divButtons = document.querySelector('.buttons');

for (let i = 1; i < 6; i++) {
    const el = document.createElement('button');
    el.innerText = 'Нажми меня';
    el.setAttribute('number', i);
    el.classList.add('button_text');
    divButtons.append(el);
}

let counter = 0;
divButtons.addEventListener('click', function(event) {

    if (event.target.tagName !== 'BUTTON') return;
    const i = event.target.getAttribute('number');
    for (let el of [ ... divButtons.children]){
        if (el.getAttribute('class') == 'button_text'){
            if (el.getAttribute('number') == i) {
                el.innerText = 'Нажата!';
            }else {
                el.innerText = 'Нажми меня';
            }
        }
    }
    counter ++;
    divCount.innerText = counter;
})