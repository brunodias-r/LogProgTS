/* Leia dois vetores de 20 posições e calcule um terceiro vetor contendo, 
nas posições pares os valores do primeiro e nas posições impares os valores 
do segundo. */

const arrayEx71: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrayEx72: number[] = [-1, -2, -3, -4, -5, -6, -7, -8, -9, -10];
let arrayEx73 = [];

for (let index = 0; index < arrayEx71.length; index++) {
    if(arrayEx71.indexOf(arrayEx71[index]) % 2 == 0){
        const result7 = arrayEx71.find(element => element == arrayEx71[index]);
        arrayEx73.push(result7);
    } else if(arrayEx72.indexOf(arrayEx72[index]) % 2 == 1){
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