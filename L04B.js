let N, S;

console.log("======= Somatório dos valores pares =======");
console.log("");

S = 0;

for (N = 1; N <= 500; N++) {
    if (N % 2 === 0) {
        S = S + N;
    }
}
console.log("O somatório dos valores pares é: " + S);