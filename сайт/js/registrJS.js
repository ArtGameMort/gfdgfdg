const nameInput = document.getElementById('Name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const registr = document.getElementById('button');

registr.addEventListener('click', () => {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (name && email && password) {
        window.location.href = 'http://localhost:63342/global.html/global.html?_ijt=97tgjsaih6bthgoeol7c8lisn9';
    } else {
        alert('Пожалуйста, заполните все поля!');
    }
});