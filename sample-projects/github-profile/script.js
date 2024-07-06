const APIurl='https://api.github.com/users/';//root url

const form=document.getElementById('form');
const search=document.getElementById('search');
const main=document.getElementById('main');
async function getUser(username) {
    try {
        const response = await axios(APIurl + username)
        const data=response.data
        createUserCard(data)
        getRepos(username)
    } catch(error) {
        if(error.response.status == 404) {
            createErrorCard('No profile with this username')
        }
    }
}
async function getRepos(username){
    try{
        const response=await axios(APIurl + username+'/repos?sort=created')
        const data=response.data
        addReposToCard(data)
    }
    catch(error){
        createErrorCard('problem fetching repos')
    }
}

function createUserCard(user) {
    const userId=user.name||user.login
    const userBio=user.bio?`<p>${user.bio}</p>`:''

    const cardHTML = `
    <div class="card">
    <div>
      <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
    </div>
    <div class="user-info">
      <h2>${userId}</h2>
      ${userBio}
      <ul>
        <li>${user.followers} <strong>Followers</strong></li>
        <li>${user.following} <strong>Following</strong></li>
        <li>${user.public_repos} <strong>Repos</strong></li>
      </ul>
      <div id="repos"></div>
    </div>
  </div>
    `
    main.innerHTML = cardHTML

}
function createErrorCard(msg){
    const cardHTML=`
    <div class="card">
        <h1>${msg}</h1>
    </div>`
    main.innerHTML = cardHTML
}

function addReposToCard(repos) {
    const reposEl = document.getElementById('repos')

    repos
        .slice(0, 5)
        .forEach(repo => {
            const repoEl = document.createElement('a')
            repoEl.classList.add('repo')
            repoEl.href = repo.html_url
            repoEl.target = '_blank'
            repoEl.innerText = repo.name

            reposEl.appendChild(repoEl)
        })
}
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const user=search.value
    if(user){
        getUser(user)
        search.value=''
    }
})
