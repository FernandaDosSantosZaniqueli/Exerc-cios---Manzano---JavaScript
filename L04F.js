let Valor, Soma, Media;
let Contador;

console.log("======= Valores =======");
console.log("");

Soma = 0;
Contador = 0;

Valor = Number(prompt("Digite um valor:"));
console.log("");

while (Valor >= 0) {
    Soma = Soma + Valor;
    Contador = Contador + 1;

    Valor = Number(prompt("Digite outro valor: (ou um valor negativo)"));

    console.log("");
}
console.log("Total do somatório: " + Soma);
console.log("");

console.log("Total de valores lidos: " + Contador);
console.log("");

if (Contador > 0) {
    Media = Soma / Contador;
    console.log("Média aritmética: " + Media);
} else {
    console.log("");
    console.log("Média aritmética: não pode ser calculada.");
}