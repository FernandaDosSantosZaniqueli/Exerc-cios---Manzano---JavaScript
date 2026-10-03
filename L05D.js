let Numero, Soma;

console.log("======= Somatório dos pares =======");
console.log("");

Soma = 0;

for (Numero = 1; Numero <= 500; Numero++) {
    if (Numero % 2 === 0) {
    Soma = Soma + Numero;
    }
}
console.log("Somatório dos valores pares: " + Soma);