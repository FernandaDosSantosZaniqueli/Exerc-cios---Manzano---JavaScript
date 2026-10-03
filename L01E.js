let V, T, Te, P; 

console.log("======= Prestação em atraso ======="); 
console.log("");

 V = Number(prompt("Digite o valor da prestação:")); 
 console.log(""); 

 T = Number(prompt("Digite a taxa:")); 
 console.log(""); 

 Te = Number(prompt("Digite o tempo de atraso:")); 
 console.log("");
  
 P = V + (V * T / 100) * Te; 
 console.log("O valor da prestação em atraso é: " + P); 
 console.log("");