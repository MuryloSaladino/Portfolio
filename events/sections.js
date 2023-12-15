const renderProjects = (projects) => {
    
    const list = document.querySelector(".projects__list")

    projects.forEach(projects => {
        list.insertAdjacentHTML("beforeend", `
            <li class="projects__list__card">
                <h1>${projects.name}</h1>
                <p class="grey3-text">Main Language: <span class="outline-text grey2-text">${projects.language}</span></p>
                <p class="grey3-text">${projects.description}</p>
                <div>
                    <a href="${projects.link}" target="_blank">
                        <img src="./assets/github.png">
                        <p>GitHub Code</p>
                    </a>
                    ${
                        projects.deploy ?
                        `
                            <a href="${projects.deploy}" target="_blank">
                                <img src="./assets/share.svg">
                                <p>Application</p>
                            </a>
                        ` : ""
                    }
                </div>
            </li>
        `)
    });
}

renderProjects(projects)