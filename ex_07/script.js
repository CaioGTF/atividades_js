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

const handlebtAdicionarClick = async () => {
    const despesa = inputDespesa.value.trim();
    if (!despesa) {
        alert("Preencha uma despesa");
        inputDespesa.focus();
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
    inputDespesa.value = "";
    inputDespesa.focus();
    getTarefas();
  } catch (error) {
    console.log(error);
  }
};
