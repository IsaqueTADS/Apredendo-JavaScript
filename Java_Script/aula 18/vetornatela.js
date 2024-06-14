let valores = [8, 1, 7, 2, 9];
valores.sort()
/*for (let i = 0; i < valores.length; i++) {
  console.log(`a posição ${i} tem ` + valores[i]);
}*/

for (let i in valores) {
  console.log(valores[i]);
}

console.log(valores.indexOf(8))
console.log(valores.indexOf(3))
