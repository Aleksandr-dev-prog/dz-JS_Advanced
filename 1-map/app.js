"use strict"

let arrObj = [
    { id: 1, name: "Вася" },
    { id: 2, name: "Петя" },
    { id: 1, name: "Вася" },
];

// 1 способ (не эффективный)
let unique = Array.from(new Set(arrObj.map(elem => JSON.stringify(elem)))).map(elem => JSON.parse(elem));
console.log(unique);// Выведет: [ { id: 1, name: "Вася" }, { id: 2, name: "Петя" } ]

// 2 способ - Испольуем Map, где ключом будет id, а значением объект
const uniqArr = Array.from(
    new Map(arrObj.map(obj => [obj.id, obj])).values()
);
console.log(uniqArr);// Выведет: [ { id: 1, name: "Вася" }, { id: 2, name: "Петя" } ]

// 3 способ
const uniqArr1 = Object.values(
  arrObj.reduce((acc, obj) => {
    acc[obj.id] = obj;
    return acc;
  }, {})
);
console.log(uniqArr1);// Выведет: [ { id: 1, name: "Вася" }, { id: 2, name: "Петя" } ]

// 4 способ - Если нужно оставить первый встретившийся объект с уникальным id (а не последний)
const set = new Set();
const uniqArr2 = arrObj.filter(obj => {
  if (set.has(obj.id)) return false;
  set.add(obj.id);
  return true;
});
console.log(uniqArr2);// Выведет: [ { id: 1, name: "Вася" }, { id: 2, name: "Петя" } ]












