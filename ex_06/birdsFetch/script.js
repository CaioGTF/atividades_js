const inputID = document.getElementById("inputID");
const btFetch = document.getElementById("btFetch");
const preJogadores = document.getElementById("preJogadores");

const handleBtFetchClick = () => {
  const matchID = inputID.value.trim();
  if (!matchID) {
    alert("Precisa digitar o ID!");
    return;
  }

  // Remova o placeholder {account_id}
  fetch(`https://api.opendota.com/api/matches/${matchID}`)
    .then((response) => {
      console.log(response);
      if (response.ok) {
        console.log("Sucesso!");
      } else {
        console.log("Erro: ", response.status, response.statusText);
        alert("Erro ao acessar o servidor - ID inválido?");
        throw new Error("Erro encontrado: " + response.status);
      }
      return response.json();
    })
    .then((data) => {
      console.log("data", data);
      // Verifique se os campos existem no JSON retornado
      if (data.profile) {
        preJogadores.innerHTML = `${data.profile.personaname} - ${data.profile.name}`;
      } else {
        preJogadores.innerHTML = "Dados do jogador não encontrados!";
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

btFetch.onclick = handleBtFetchClick;
