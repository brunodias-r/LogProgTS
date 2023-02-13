"use strict";
/*
Leia um vetor de 20 posições e em seguida um valor X qualquer.
Seu programa devera fazer uma busca do valor de X no vetor lido e
informar a posição em que foi encontrado ou se não foi encontrado. */
const arrr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
function valueAndIndexOfArray(arrr) {
    const indexRandomOfArray = Math.floor(Math.random() * arrr.length);
    const element = arrr[indexRandomOfArray];
    return `índice: ${indexRandomOfArray} e valor: ${element}`;
}
console.log(`${valueAndIndexOfArray(arrr)}`);
