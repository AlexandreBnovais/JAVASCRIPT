let num = [8 , 1 , 7 , 4 , 2 , 9]

// for(let val=0 ; val < num.length ; val++) {
//     console.log(`A posição é: ${val} tem o valor ${num[val]}`)
// }

for(let val in num) {
    console.log(`A posição é: ${val} tem o valor ${num[val]}`)
}