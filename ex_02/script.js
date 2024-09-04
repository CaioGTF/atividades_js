const inputMat = document.getElementById("inputMat");
const inputNome = document.getElementById("inputNome");
const inputIdade = document.getElementById("inputIdade");
const inputCpf = document.getElementById("inputCpf");
const btPesquisar = document.getElementById("btPesquisar");

let aluno = {};
btPesquisar.onclick = () => {
    aluno.matricula = inputMat.value;
    aluno.nome = inputNome.value;
    aluno.idade = inputIdade.value;
    aluno.cpf = inputCpf.value;

    alert(JSON.stringify(aluno, null, 2));
};
