   
    document.addEventListener('DOMContentLoaded', () =>{
        console.log('document loaded')
    const user = document.getElementById('user')
    const pass = document.getElementById('pass')
    const pass1 = document.getElementById('pass1')
    const link = document.getElementById('sign-in')
    const button = document.getElementById('button')

    
    user.addEventListener('input', () => {
   if(user.value.trim() === '' || pass.value.trim() === '' || pass1.value.trim() === '')
   {
    button.style.background = '#438db5'
    button.style.cursor = 'not-allowed'
    button.disabled = true
   }
   else{
    button.style.cursor = 'pointer'
    button.style.background = '#21A5EE'
    button.disabled = true
    link.href = "sign-in.html"
   }
    })
    pass.addEventListener('input', () => {
        if(pass.value.trim() === '' || user.value.trim() === '' || pass1.value.trim() === '')
        {
         button.style.background = '#438db5'
         button.style.cursor = 'not-allowed'
         button.disabled = true
        }
        else{
            button.style.cursor = 'pointer'
         button.style.background = '#21A5EE'
         button.disabled = false
         link.href = "sign-in.html"
        }
         })
         pass1.addEventListener('input', () => {
            if(pass.value.trim() === '' || user.value.trim() === '' || pass1.value.trim() === '')
            {
             button.style.background = '#438db5'
             button.style.cursor = 'not-allowed'
             button.disabled = true
            }
            else{
                button.style.cursor = 'pointer'
             button.style.background = '#21A5EE'
             button.disabled = false
             link.href = "sign-in.html"
            }
             })
        })