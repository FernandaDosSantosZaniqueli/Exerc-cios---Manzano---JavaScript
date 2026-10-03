let Dividendo, Divisor, Quociente;

console.log("======= Divisão de dois números =======");
console.log("");

Dividendo = Number(prompt("Digite o dividendo:"));
console.log("");

Divisor = Number(prompt("Digite o divisor:"));
console.log("");

Quociente = 0;

while (Dividendo >= Divisor) {
    Dividendo = Dividendo - Divisor;
    Quociente = Quociente + 1;
}
console.log("");
console.log("Resultado inteiro da divisão: " + Quociente);