let Nome, Continuar;
let Largura, Comprimento, Area, AreaTotal;

console.log("======= Área total de uma residência =======");
console.log("");

AreaTotal = 0;
Continuar = "Sim";

while (Continuar !== "Não") {
    Nome = prompt("Digite o nome do cômodo:");
    console.log("");

    Largura = Number(prompt("Digite a largura do cômodo:"));
    console.log("");

    Comprimento = Number(prompt("Digite o comprimento do cômodo:"));

    Area = Largura * Comprimento;
    AreaTotal = AreaTotal + Area;

    console.log("");
    console.log("Cômodo: " + Nome);
    console.log("Área do cômodo: " + Area + " m²");

    console.log("");
    Continuar = prompt("Deseja continuar calculando? (Sim/Não):");
    console.log("");
}
console.log("Área total da residência é: " + AreaTotal + " m²");