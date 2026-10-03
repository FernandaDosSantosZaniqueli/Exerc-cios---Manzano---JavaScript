let Expoente, Contador, Potencia;

console.log("======= Potências de 3 =======");
console.log("");

for (Expoente = 0; Expoente <= 15; Expoente++) {
    Potencia = 1;

    for (Contador = 1; Contador <= Expoente; Contador++) {
        Potencia = Potencia * 3;
    }
    console.log("3 elevado a " + Expoente + " = " + Potencia);
}