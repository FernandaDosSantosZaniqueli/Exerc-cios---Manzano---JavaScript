let N, S;

console.log("======= Soma =======");
console.log("");

S = 0;

for (N = 1; N <= 500; N++) {
    if (N % 2 === 0) {
        S = S + N;
    }
}
console.log("A soma dos valores pares de 1 até 500 é: " + S);