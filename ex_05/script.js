const listaPalavras = [
    "abacaxi", "anel", "amigo", "ave", "abacate", "bola", "bala", "banho", 
    "bau", "banco", "casa", "cachorro", "carro", "cafe", "cama", "dado", 
    "dedo", "doce", "dia", "dente", "elefante", "estrela", "escola", 
    "elo", "escada", "faca", "festa", "fogo", "foca", "fada", "gato", 
    "galo", "gelo", "goma", "ganso", "helicoptero", "hipopotamo", "hotel", 
    "harpa", "horta", "ilha", "iglu", "iris", "indio", "ima", "janela", 
    "jarra", "jogo", "jumento", "joaninha", "ketchup", "kiwi", "karate", 
    "koala", "kamikaze", "leao", "lago", "lua", "lima", "livro", "maca", 
    "mala", "muro", "mapa", "mesa", "neve", "ninho", "navio", "nuvem", 
    "nota", "olho", "ovo", "onda", "ouro", "orelha", "pato", "peixe", 
    "pipoca", "pato", "perna", "quilo", "quadro", "queijo", "quina", 
    "queda", "raio", "rosa", "rede", "rato", "roupa", "sol", "sapo", 
    "seda", "sabao", "sapato", "tigre", "touro", "teto", "tela", "tesoura", 
    "uva", "urso", "urna", "uniao", "umidade", "vaca", "verao", "vento", 
    "vela", "vidro", "webcam", "whisky", "waffle", "walker", "wifi", 
    "xale", "xadrez", "xerox", "xarope", "xampu", "yoga", "yakisoba", 
    "yogurte", "yeti", "yuppie", "zebra", "zoologico", "zumbi", "zero", 
    "zagueiro"
];

let palavraEscolhida;
let exibicaoPalavra;
let letrasChutadas;
let tentativasRestantes;
let numeroErros;

function iniciarJogo() {
    palavraEscolhida = listaPalavras[Math.floor(Math.random() * listaPalavras.length)];

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

    if(tentativasRestantes === 0) {
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
    }

    if(letrasChutadas.includes(letra)) {
        alert('Você já tentou esta letra. Tente outra');
        return;
    }
    letrasChutadas.push(letra);

    if(palavraEscolhida.includes(letra)) {
        for (let i=0; i< palavraEscolhida.length; i++) {
            if(palavraEscolhida[i] === letra) {
                exibicaoPalavra[i] = letra;
            } else {
                tentativasRestantes--;
                numeroErros++;
            }
        }
    }
    entradaLetra.value = '';
    atualizarExibicao();
}


function encerrarJogo(mensagem) {
    document.getElementById('entrada-letra').disabled = true;
    document.getElementById('mensagem').innerText = mensagem;

    document.getElementById('recomecar').style.display = 'block';
}
 
window.load = iniciarJogo();
