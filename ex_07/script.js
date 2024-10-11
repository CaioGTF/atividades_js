const inputDespesa = document.getElementById("inputDespesa");
const inputValor = document.getElementById("inputValor");
const btAdicionar = document.getElementById("btAdicionar");
const olDespesas = document.getElementById("olDespesas");
const inputSoma = document.getElementById("inputSoma");

let soma = 0;
const baseURL = "https://parseapi.back4app.com/classes/crud";
const headers = {
  "X-Parse-Application-Id": "HvJgOgDQd7O9l1E1XpaVWbf0rYV9skVkmXjvSGO6",
  "X-Parse-REST-API-Key": "NWqu0Wb12YAheLVW163VpYBZslwIxsAsej9steNS",
};

const headersJson = {
  ...headers,
  "Content-Type": "application/json",
};

// Atualizar soma e exibir total
const atualizarSoma = () => {
  inputSoma.value = soma.toFixed(2);
};

const createList = (data) => {
  olDespesas.innerHTML = "";
  soma = 0; // Resetar a soma para recalcular
  const tarefas = data.results;
  tarefas.forEach((tarefa) => {
    const text = document.createTextNode(`${tarefa.descricao} - R$${tarefa.valor.toFixed(2)} `);
    const li = document.createElement("li");
    li.appendChild(text);
    
    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.checked = tarefa.concluida;
    cb.onchange = () => handleCheckboxClick(cb, tarefa);
    li.appendChild(cb);
    
    const bt = document.createElement("button");
    bt.innerHTML = "x";
    bt.onclick = () => handleBtRemoverClick(bt, tarefa);
    li.appendChild(bt);

    olDespesas.appendChild(li);
    soma += tarefa.valor; // Somar o valor da despesa
  });
  atualizarSoma(); // Atualizar o campo de soma com o valor total
};

const handleCheckboxClick = async (cb, tarefa) => {
  try {
    cb.disabled = true;
    const response = await fetch(`${baseURL}/${tarefa.objectId}`, {
      method: "PUT",
      headers: headersJson,
      body: JSON.stringify({ concluida: !tarefa.concluida }),
    });
    cb.disabled = false;
    if (!response.ok) {
      cb.checked = !cb.checked;
      alert("Erro ao acessar o servidor: " + response.status);
    }
  } catch (error) {
    cb.checked = !cb.checked;
    console.log(error);
  }
};

const handleBtRemoverClick = async (bt, tarefa) => {
  try {
    bt.disabled = true;
    const response = await fetch(`${baseURL}/${tarefa.objectId}`, {
      method: "DELETE",
      headers: headers,
    });
    bt.disabled = false;
    if (!response.ok) {
      alert("Erro ao acessar o servidor: " + response.status);
    }
    getTarefas();
  } catch (error) {
    console.log(error);
  }
};

const getTarefas = async () => {
  try {
    const response = await fetch(baseURL, {
      method: "GET",
      headers: headers,
    });
    if (!response.ok) {
      alert("Erro ao acessar o servidor: " + response.status);
    }
    const data = await response.json();
    createList(data);
  } catch (error) {
    console.log(error);
  }
};

const handleBtAdicionarClick = async () => {
  const despesa = inputDespesa.value.trim();
  if (!despesa) {
    alert("Preencha a despesa");
    inputDespesa.focus();
    return;
  }

  const valor = parseFloat(inputValor.value.trim());
  if (isNaN(valor)) {
    alert("Preencha o valor da despesa!");
    inputValor.focus();
    return;
  }

  try {
    const response = await fetch(baseURL, {
      method: "POST",
      headers: headersJson,
      body: JSON.stringify({ descricao: despesa, valor: valor }), // Ajuste: campo "descricao"
    });
    if (!response.ok) {
      alert("Erro ao acessar o servidor: " + response.status);
    }
    soma += valor; // Atualiza a soma com a nova despesa
    atualizarSoma(); // Exibe o total atualizado
    inputDespesa.value = "";
    inputValor.value = "";
    inputDespesa.focus();
    getTarefas();
  } catch (error) {
    console.log(error);
  }
};

window.onload = getTarefas;
btAdicionar.onclick = handleBtAdicionarClick;
