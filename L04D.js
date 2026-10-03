let Q, S, I;

console.log("======= Grãos de trigo =======");
console.log("");

Q = 1;
S = 0;

for (I = 1; I <= 64; I++) {
    console.log(I + "º -> " + Q);

    S = S + Q;
    Q = Q * 2;
}
console.log("");
console.log("Total de grãos é: " + S);