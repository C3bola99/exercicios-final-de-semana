
//exercício 1
//A)
function apresentacao() {
    var nome = "William";
    var idade = "25";
    var cidade = "São leopoldo";
    var ocupacao = "Técnico de TI";

    console.log("Eu sou " + nome + ", tenho " + idade + " anos, moro em " + cidade + " e sou " + ocupacao + ".");
}

// Chamando a função para imprimir a mensagem
apresentacao();

//B)

function informacoesPessoa(nome, idade, cidade, profissao) {
    return "Eu sou " + nome + ", tenho " + idade + " anos, moro em " + cidade + " e sou " + profissao + ".";
}

// Exemplo de uso da função
var nome = "William";
var idade = 25;
var cidade = "São Leopoldo";
var profissao = "desenvolvedor";

var mensagem = informacoesPessoa(nome, idade, cidade, profissao);
console.log(mensagem);

//exercício 2

//A
function somarNumeros(num1, num2) {
    return num1 + num2;
}

// Exemplo de uso da função
var resultadoSoma = somarNumeros(5, 3);
console.log("A soma é:", resultadoSoma);


//B
function verificarMaiorOuIgual(num1, num2) {
    return num1 >= num2;
}

// Exemplo de uso da função
var primeiroMaiorOuIgual = verificarMaiorOuIgual(8, 5);
console.log("O primeiro número é maior ou igual ao segundo?", primeiroMaiorOuIgual);


//C
function verificarPar(numero) {
    return numero % 2 === 0;
}

// Exemplo de uso da função
var numeroPar = verificarPar(6);
console.log("O número é par?", numeroPar);


//D
function imprimirTamanhoEMaiusculas(mensagem) {
    var tamanho = mensagem.length;
    var mensagemMaiuscula = mensagem.toUpperCase();
    console.log("Tamanho da mensagem:", tamanho);
    console.log("Mensagem em letras maiúsculas:", mensagemMaiuscula);
}

// Exemplo de uso da função
imprimirTamanhoEMaiusculas("Olá, mundo!");


//Exercício 3

// Função para somar dois números
function somar(num1, num2) {
    return num1 + num2;
}

// Função para subtrair dois números
function subtrair(num1, num2) {
    return num1 - num2;
}

// Função para multiplicar dois números
function multiplicar(num1, num2) {
    return num1 * num2;
}


// Solicitar ao usuário para inserir dois números
var num1 = parseFloat(prompt("Insira o primeiro número:"));
var num2 = parseFloat(prompt("Insira o segundo número:"));

// Chamar as funções com os números fornecidos pelo usuário
var resultadoSoma = somar(num1, num2);
var resultadoSubtracao = subtrair(num1, num2);
var resultadoMultiplicacao = multiplicar(num1, num2);
var resultadoDivisao = dividir(num1, num2);

// Exibir os resultados no console
console.log("Números inseridos:", num1, "e", num2);
console.log("Soma:", resultadoSoma);
console.log("Diferença:", resultadoSubtracao);
console.log("Multiplicação:", resultadoMultiplicacao);
console.log("Divisão:", resultadoDivisao);


//Desafios

//A

const imprimirParametro = (parametro) => {
    console.log(parametro);
};

// Exemplo de uso da função
imprimirParametro("Olá mundo!");

//B

const somarEImprimir = (valor1, valor2) => {
    const resultadoSoma = valor1 + valor2;
    imprimirParametro(resultadoSoma);
};

// Exemplo de uso da função
somarEImprimir(5, 3); // Isso imprimirá "8" no console


//Desafio 2

function calcularHipotenusa(cateto1, cateto2) {
    return (cateto1 ** 2 + cateto2 ** 2) ** 0.5;
}

// Exemplo de uso da função
var catetoA = 3;
var catetoB = 4;
console.log("A hipotenusa é:", calcularHipotenusa(catetoA, catetoB));



