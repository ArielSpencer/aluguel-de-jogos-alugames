function alterarStatus(id) {
    let botaoClicado = document.getElementById(`game-${id}`);
    let imagem = botaoClicado.querySelector('.dashboard__item__img');
    let botao = botaoClicado.querySelector('.dashboard__item__button');
    let jogo = botaoClicado.querySelector('.dashboard__item__name');
    let mensagem = document.querySelector ('.paragraph');

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
        mensagem.textContent = (`Jogo ${jogo.textContent} devolvido, obrigado!`);
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        mensagem.textContent = (`Jogo ${jogo.textContent} alugado, boa jogatina! :)`);
    }
}