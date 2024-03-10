   
    document.addEventListener('DOMContentLoaded', () =>{
    const user = document.getElementById('user')
    const pass = document.getElementById('pass')
    const link = document.getElementById('admin-link')
    const button = document.getElementById('button')

    
    user.addEventListener('input', () => {
   if(user.value.trim() === '' || pass.value.trim() === '')
   {
    button.style.background = '#BBBBBB'
    button.style.cursor = 'not-allowed'
    button.disabled = true

   }
   else{
    button.style.cursor = 'pointer'
    button.style.background = '#21A5EE'
    button.disabled = true
    link.href = './Admin/admin-index.html'
   }
    })
    pass.addEventListener('input', () => {
        if(pass.value.trim() === '' || user.value.trim() === '')
        {
         button.style.background = '#BBBBBB'
         button.style.cursor = 'not-allowed'
         button.disabled = true
        }
        else{
         button.style.cursor = 'pointer'
         button.style.background = '#21A5EE'
         button.disabled = false
         link.href = './Admin/admin-index.html'    
        }
         })
        })