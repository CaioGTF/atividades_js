const listaSenhas = [
    '1234',
    '4321',
    '1111',
    '0000',
    '9876',
    '2468',
    '1357',
    '5678',
    '8765',
    '4444'
];

let senhaEscolhida;
let senhasChutadas;
let tentativasRestantes;

function iniciarJogo() {
    senhaEscolhida = listaSenhas[Math.floor(Math.random() * listaSenhas.length)];
    console.log('Senha secreta:', senhaEscolhida);

    senhasChutadas = [];
    tentativasRestantes = 3;

    document.getElementById('entrada_senha').value = '';
    document.getElementById('entrada_senha').disabled = false;
    document.getElementById('senhas_chutadas').innerText = '';
    document.getElementById('mensagem').style.display = 'none';
    document.getElementById('recomecar').style.display = 'none';
}

function atualizarExibicao() {
    const chutadasDiv = document.getElementById('senhas_chutadas');
    chutadasDiv.innerText = `Tentativas: ${senhasChutadas.join(', ')}`;

    if (tentativasRestantes === 0) {
        encerrarJogo('Você não pode mais fazer tentativas.');
    } else if (senhasChutadas.includes(senhaEscolhida)) {
        encerrarJogo('Parabéns, você acertou!');
    }
}

function chutarSenha() {
    const entradaSenha = document.getElementById('entrada_senha');
    const senha = entradaSenha.value;

    if (!senha.match(/^\d{4}$/)) {
        alert('Por favor, insira uma senha válida de 4 dígitos.');
        return;
    }

    if (senhasChutadas.includes(senha)) {
        alert('Você já tentou esta senha. Tente outra.');
        return;
    }

    senhasChutadas.push(senha);

    if (senha === senhaEscolhida) {
        encerrarJogo('Parabéns, você acertou!');
    } else {
        tentativasRestantes--;
        if (tentativasRestantes === 0) {
            encerrarJogo(`Você perdeu! A senha correta era ${senhaEscolhida}.`);
        }
    }

    entradaSenha.value = '';
    atualizarExibicao();
}

function encerrarJogo(mensagem) {
    document.getElementById('entrada_senha').disabled = true;
    document.getElementById('mensagem').innerText = mensagem;
    document.getElementById('mensagem').style.display = 'block';
    document.getElementById('recomecar').style.display = 'block';
}

function mostrarCombinacao() {
    alert(`A combinação secreta é: ${senhaEscolhida}`);
}

window.onload = iniciarJogo;
