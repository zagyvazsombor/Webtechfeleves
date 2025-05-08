let neptun = sessionStorage.getItem('neptun');
if (!neptun) {
    neptun = prompt('Kérlek add meg a Neptun kódodat:');
    sessionStorage.setItem('neptun', neptun);
}

function resetNeptun() {
    let newCode = prompt('Add meg az új Neptun kódot:');
    if (newCode) {
        sessionStorage.setItem('neptun', newCode);
        location.reload(); // frissítés, hogy az új kód érvénybe lépjen
    }
}

let NEPTUN_CODE = neptun;

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