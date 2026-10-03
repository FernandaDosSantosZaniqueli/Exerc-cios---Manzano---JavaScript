let Valor, Maior, Menor;

console.log("======= Valores =======");
console.log("");

Valor = Number(prompt("Digite um valor positivo:"));
console.log("");

if (Valor >= 0) {
    Maior = Valor;
    Menor = Valor;

    while (Valor >= 0) {
        if (Valor > Maior) {
            Maior = Valor;
        }

        if (Valor < Menor) {
            Menor = Valor;
        }

        Valor = Number(prompt("Digite outro valor: (ou um valor negativo)"));
        console.log("");
    }

    console.log("");
    console.log("Maior valor: " + Maior);

    console.log("");
    console.log("Menor valor: " + Menor);

    console.log("");
} else {
    console.log("Nenhum valor positivo foi informado.");
}