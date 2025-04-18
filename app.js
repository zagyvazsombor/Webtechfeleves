let neptun = sessionStorage.getItem('neptun');
if (!neptun) {
    neptun = prompt('Kérlek add meg a Neptun kódodat:');
    sessionStorage.setItem('neptun', neptun);
}

const NEPTUN_CODE = neptun;

function loadNavigation() {
    fetch('nav.html')
        .then(res => res.text())
        .then(navHtml => {
            const body = document.querySelector('body');
            body.insertAdjacentHTML('afterbegin', navHtml);
        })
        .catch(err => console.error(err));
}

loadNavigation();