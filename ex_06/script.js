const repositories = document.querySelector('.content-main');

function getApiGithub() {
  fetch(`http://api.anidb.net:9001/httpapi?request=anime`)
  .then(async res => {
    if(!res.ok) {
      throw new Error(res.status);
    }
    let data = await res.json();
    console.log(data);
  })
}

getApiGithub()
