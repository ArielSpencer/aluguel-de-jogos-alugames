let jogosAlugados = 0;

function contadorJogosAlugados() {
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}

function alterarStatus(id) {
    let botaoClicado = document.getElementById(`game-${id}`);
    let imagem = botaoClicado.querySelector('.dashboard__item__img');
    let botao = botaoClicado.querySelector('.dashboard__item__button');
    let jogo = botaoClicado.querySelector('.dashboard__item__name');
    let mensagem = document.querySelector ('.paragraph');

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        if (confirm(`Você tem certeza que deseja devolver o jogo ${jogo.textContent}?`)) {
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
        jogosAlugados--;
            if (jogosAlugados > 0) {
                mensagem.textContent = (`Jogo ${jogo.textContent} devolvido, obrigado! Você possui: ${jogosAlugados} jogos alugados.`);
            } else {
                mensagem.textContent = (`Boas-vindas, confira nosso catálogo:`);
            }
        } else {
            mensagem.textContent = (`O jogo ${jogo.textContent} não foi devolvido!`);
        }
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        jogosAlugados++;
        mensagem.textContent = (`Jogo ${jogo.textContent} alugado, boa jogatina! Você possui: ${jogosAlugados} jogos alugados. :)`);
    }
}

contadorJogosAlugados();

// Inicializa a contagem considerando que os jogos já começam alugados
document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contadorJogosAlugados();
});