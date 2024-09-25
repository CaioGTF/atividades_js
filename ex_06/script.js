const repositories = document.querySelector('.content-main');

function getApiGithub() {
  fetch(`https://api.thecatapi.com/v1/images/search?limit=10`)
  .then(async res => {
    if(!res.ok) {
      throw new Error(res.status);
    }
    let data = await res.json();
    data.map( item => {
      let project = document.createElement('div');

      project.innerHTML = `Teste`

      repositories.appendChild(project);
    })
  })
}

getApiGithub()
