let Celsius, Fahrenheit;

console.log("======= Celsius para Fahrenheit =======");
console.log("");

for (Celsius = 10; Celsius <= 100; Celsius += 10) {
    Fahrenheit = (9 * Celsius + 160) / 5;

    console.log(Celsius + " °C = " + Fahrenheit + " °F");
}