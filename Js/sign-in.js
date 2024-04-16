   
    document.addEventListener('DOMContentLoaded', () =>{


            const email = 'mugabodannyshafi@gmail.com'
            const adminPassword = 'dANNY1234@'
            const users = {
                username: email,
                password: adminPassword
            }
            
            const myUsers = JSON.parse(localStorage.getItem('users')) || []
            myUsers.push(users)
            localStorage.setItem('users', JSON.stringify(myUsers))

 const username = document.getElementById('user')
 const userPassword = document.getElementById('pass')
 let modelContainer = document.getElementById('model-container')
let close = document.getElementById('close')
const link = document.getElementById('admin-link')
  button.addEventListener('click', () =>{
    if(username.value.trim() !== users.username && userPassword.value.trim() !== users.password)
  {
    modelContainer.style.display = 'block';
    close.addEventListener('click', function()
    {
        modelContainer.style.display = 'none'
    })
  }
 else{
    window.location.href = './Admin/admin-index.html'
 }
})
window.addEventListener('click', function(x){
  if(x.target === modelContainer)
  {
   modelContainer.style.display = 'none'
  }
})
})