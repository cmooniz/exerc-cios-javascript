//1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
console.log('Hello Word')

//2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
const firstvar = 10
const secondvar = 20

let sum = firstvar + secondvar
console.log(`A soma das duas váriáveis é: ${sum}`)

//3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
let whatIs = 2
let type = typeof whatIs

if (type === 'number') {
	console.log(`É um número`)
} else {
	console.log(`Não é um número`)
}

//4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
let whatIs2 = 'texto'
let type2 = typeof whatIs2

if (type2 === 'string') {
	console.log(`É uma string`)
} else {
	console.log(`Não é uma string`)
}

//5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
let whatIs3 = true
let type3 = typeof whatIs3

if (type3 === 'boolean') {
	console.log(`É um booleano`)
} else {
	console.log(`Não é um booleano`)
}

//6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
const firstvar2 = 10
const secondvar2 = 20

let sub = firstvar2 - secondvar2
console.log(`A subtração das duas váriáveis é: ${sub}`)

//7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
const firstvar3 = 10
const secondvar3 = 20

let mult = firstvar3 * secondvar3
console.log(`A multiplicação das duas váriáveis é: ${mult}`)

//8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
const firstvar4 = 10
const secondvar4 = 20

let divs = firstvar4 / secondvar4
console.log(`A divisão das duas váriáveis é: ${divs}`)

//9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
let whatIs4 = 2
let type4 = typeof whatIs4

if (type4 === 'number') {
	if (whatIs4 % 2 === 0) {
		console.log(`É um número par`)
	} else {
		console.log(`Não é um número par`)
	}
} else {
	console.log(`Não é um número`)
}

//10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
let whatIs5 = 3
let type5 = typeof whatIs5

if (type5 === 'number') {
	if (whatIs5 % 2 !== 0) {
		console.log(`É um número ímpar`)
	} else {
		console.log(`Não é um número ímpar`)
	}
} else {
	console.log(`Não é um número`)
}
