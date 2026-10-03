let A, B, AeB; 

console.log("======= Ler dois valores ======="); 
console.log(""); 

A = Number(prompt("Digite o valor de A:")); 
console.log(""); 

B = Number(prompt("Digite o valor de B:")); 
console.log(""); 

AeB = A; 
A = B; 
B = AeB; 

console.clear(); 
console.log("O valor de A agora é: " + A); 
console.log("O valor de B agora é: " + B);