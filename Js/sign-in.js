async function adminLogin(event) {
  event.preventDefault()
 const username = document.getElementById('user')
 const userPassword = document.getElementById('pass')
 const modelContainer = document.getElementById('model-container')
 const close = document.getElementById('close')

const userData = {
  emailAddress: username.value,
  pwd: userPassword.value
}
if(username.value.trim() !== '' && userPassword.value.trim() !== "") {
  await fetch("http://localhost:7000/login", {
  headers: {
    "Content-Type": "application/json"
  },
  method: "POST",
  body: JSON.stringify(userData)
})
.then((response) => {
  if(!response.ok) 
  {
    console.log('-------------->error')
  }
  return response.json()
}).then((data) => {
  console.log(data.accessToken)
  console.log(data.result.username)
  const myToken = data.accessToken
  const userName = data.result.username
  localStorage.setItem('name', JSON.stringify(userName))
  localStorage.setItem('jwt', JSON.stringify(myToken))
  if(data) {
    console.log('logged in')
     window.location = "./loading/logging-loader.html"
}
else{
  modelContainer.style.display = 'block';
   close.addEventListener('click', function()
   {
       modelContainer.style.display = 'none'
   })
}
}).catch((error) => {
  console.log(error)
})
}
else {
  modelContainer.style.display = 'block';
     close.addEventListener('click', function()
     {
         modelContainer.style.display = 'none'
     })
}

 }
