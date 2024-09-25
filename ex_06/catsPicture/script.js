async function getCats() {
    const catsDiv = document.getElementById('cats');
    catsDiv.innerHTML = 'Carregando...';
    
    try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');
        const data = await response.json();
        
        // Limpa o conteúdo anterior
        catsDiv.innerHTML = '';

        // Itera sobre os dados recebidos e cria elementos de imagem para cada gato
        data.forEach(cat => {
            const img = document.createElement('img');
            img.src = cat.url; // Define a URL da imagem do gato
            img.alt = 'Foto de gato';
            img.style.width = '90px'; // Define o tamanho da imagem, se necessário
            img.style.margin = '10px';
            catsDiv.appendChild(img); // Adiciona a imagem ao div
        });

    } catch (error) {
        catsDiv.innerHTML = 'Erro ao carregar imagens. Tente novamente.';
    }
}

// Chama a função para buscar as imagens
getCats();
