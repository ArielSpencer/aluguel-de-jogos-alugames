function botaoStatusMonopoly() {
    let botao = document.getElementById('botaoMonopoly');
    if (botao.classList.contains('dashboard__item__button--return')) {
        botao.classList.remove('dashboard__item__button--return');
        document.getElementById('botaoMonopoly').textContent = ('Alugar');
        } else {
            botao.classList.add('dashboard__item__button--return');
            document.getElementById('botaoMonopoly').textContent = ('Devolver');
        }
}

function botaoStatusTicketToRide() {
    let botao = document.getElementById('botaoTicketToRide');
    if (botao.classList.contains('dashboard__item__button--return')) {
        botao.classList.remove('dashboard__item__button--return');
        document.getElementById('botaoTicketToRide').textContent = ('Alugar');
        } else {
            botao.classList.add('dashboard__item__button--return');
            document.getElementById('botaoTicketToRide').textContent = ('Devolver');
        }
}

function botaoStatusTakenoko() {
    let botao = document.getElementById('botaoTakenoko');
    if (botao.classList.contains('dashboard__item__button--return')) {
        botao.classList.remove('dashboard__item__button--return');
        document.getElementById('botaoTakenoko').textContent = ('Alugar');
        } else {
            botao.classList.add('dashboard__item__button--return');
            document.getElementById('botaoTakenoko').textContent = ('Devolver');
        }
}