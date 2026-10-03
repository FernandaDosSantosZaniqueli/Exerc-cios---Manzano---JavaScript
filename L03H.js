let C, F, I;

console.log("======= Conversão de graus Celsius em Fahrenheit =======");
console.log("");

for (I = 10; I <= 100; I += 10) {
    C = I;
    F = (9 * C + 160) / 5;

    console.log("Celsius: " + C + " - Fahrenheit: " + F);
}