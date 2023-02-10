/* Leia um vetor de 40 posições. Contar 
e escrever quantos valores pares ele possui. */

const arrayEx5: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function pairValue() {
    let pairs = 0;
    for (let index = 0; index < arrayEx5.length; index++) {
        if (arrayEx5[index] % 2 == 0) {
            console.log(`${arrayEx5[index]}`)
            pairs++;
        } 
    }
    console.log(`Números pares: ${pairs}`);
}

console.log(pairValue())