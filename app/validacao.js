function verificaSeOChutePossuiUmValorValido(chute) {
    // transforma o chute em numero inteiro
    const numero = +chute

    if (chuteNan(numero)) {
        elementoChute.innerHTML += `<div>O valor precisa ser um numero!</div>`
    }

    if (chuteInvalido(numero)) {
        elementoChute.innerHTML += `<div>Valor invalido! O numero secreto deve estar entre ${menorValor} e ${maiorValor}</div>`
    }

    if (chuteCerto(numero)) {
        document.body.innerHTML = `
        <h2>Parabéns Você Acertou!</h2>
        <h3>O número secreto é: ${numeroSecreto}</h3>
        `
    }
}

function chuteCerto(numero) {
    return numero === numeroSecreto
}

function chuteNan(numero) {
    return Number.isNaN(numero)
}

function chuteInvalido(numero) {
    return numero > maiorValor || numero < menorValor
}
