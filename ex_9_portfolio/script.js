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

let palavraEscolhida;
let exibicaoPalavra;
let letrasChutadas;
let tentativasRestantes;
let numeroErros;

function iniciarJogo() {
    palavraEscolhida = listaPalavras[Math.floor(Math.random() * listaPalavras.length)];
    console.log(palavraEscolhida);
    exibicaoPalavra = Array(palavraEscolhida.length).fill('_');
    console.log(exibicaoPalavra);

    letrasChutadas = [];

    tentativasRestantes = 7;

    numeroErros = 0;

    atualizarExibicao();
}

function atualizarExibicao() {
    document.getElementById("exibicao-palavra").innerText = exibicaoPalavra.join(' ');
    document.getElementById("letras_chutadas").innerText = `${letrasChutadas.join(', ')}`;

    document.getElementById("imagem").src = `imagens_forca/forca${numeroErros}.png`;

    if(tentativasRestantes ===0) {
        encerrarJogo('Você morreu!!');
    } else if(!exibicaoPalavra.includes('_')) {
        encerrarJogo('Parabéns, você venceu!!');
    }
}

function chutarLetra() {
    const entradaLetra = document.getElementById('entrada_letra');
    const letra = entradaLetra.value.toLowerCase();
    if(!letra.match(/[a-zà-ùç]/i)) {
        alert('Por favor, insira uma letra válida!');
        return;
    }

    if(letrasChutadas.includes(letra)) {
        alert('Você já tentou esta letra. Tente outra.');
        return;
    }

    letrasChutadas.push(letra);

    if(palavraEscolhida.includes(letra)){
        for (let i=0; i< palavraEscolhida.length; i++){
            if(palavraEscolhida[i] === letra){
                exibicaoPalavra[i] = letra;
            }
        }
    }else {
        tentativasRestantes--;
        numeroErros++;
    }

    entradaLetra.value = '';

    atualizarExibicao();
}


function encerrarJogo(mensagem) {
    document.getElementById('entrada_letra').disabled = true;
    document.getElementById('mensagem').innerText = mensagem;

    document.getElementById('recomecar').style.display = 'block';
}
 
window.load = iniciarJogo();
