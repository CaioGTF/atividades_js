const inputDespesa = document.getElementById("inputDespesa");
const inputValor = document.getElementById("inputValor");
const btAdicionar = document.getElementById("btAdicionar");

const handlebtAdicionarClick = () => {
    const despesa = inputDespesa.value.trim();
    if (!despesa) {
        alert("Preencha uma despesa");
        inputDespesa.focus();
        return;
    } 
}