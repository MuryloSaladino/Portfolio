const getProfileInfo = async () => {
    const userData = await fetch("https://api.github.com/users/MuryloSaladino")
    .then(res => {
        if(!res.ok)
            throw new Error("Error on request")
        return res.json()
    })
    .catch(err => {
        console.error(err.message)
    })
    const userRepos = await fetch("https://api.github.com/users/MuryloSaladino/repos")
    .then(res => {
        if(!res.ok)
            throw new Error("Error on request")
        return res.json()
    })
    .catch(err => {
        console.error(err.message)
    })

    return {...userData, repos: userRepos}
}


const profileInfo = await getProfileInfo()

console.log(profileInfo)

const renderRepos = (repos) => {
    
    const list = document.querySelector(".projects__list")

    repos.forEach(repo => {
        list.insertAdjacentHTML("beforeend", `
            <li class="projects__list__card">
                <h1>${repo.name}</h1>
                <p class="grey3-text">Main Language: <span class="outline-text grey2-text">${repo.language}</span></p>
                <p class="grey3-text">${repo.description}</p>
                <a href="${repo.svn_url}" target="_blank">
                    <img src="./assets/github.png">
                    <p>GitHub Code</p>
                </a>
            </li>
        `)
    });
}

renderRepos(profileInfo.repos)