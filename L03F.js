let B, Ex, P;

console.log("======= Potência =======");
console.log("");

B = Number(prompt("Digite a base:"));
console.log("");

Ex = Number(prompt("Digite o expoente:"));
console.log("");

P = 1;

for (let i = 1; i <= Ex; i++) {
    P = P * B;
}
console.log("O resultado da potência é: " + P);