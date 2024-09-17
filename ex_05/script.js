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
    palavraEscolhida = listaPalavras[Math.floor(Math.random()*listaPalavras.length)];

    exibicaoPalavra = Array(palavraEscolhida.length).fill('_');
    console.log(exibicaoPalavra);

    letrasChutadas = [];

    tentativasRestantes = 7;

    numeroErros = 0;

    atualizarExibicao();
}
window.load = iniciarJogo();
