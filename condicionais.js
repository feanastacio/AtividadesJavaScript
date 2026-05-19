// Estrutura condicional
//temos condições e decidimos o caminho que vamos seguir na estrutura condicional

/*
If > SE 
ELSE > SENÂO
ELSE IF > SENÃO SE 
SWITCH/CASE > SWITCH (fé como um menu de opções, onde cada case é uma opção)
*/

// let nome = prompt("Digite seu nome: ")
// console.log(nome);

//Exemplos
// 1 - sistema de temperatura
// let temperatura = Number (prompt("Digite a temperatura: ")) // o prompt foi convertido em number para naão haver problema na validação
// if (temperatura < 20) {
//     console.log("Está frio!"); 
// } else {
//     console.log("Está calor!"); 
// }

// 2 - Verificar o nível da bateria
// let bateria = Number (prompt("Digite o nível da bateria: "))
// if (bateria <= 30) {
//     alert("Bateria está fraca!")
// } else {
//     alert("Bateria está carregada!")
// }

//3 - Sistema de acesso 
// let tipoUsuario = prompt("Digite seu tipo de usúario (admin, cliente): ").toLowerCase()
// //toUpperCase -> deixa as letras e maiusculo
// //toLowerCase -> deixa as letras e minusculo
// if (tipoUsuario == "admin") {
//     console.log("Acesso total ao sistema!");
// } else if (tipoUsuario == "cliente") {
//     console.log("Acesso limitado ao sistema!");
// } else {
//     console.log("Tipo inválido!");
// }

// //4 - Classificar a qualidade da internet
// let velocidade = Number(prompt("Digite a velovidade da internet: "))
// if (velocidade >= 100) {
//     console.log("Internet Rápida!");
// } else if(velocidade >= 50){
//     console.log("Internet é Média!");
// } else {
//     console.log("Internet Lenta!");
// }

//5 - Analisar volume de itens
// let quantidade = 10
// if (quantidade === 0) {
//     console.log("Nenhum item!");
// } else if (quantidade < 5){
//     console.log("Poucos itens.");
// } else if (quantidade <= 5 && quantidade < 10){
//     console.log("Quantidade média de itens.");
// } else {
//     console.log("Muitos itens.");
// }

//6 - Uma condicional dentro da outro (Condicional aninhada)
// const nota = 5
// if(nota >= 7) {
//     if (nota = 10) {
//         console.log("Aprovado com premiação");
//     } else{
//         console.log("Aprovado");
//     }
// } else {
//     console.log("Reprovado");
// }

//7 - Adaptação de tela de dispositivo
// let dispositivo = prompt("Você está usando celular,tablet ou computador? ").toLowerCase
// if (dispositivo == "celular" || dispositivo == "tablet") {
//     console.log("Modo mobile ativado");
// } else if (dispositivo == "computador"){
//     console.log("Modo desktop ativado");
// } else {
//     console.log("Dispositivo desconhecido");
// }

//8 - switch/case
//mudar tema do sistema
let tema = prompt("Digite um tema: claro, escuro, azul ou digite sair: ").toLowerCase();
switch (tema) {
    case "claro":
        console.log("Tema claro ativado!");
        document.body.style.backgroundColor = "#e0e0e0ff";
        break;
    case "escuro":
        console.log("Tema escuro ativado!");
        document.body.style.backgroundColor = "#000000";
        break;
    case "azul":
        console.log("Tema azul ativado!");
        document.body.style.backgroundColor = "#2f00ffff";
        break;
    default:
        console.log("Tema inválido!");
        break;
}