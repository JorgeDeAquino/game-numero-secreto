function verificaSeOChutePossuiUmValorValido(chute) {
    // transforma o chute em numero inteiro
    const numero = +chute

    if (chuteNan(numero)) {
        console.log('O valor precisa ser um numero!')
    }

    if (chuteInvalido(numero)) {
        console.log(`Valor invalido! O numero secreto deve estar entre ${menorValor} e ${maiorValor}`)
    }
}

function chuteNan(numero) {
    return Number.isNaN(numero)
}

function chuteInvalido(numero) {
    return numero > maiorValor || numero < menorValor
}
