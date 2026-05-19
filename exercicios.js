// // 1

// let idade = prompt("Digite sua idade:");
// if (idade >= 18) {
//     alert("Você é maior de idade.");
// } else {
//     alert("Você é menor de idade.");
// }

// // 2
// let numero = Number(prompt("Digite um número: "))
// if (numero > 1) {
//     console.log("O número é positivo");
// } else {
//     console.log("O número é negativo");
// }

// // 2 maneira que a professora pediu
// let numero1 = Number(prompt("Digite um número: "))
// if (numero1 >= 0) {
//     console.log("O número é positivo");
// } else {
//     console.log("O número é negativo");
// }

// // 3
// let nota = Number(prompt("Digite sua nota: "))
// if (nota >= 60) {
//     alert("Aprovado");
// } else {
//     alert("Reprovado");
// }

// 4 
// let num = Number(prompt("Digite um numero"))
// if (num > 0) {
//    alert("Número positivo.");
// } else if (num == 0) {
//     alert("O número é 0.");
// }else{ 
//     alert("Número negativo.");
// }

// 5
// let idade1 = Number(prompt("Digite sua idade: "))
// if (idade1 <= 12) {
//     alert("Você é uma criança");
// }else if (idade1 >= 13 && idade1 <= 17 ){
//     alert("Você é um adolescente");
// }
// else {  
//     alert("Você é um adulto");
// }

// 6
// let num1 = Number(prompt("Digite um número:"))
// if (num1 %2 == 0) {
//     alert("O Número é par!")
// } else {
//     alert("O Número é ímpar!")  
// }

// Intermediario

// 1
// let num1 = Number(prompt("Digite um número: "))
// let num2 = Number(prompt("Digite mais um número: "))

// // let operacao = prompt(
// //     "Digite uma operação (adição, multiplicação, subtração e divisão): "
// // ).toLowerCase()

// let operacao = prompt("Digite uma operação (+, -, /, *)");
// let resultado;

// if (operacao == "*") {
//     resultado = num1 * num2
//     alert("O resultado da sua multiplicação é:", resultado)
// } else if (operacao == "+") {
//     resultado = num1 + num2
//     alert("O resultado da sua adição é:", resultado)
// } else if (operacao == "-") {
//     resultado = num1 - num2
//     alert("O resultado da sua subtração é:", resultado)
// } else if (operacao == "/"){
//     resultado = num1 / num2
//     alert("O resultado da sua divisão é:", resultado)
// } else {
//     alert("Operação invalida!");
// }

// 2
// console.log("Digite 3 números: ");
// let num1 = Number(prompt("Digite um número: "))
// let num2 = Number(prompt("Digite um número: "))
// let num3 = Number(prompt("Digite um número: "))

// if (num1 > num2 && num1 > num3) {
//     console.log("O maior número é o", num1 );
// } else if (num2 > num1 && num2 > num3 ){
//     console.log("O maior número é o", num2 );
// } else if (num3 > num1 && num3 > num2) {
//     console.log("O maior número é o", num3 );
// } else {
//     console.log("Não tem número maior");
// }

// 3
// let valor = Number(prompt("Digite o valor da sua compra: "))
// let desconto = 10
// let valorFinal

// if (valor > 100) {
//     resultado = (desconto/100) * valor
//     valorFinal = valor - desconto
//     console.log("O valor final da sua compra é: ", valorFinal);
// } else {
//     console.log("O valor da sua compra é: ", valor);
// }

// 4
// let user = prompt("Digite o tipo do usuario")
// let senha = Number(prompt("Digite sua senha"))
// if (user == "admin" && senha == "1234") {
//     alert("Login bem-sucedido")
// } else {
//     alert("Acesso negado")
// }

//Avançado

// 1
// let valorCompra = Number(prompt("Digite o valor da sua compra: "))
// if (valorCompra >= 100) {
//     alert("Frete gratis")
// } else if ( valorCompra >= 50){
//     alert("Frete no valor de R$10,00")
// } else {
//     alert("Frete no valor de R$20,00")
// }

// 2
// let idade = Number(prompt("Digite sua idade: "))
// let convite = prompt("Você tem o convite da festa? (Sim/Não)").toLowerCase()
// if (idade >= 18 && convite == "sim") {
//     alert("Pode entrar!")
// } else {
//     alert("Não pode entrar!")
// }

// 3
// let nota = Number(prompt("Digite sua nota de 0-100: "))
// if (nota >= 90 && nota <=100) {
//     alert("Sua nota em conceito é A")
// } else if (nota >= 80 && nota <=89){
//     alert("Sua nota em conceito é B")
// } else if (nota >= 70 && nota <=79){
//     alert("Sua nota em conceito é C")
// } else if (nota >= 60 && nota <=69){
//     alert("Sua nota em conceito é D")
// } else if (nota < 60){
//     alert("Sua nota em conceito é F")
// } else {
//     alert("Nota inválida!")
// }

// 4
// let peso = Number(prompt("Digite seu peso (kg):"))
// let altura = Number(prompt("Digite sua altura (m):"))
// let imc = peso / (altura * altura)

// console.log("Seu IMC é: " + imc.toFixed(2))
// if (imc < 18.5) {
//     console.log("Classificação: Abaixo do peso")
// } else if (imc >= 18.5 && imc < 25) {
//     console.log("Classificação: Peso normal")
// } else if (imc >= 25 && imc < 30) {
//     console.log("Classificação: Sobrepeso")
// } else {
//     console.log("Classificação: Obesidade")
// }

// 5
let estoque = Number(prompt("Qual o número de produtos no estoque?"))

if (estoque >= 10) {
    alert("Produto disponível!")
} else if (estoque >= 1 && estoque < 10) {
    alert("Poucas unidades!")
} else if (estoque == 0) {
    alert("Produto indisponível!")
}