const inputUsername = document.getElementById("inputUsername");
const inputPassword = document.getElementById("inputPassword");
const btSignup = document.getElementById("btSignup");

const handlebtSignupClick = () => {
    const username = inputUsername.value.trim();
    if (!username) {
        alert("Preencha o nome do usuário");
        inputUsername.focus();
        return;
    } 
}