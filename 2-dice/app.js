"use strict";
let result = document.querySelector('.result');
function rollDice(num) {
  let res = Math.floor(Math.random() * num) + 1;
  result.innerHTML = res; 
}
