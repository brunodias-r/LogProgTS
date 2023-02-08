/* 
Leia um vetor de 12 posições e em seguida ler também dois valores X e Y quaisquer 
correspondentes a duas posições no vetor. Ao final seu programa deverá escrever a 
soma dos valores encontrados nas respectivas posições X e Y. 
*/

let array: number[];
array = [12, 15, 5, 9, 16, 58, 98, 23, 69, 87, 15, 56];

const aleatorio1 = Math.floor(Math.random() * array.length);
const aleatorio2 = Math.floor(Math.random() * array.length);

if(array[aleatorio1] == array[aleatorio2]){
    console.log(`The values are the same. ▶️ ${array[aleatorio1].valueOf()} and ${array[aleatorio2]}`)
} else {
    const result = array[aleatorio1]*array[aleatorio2];
    console.log(`${array[aleatorio1].valueOf()} x ${array[aleatorio2]} = ${result}`);
}







