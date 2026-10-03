let Base, Expoente, Contador, Potencia;

console.log("======= Potência =======");
console.log("");

Base = Number(prompt("Digite a base:"));
console.log("");

Expoente = Number(prompt("Digite o expoente:"));
console.log("");

Potencia = 1;

for (Contador = 1; Contador <= Expoente; Contador++) {
    Potencia = Potencia * Base;
}
console.log("Resultado: " + Potencia);