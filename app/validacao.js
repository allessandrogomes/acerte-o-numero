function verificaValor(chute) {
    const numero = +chute

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>'
        return
    }

    if (numeroMaiorMenor(numero)) {
        elementoChute.innerHTML += `
            <div>Valor inválido: o número precisa estar entre ${menorValor} e ${maiorValor}</div>
        `

        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2 class="text-5xl">Você acertou!</h2>
        <h3 class="text-2xl mt-5">O número secreto era ${numeroSecreto}</h3>

        <button id="jogar-novamente" class="p-2 bg-neon-secondary rounded mt-5 text-neon-quarter cursor-pointer">Jogar novamente</button>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>
        `
    }
}

function newFunction(numero) {
    return Number.isNaN(numero);
}

function numeroMaiorMenor(numero) {
    return numero > maiorValor || numero <menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})
