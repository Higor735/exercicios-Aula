const nome = prompt('digite seu nome')

const idade = parseInt(prompt('digite sua idade'))

let mensagem = ''

if (idade >=18 && idade <65){
    mensagem = 'voce e um adulto'
} else if (idade < 18){
    mensagem = 'voce e um adolescente'
} else {
    mensagem = 'voce e um idoso'
}
console.log(mensagem)






