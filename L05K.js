let Numero, Contador, Fatorial;

console.log("======= Fatorial dos ímpares =======");
console.log("");

for (Numero = 1; Numero <= 10; Numero++) {
    if (Numero % 2 !== 0) {
        Fatorial = 1;

        for (Contador = 1; Contador <= Numero; Contador++) {
            Fatorial = Fatorial * Contador;
        }
   console.log(Numero + "! = " + Fatorial);
    }
}