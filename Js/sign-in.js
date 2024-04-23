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
    modelContainer.style.display = 'block';
   close.addEventListener('click', function()
   {
       modelContainer.style.display = 'none'
   })
  }
  return response.json()
}).then((data) => {
  console.log(data.accessToken)
  console.log(data.result.username)
  const myUserID = data.result._id
  const myToken = data.accessToken
  const userName = data.result.username
  localStorage.setItem('id', JSON.stringify(myUserID))
  localStorage.setItem('name', JSON.stringify(userName))
  localStorage.setItem('jwt', JSON.stringify(myToken))
    console.log('logged in')
     window.location = "./loading/logging-loader.html"
}).catch((error) => {
  console.log(error)
  modelContainer.style.display = 'block';
  close.addEventListener('click', function()
  {
      modelContainer.style.display = 'none'
  })
})
 }
