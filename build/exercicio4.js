"use strict";
/*
Leia um vetor de 20 posições e em seguida um valor X qualquer.
Seu programa devera fazer uma busca do valor de X no vetor lido e
informar a posição em que foi encontrado ou se não foi encontrado. */
//                       0  1  2  3  4  5  6  7  8   9...
// const arrr: number[] = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const arrr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const indexRandomOfArray = Math.floor(Math.random() * arrr.length);
console.log(indexRandomOfArray);
const resultValue = arrr.find(indexRandomOfArray);
console.log(`valor: ${resultValue}, índice: ${indexRandomOfArray}`);
