"use strict";
/* Leia dois vetores de 20 posições e calcule um terceiro vetor contendo,
nas posições pares os valores do primeiro e nas posições impares os valores
do segundo. */
const arrayEx71 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrayEx72 = [-1, -2, -3, -4, -5, -6, -7, -8, -9, -10];
let arrayEx73 = [];
function findValue(element, index, array) {
    for (let index = 0; index < array.length; index++) {
        if (array.indexOf(array[index]) == index) {
            return element;
        }
    }
}
for (let index = 0; index < arrayEx71.length; index++) {
    if (arrayEx71.indexOf(arrayEx71[index]) % 2 == 0) {
        const result7 = arrayEx71.find(element => element == arrayEx71[index]);
        arrayEx73.push(result7);
    }
    else if (arrayEx72.indexOf(arrayEx72[index]) % 2 == 1) {
        const result7 = arrayEx72.find(element => element == arrayEx72[index]);
        arrayEx73.push(result7);
    }
}
console.log(arrayEx73);
// let arrayEx7 : number[] = [ 1, 2, 3, 4];
// arrayEx7.pop();
// arrayEx7.shift();
// arrayEx7.push(5);
// arrayEx7.unshift(0);
// console.log(arrayEx7);
/* QUESTION 1 */
// let arrHR: number[] = [2, 6, 8, 9]
// function findLongestSubsequence(arr: number[]): number[] {
//   let newArr: number[] = []
//   for (let i = 1; i < arr.length; i++) {
//     newArr.push(arr[i] - arr[i - 1]);
//   }
//   return newArr;
// }
// function sumArray(arr: number[]): number {
//   let resultSum: number = 0;
//   for (let i = 0; i < arr.length; i++) {
//     resultSum += arr[i];
//   }
//   return resultSum;
// }
// const newArr: number[] = findLongestSubsequence(arrHR);
// console.log(sumArray(newArr));
/* QUESTION 2 */
