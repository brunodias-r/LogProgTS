/* Leia um vetor de 16 posições e troque os 8 primeiros valores pelos 
8 últimos e vice-e-versa. Escreva ao final o vetor obtido. */

let vetor: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

function changePlace(vet: number[]){

    const ini = vet.indexOf(1);
    const fin = vet.indexOf(16);

    //Resolution 1
    // for (let index = 0; index < vet.length; index++) {
    //     let aux;
    //     if(ini < fin){
    //         aux = vet[ini];
    //         vet[ini] = vet[fin];
    //         vet[fin] = aux;
    //     }
    // }

    //Resolution 2
    const result = vet.reverse();
    return vet;
}

console.log(changePlace(vetor));