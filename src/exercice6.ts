/* Leia um vetor de 40 posições e atribua valor 0 para 
todos os elementos que possuírem valores negativos.. */

const arrayEx6: number[] = [5, 6, 7, 8, -2, -9, -8, 9];

console.log(arrayEx6);
for (let index = 0; index < arrayEx6.length; index++) {
    let auxEx6 = 0;
    if (arrayEx6[index] < 0) {
        auxEx6 = arrayEx6[index];
        arrayEx6[index] = 0;
    }
}

console.log(arrayEx6);
