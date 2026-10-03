let Contador, Atual, Anterior, Proximo;

console.log("======= Fibonacci =======");
console.log("");

Anterior = 1;
Atual = 1;

console.log(Anterior);
console.log(Atual);

for (Contador = 3; Contador <= 15; Contador++) {
    Proximo = Anterior + Atual;

    console.log(Proximo);
    Anterior = Atual;
    Atual = Proximo;
}