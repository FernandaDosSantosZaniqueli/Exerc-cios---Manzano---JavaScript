let V, S, M, I;

console.log("======= 10 valores =======");
console.log("");

S = 0;

for (I = 1; I <= 10; I++) {
    V = Number(prompt("Digite um valor:"));
    S = S + V;
}

M = S / 10;

console.log("");
console.log("O somatório é: " + S);

console.log("");
console.log("A média é: " + M);