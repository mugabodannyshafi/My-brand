async function adminRegister(event) {
    event.preventDefault()
    const user = document.getElementById('user');
    const pass = document.getElementById('pass');
    const pass1 = document.getElementById('pass1');
    const name = document.getElementById('name');
    const button = document.getElementById('button');
    const email = document.querySelector('.email-valid')
    const password = document.querySelector('.password-valid')
    const confirmPassword = document.querySelector('.Cpassword-valid')
    const buttonLoading = document.querySelector('.buttonLoading')
    const signIn = document.querySelector('.signIn')
    button.addEventListener('click', async () => {
        const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.value)
        if (!emailValid) {
            user.classList.add('red')
            user.style.border = '1px solid #cb2f32';
            email.style.color = '#cb2f32';
            email.style.display = 'block'

            user.onclick = () => {
                user.classList.remove('red')
                user.style.border = '';
                email.style.display = 'none'
            }
        }
        const passwordValid = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(pass.value) && pass.value.length >= 8;
        if (!passwordValid) {
            pass.classList.add('red')
            pass.style.border = '1px solid #cb2f32';
            password.style.color = '#cb2f32';
            password.style.display = 'block'

            pass.onclick = () => {
                pass.classList.remove('red')
                pass.style.border = '';
                password.style.display = 'none'
            }
        }

        const confirmPasswordValid = pass.value.trim() === pass1.value.trim() && pass1.value.length >=8;
        if (!confirmPasswordValid) {
            pass1.classList.add('red')
            pass1.style.border = '1px solid #cb2f32';
            confirmPassword.style.color = '#cb2f32';
            confirmPassword.style.display = 'block'

            pass1.onclick = () => {
                pass1.classList.remove('red')
                pass1.style.border = '';
                confirmPassword.style.display = 'none'
            }
        }
        if(emailValid && passwordValid && confirmPasswordValid && name.value.trim !== '')
        {
            signIn.style.visibility = 'hidden'
            buttonLoading.style.visibility = 'visible'
            const userData = {
                userName: name.value,
                emailAddress: user.value,
                pwd: pass.value,
                }
                await fetch("https://my-brand-backend-3-o1dg.onrender.com/register", {
                    headers:{
                        "Content-Type": "application/json"
                    },
                    method: "POST",
                    body: JSON.stringify(userData)
                }).then((response) => {
                    if(!response.ok) {
                        signIn.style.visibility = 'visible';
                        buttonLoading.style.visibility = 'hidden'
                    }
                    return response.json()
                }).then((data) => {
                    signIn.style.visibility = 'visible'
                    buttonLoading.style.visibility = 'hidden'
                    window.location = "./sign-in.html"
                }).catch((error) => {
                    console.log(error)
                })
        }
        
    });
}
