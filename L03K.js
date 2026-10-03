let Nome, Continuar;
let Largura, Comprimento, Area, Total;

console.log("======= Área total de uma residência =======");
console.log("");

Total = 0;
Continuar = "Sim";

while (Continuar !== "Não") {
    Nome = prompt("Digite o nome do cômodo:");
    console.log("");

    Largura = Number(prompt("Digite a largura do cômodo:"));
    console.log("");

    Comprimento = Number(prompt("Digite o comprimento do cômodo:"));
    console.log("");

    Area = Largura * Comprimento;
    Total = Total + Area;

    console.log("A área do " + Nome + " é: " + Area + " m²");
    console.log("");

    Continuar = prompt("Deseja continuar calculando novos cômodos?");
    console.log("");
}
console.log("A área total da residência é: " + Total + " m²");