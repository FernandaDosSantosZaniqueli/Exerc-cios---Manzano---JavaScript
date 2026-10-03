let Numero, Contador, Resultado;

console.log("======= Tabuada de 1 a 10 =======");
console.log("");

Numero = Number(prompt("Digite um número:"));
console.log("");

for (Contador = 1; Contador <= 10; Contador++) {
    Resultado = Numero * Contador;

   console.log(Numero + " x " + Contador + " = " + Resultado);
}