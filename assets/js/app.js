// Dark/Light Mode
const switchThemeBtn = document.querySelector('.changeTheme')
const iconeSwitch = document.getElementById("switch")
const txtSwitch = document.getElementById("switch-txt")

let toggleTheme = true;

switchThemeBtn.addEventListener('click', () => {
    if(toggleTheme === true) {
        document.documentElement.style.setProperty('--txt-color', '#000');
        document.documentElement.style.setProperty('--bg-color', '#f7f7f7')
        document.documentElement.style.setProperty('--bg-image', "url('./../img/grid-black.webp')");

        iconeSwitch.style.right = "calc(100% - 38px)"
        txtSwitch.textContent = "Clair"
        toggleTheme = false;

    } else {
        document.documentElement.style.setProperty('--txt-color', '#fff');
        document.documentElement.style.setProperty('--bg-color', '#222733');
        document.documentElement.style.setProperty('--bg-image', "url('./../img/grid-white.webp')");
        iconeSwitch.style.right = "3px"
        txtSwitch.textContent = "Sombre"
        toggleTheme = true;
    }
})

// Create content of body
fetch('./assets/data/projects.json')
.then(response => response.json())
.then(data => {
    data.projects.forEach((e) => {
        createCard(e)
    })
})


function createCard(project){
    const divProjects = document.querySelector('.projects-content')
    var article = document.createElement('article')
    article.classList.add('project-card')
    var img = document.createElement('img')
    img.classList.add('projects-img')
    img.src= `./assets/img/${project.picture}`
    img.alt = project.alt
    article.append(img)
    var overlay = document.createElement('div')
    overlay.classList.add('project-overlay')
    article.append(overlay)
    var modal = document.createElement('div')
    modal.classList.add('project-modal')
    var divContent = document.createElement('div')

    var subtitle = document.createElement('span')
    subtitle.classList.add('project-subtitle')
    subtitle.textContent = project.subtitle
    divContent.append(subtitle)

    var title = document.createElement('h3')
    title.classList.add('project-title')
    title.textContent= project.title
    divContent.append(title)

    var txtDescri = document.createElement('p')
    txtDescri.classList.add('project-content')
    txtDescri.textContent = project.description
    divContent.append(txtDescri)

    var button = document.createElement('a')
    button.href = project.url
    button.alt = project.alt
    button.rel = 'nofollow'
    button.target = '_blank'
    button.classList.add('project-button')
    button.classList.add('button')

    var icone = document.createElement('i')
    icone.classList.add('fa')
    icone.classList.add('fa-link')
    icone.ariaHidden = true

    button.append(icone)
    divContent.append(button)

    modal.append(divContent)
    article.append(modal)
    divProjects.append(article)
}
