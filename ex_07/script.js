const inputDespesa = document.getElementById("inputDespesa");
const inputValor = document.getElementById("inputValor");
const btAdicionar = document.getElementById("btAdicionar");
const olDespesas = document.getElementById("olDespesas");

const baseURL = "https://parseapi.back4app.com/classes/crud";
const headers = {
  "X-Parse-Application-Id": "HvJgOgDQd7O9l1E1XpaVWbf0rYV9skVkmXjvSGO6",
  "X-Parse-REST-API-Key": "NWqu0Wb12YAheLVW163VpYBZslwIxsAsej9steNS",
};

const headersJson = {
  ...headers,
  "Content-Type": "application/json",
};


const createList = (data) => {
  olDespesas.innerHTML = "";
  const tarefas = data.results;
  tarefas.forEach((tarefa) => {
    const text = document.createTextNode(`${tarefa.despesa} `);
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
  });
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
    console.log(response);
    if (!response.ok) {
      cb.checked = !cb.checked;
      alert("Erro ao acessar o servidor: " + response.status);
      throw new Error("Erro encontrado: " + response.status);
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
    console.log(response);
    if (!response.ok) {
      alert("Erro ao acessar o servidor: " + response.status);
      throw new Error("Erro encontrado: " + response.status);
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
    console.log(response);
    if (!response.ok) {
      alert("Erro ao acessar o servidor: " + response.status);
      throw new Error("Erro encontrado: " + response.status);
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

  const valor = inputValor.value.trim();
  if (!valor) {
    alert("Preencha o valor da despesa!");
    inputValor.focus();
    return;
  }
  try {
    const response = await fetch(baseURL, {
      method: "POST",
      headers: headersJson,
      body: JSON.stringify({ despesa: despesa }),
    });
    console.log(response);
    if (!response.ok) {
      alert("Erro ao acessar o servidor: " + response.status);
      throw new Error("Erro encontrado: " + response.status);
    }
    inputDescricao.value = "";
    inputDescricao.focus();
    getTarefas();
  } catch (error) {
    console.log(error);
  }
};

window.onload = getTarefas;
btAdicionar.onclick = handleBtAdicionarClick;