const inputID = document.getElementById("inputID");
const btFetch = document.getElementById("btFetch");

const handlebtFetchClick = () => {
    const id = inputID.value.trim();
    if (!id) {
        alert("Precisa digitar um ID");
        return;
    }
    fetch(`https://swapi.dev/api/people/${id}`).then((response)) => {
        console.log(response);
        if (responde.ok) {
            console.log("Sucesso!");
        } else {
            console.log("Error")
        }
        }
};

