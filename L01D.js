let V, T, D, L; 

console.log("======= Litros de combustível gastos em uma viagem ======="); 
console.log(""); 

T = Number(prompt("Digite o tempo gasto:")); 
console.log(""); 

V = Number(prompt("Digite a velocidade:")); 
D = T * V; 
L = D / 12; 

console.clear(); 
console.log("A velocidade é: " + V); 
console.log("");

console.log("O tempo é: " + T); 
console.log(""); 

console.log("A distância é: " + D); 
console.log(""); console.log("A quantidade de litros é: " + L); 
console.log("");