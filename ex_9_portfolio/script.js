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
let numeroErros;

function iniciarJogo() {
    senhaEscolhida = listaSenhas[Math.floor(Math.random() * listaSenhas.length)];
    console.log(senhaEscolhida);

    senhasChutadas = [];

    tentativasRestantes = 3;

    numeroErros = 0;

    atualizarExibicao();
}

function atualizarExibicao() {
    document.getElementById("senhas_chutadas").innerText = `${senhasChutadas.join(',      ')}`;

    if(tentativasRestantes ===0) {
        encerrarJogo('Você não pode mais fazer tentativas');
    } else if(senhasChutadas == senhaEscolhida) {
        encerrarJogo('Parabéns, você acertou!');
    }
}

function chutarSenha() {
    const entradaSenha = document.getElementById('entrada_senha');
    const senha = entradaSenha.value.toLowerCase();
    if(!letra.match(/[1-9]/i)) {
        alert('Por favor, insira um número!');
        return;
    }

    if(senhasChutadas.includes(senha)) {
        alert('Você já tentou esta senha. Tente outra.');
        return;
    }

    senhasChutadas.push(senha);

    if(senhaEscolhida.includes(senha)){
        for (let i=0; i< senhaEscolhida.length; i++){
            if(senhaEscolhida[i] === letra){
            }
        }
    }else {
        tentativasRestantes--;
        numeroErros++;
    }

    entradaSenha.value = '';

    atualizarExibicao();
}


function encerrarJogo(mensagem) {
    document.getElementById('entrada_senha').disabled = true;
    document.getElementById('mensagem').innerText = mensagem;

    document.getElementById('recomecar').style.display = 'block';
}
 
window.load = iniciarJogo();
