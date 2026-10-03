let N, Maior, Menor;

console.log("======= Valores =======");
console.log("");

N = Number(prompt("Digite um valor positivo:"));
console.log("");

Maior = N;
Menor = N;

while (N >= 0) {
   if (N > Maior) {
        Maior = N;
    }

    if (N < Menor) {
        Menor = N;
    }

    N = Number(prompt("Digite outro valor positivo (ou digite um valor negativo):"));
    console.log("");
}
console.log("Maior valor informado: " + Maior);
console.log("Menor valor informado: " + Menor);