// const btn = document.querySelector('.btn');

// btn.addEventListener('click', () => {

//     window.scrollTo({
//         top: 0,
//         left: 0,
//         behavior: "smooth"
//     })

// })

const switchThemeBtn = document.querySelector('.changeTheme')
const iconeSwitch = document.getElementById("switch")
const txtSwitch = document.getElementById("switch-txt")

let toggleTheme = true;

switchThemeBtn.addEventListener('click', () => {
    if(toggleTheme === true) {
        document.documentElement.style.setProperty('--txt-color', '#000');
        document.documentElement.style.setProperty('--bg-color', '#fff');
        iconeSwitch.style.right = "calc(100% - 38px)"
        txtSwitch.textContent = "Clair"
        toggleTheme = false;

    } else {
        document.documentElement.style.setProperty('--txt-color', '#fff');
        document.documentElement.style.setProperty('--bg-color', '#000');
        iconeSwitch.style.right = "3px"
        txtSwitch.textContent = "Sombre"
        toggleTheme = true;
    }
})