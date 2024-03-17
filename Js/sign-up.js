document.addEventListener('DOMContentLoaded', () => {
    const user = document.getElementById('user');
    const pass = document.getElementById('pass');
    const pass1 = document.getElementById('pass1');
    const link = document.getElementById('sign-in');
    const button = document.getElementById('button');
    const lowercase = document.querySelector('.lowercase');
    const uppercase = document.querySelector('.uppercase');
    const numbers = document.querySelector('.numbers');
    const special = document.querySelector('.special');
    const characters = document.querySelector('.characters');
    const match = document.querySelector('.match');
    const icon = document.querySelectorAll('ul li i');

    function checkPassword() {
        const lowercaseValid = /[a-z]/.test(pass.value);
        const uppercaseValid = /[A-Z]/.test(pass.value);
        const numbersValid = /[0-9]/.test(pass.value);
        const specialValid = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(pass.value);
        const lengthValid = pass.value.length >= 8;
        const matchValid = pass.value.trim() === pass1.value.trim() && lengthValid;

        lowercase.style.color = lowercaseValid ? '#22c55e' : '#000';
        icon[0].className = lowercaseValid ? 'fa-solid fa-check' : 'fa-solid fa-xmark';

        uppercase.style.color = uppercaseValid ? '#22c55e' : '#000';
        icon[1].className = uppercaseValid ? 'fa-solid fa-check' : 'fa-solid fa-xmark';

        numbers.style.color = numbersValid ? '#22c55e' : '#000';
        icon[2].className = numbersValid ? 'fa-solid fa-check' : 'fa-solid fa-xmark';

        special.style.color = specialValid ? '#22c55e' : '#000';
        icon[3].className = specialValid ? 'fa-solid fa-check' : 'fa-solid fa-xmark';

        characters.style.color = lengthValid ? '#22c55e' : '#000';
        icon[4].className = lengthValid ? 'fa-solid fa-check' : 'fa-solid fa-xmark';

        match.style.color = matchValid ? '#22c55e' : '#000';
        icon[5].className = matchValid ? 'fa-solid fa-check' : 'fa-solid fa-xmark';

        if (lowercaseValid && uppercaseValid && numbersValid && specialValid && lengthValid && matchValid) {
            link.href = 'sign-in.html';
        } else {
            link.removeAttribute('href')
        }
    }

    pass.addEventListener('input', checkPassword);

    pass1.addEventListener('input', checkPassword);

    button.addEventListener('click', () => {
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.value)) {
            user.style.border = '1px solid #28a745';
        } else {
            user.style.border = '1.5px solid #dc3545';
        }
    });
});
