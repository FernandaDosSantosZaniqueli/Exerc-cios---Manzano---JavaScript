let Numero, Fatorial, I;

console.log("======= Fatorial =======");
console.log("");

for (Numero = 1; Numero <= 10; Numero++) {
    if (Numero % 2 !== 0) {
        Fatorial = 1;

        for (I = 1; I <= Numero; I++) {
            Fatorial = Fatorial * I;
        }
        console.log(Numero + "! = " + Fatorial);
    }
}