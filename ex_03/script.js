const inputNum = document.getElementById("inputNum");
const inputVal = document.getElementById("inputVal");
const inputMedia = document.getElementById("inputMedia");
const btAdicionar = document.getElementById("btAdicionar");
const inputSoma = document.getElementById("inputSoma");
const inpuQtd = document.getElementById("inputQtd");
valores = [];
let soma = 0;
let qtd = 0;
btAdicionar.onclick = () => {
    let num = parseInt(inputNum.value);
    valores.push(num);
    inputVal.value = valores.join(", "); 
    ++qtd;
    soma += num;
    inputSoma.value = soma;
    inputQtd.value = qtd;
    inputMedia.value = soma / qtd;
}