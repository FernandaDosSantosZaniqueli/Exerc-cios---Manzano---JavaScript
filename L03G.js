let A, B, C, I;

console.log("======= Série de Fibonacci =======");
console.log("");

A = 1;
B = 1;

console.log(A);
console.log(B);

for (I = 3; I <= 15; I++) {
    C = A + B;
    console.log(C);
    A = B;
    B = C;
}