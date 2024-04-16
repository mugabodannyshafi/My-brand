async function adminRegister(event) {
    event.preventDefault()
    const user = document.getElementById('user');
    const pass = document.getElementById('pass');
    const pass1 = document.getElementById('pass1');
    const name = document.getElementById('name');
    const link = document.getElementById('sign-in');
    const button = document.getElementById('button');
    const email = document.querySelector('.email-valid')
    const password = document.querySelector('.password-valid')
    const confirmPassword = document.querySelector('.Cpassword-valid')

    button.addEventListener('click', async () => {
        const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.value)
        if (!emailValid) {
            user.style.border = '1px solid #f87171';
            email.style.color = '#f87171';
            email.style.display = 'block'
        }
        const passwordValid = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(pass.value) && pass.value.length >= 8;
        if (!passwordValid) {
            pass.style.border = '1px solid #f87171';
            password.style.color = '#f87171';
            password.style.display = 'block'
        }

        const confirmPasswordValid = pass.value.trim() === pass1.value.trim() && pass1.value.length >=8;
        if (!confirmPasswordValid) {
            pass1.style.border = '1px solid #f87171';
            confirmPassword.style.color = '#f87171';
            confirmPassword.style.display = 'block'
        }

        if(emailValid && passwordValid && confirmPasswordValid && name.value.trim !== '')
        {
            const userData = {
                userName: name.value,
                emailAddress: user.value,
                pwd: pass.value,
                }
                await fetch("http://localhost:7000/register", {
                    headers:{
                        "Content-Type": "application/json"
                    },
                    method: "POST",
                    body: JSON.stringify(userData)
                }).then((response) => {
                    if(!response.ok) {
                        console.log('------->error')
                    }
                    return response.json()
                }).then((data) => {
                    console.log(data)
                    window.location = "./loading/accountLoader.html"
                }).catch((error) => {
                    console.log(error)
                })
        }
        
    });
}
