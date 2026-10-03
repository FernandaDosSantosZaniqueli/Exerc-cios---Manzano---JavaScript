let N, I, J;
let F, Soma;

console.log("======= Leitura de 15 valores numéricos =======");
console.log("");

Soma = 0;

for (I = 1; I <= 15; I++) {
    N = Number(prompt("Digite um valor:"));

    F = 1;

    for (J = 1; J <= N; J++) {
        F = F * J;
   }

    Soma = Soma + F;
}
console.log("O somatório das fatoriais é: " + Soma);