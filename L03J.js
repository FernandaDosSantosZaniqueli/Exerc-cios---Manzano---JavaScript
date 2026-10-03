let N, S, C, M;

console.log("======= Soma e média aritmética =======");
console.log("");

S = 0;
C = 0;

for (N = 50; N <= 70; N++) {
    if (N % 2 === 0) {
        S = S + N;
        C = C + 1;
    }
}

M = S / C;

console.log("");
console.log("A soma dos valores pares é: " + S);

console.log("");
console.log("A média dos valores pares é: " + M);