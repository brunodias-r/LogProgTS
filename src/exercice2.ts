/* Declare um vetor de 10 posições e o preencha com os 10 primeiros números impares e o escreva. */
let arr: number[] = [];

function arrayImpar(arr: number[]): number[] {
    for (let index = 0; index < 20; index++) {
        if (index % 2 == 1) {
            arr.push(index);
        }
    }
    return arr;
}

console.log(arrayImpar(arr));