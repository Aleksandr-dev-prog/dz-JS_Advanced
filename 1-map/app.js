"use strict"

let arrObj = [
    { id: 1, name: "Вася" },
    { id: 2, name: "Петя" },
    { id: 1, name: "Вася" },
];

let unique = Array.from(new Set(arrObj.map(elem => JSON.stringify(elem)))).map(elem => JSON.parse(elem));
console.log(unique);














