'use strict';

const array = [
{ id: 1, name: 'Вася' },
{ id: 2, name: 'Петя' },
{ id: 1, name: 'Вася' },
];

let uniqueArr =
    [...new Set(array.map(JSON.stringify))].map(JSON.parse);

console.log(uniqueArr);