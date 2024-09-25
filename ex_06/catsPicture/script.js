async function getJoke() {
    const catsDiv = document.getElementById('cats');
    catsDiv.innerHTML = 'Carregando...';
    
    try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');
        const data = await response.json();
        catsDiv.innerHTML = data.cats;
    } catch (error) {
        catsDiv.innerHTML = 'Erro ao carregar piada. Tente novamente.';
    }
}