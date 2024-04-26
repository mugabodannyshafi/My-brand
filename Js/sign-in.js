async function adminLogin(event) {
  event.preventDefault()
 const username = document.getElementById('user')
 const userPassword = document.getElementById('pass')
 const modelContainer = document.getElementById('model-container')
 const close = document.getElementById('close')
 const buttonLoading = document.querySelector('.buttonLoading')
 const signIn = document.querySelector('.signIn')

const userData = {
  emailAddress: username.value,
  pwd: userPassword.value
}
  signIn.style.visibility = 'hidden'
  buttonLoading.style.visibility = 'visible'
  await fetch("https://my-brand-backend-3-o1dg.onrender.com/login", {
  headers: {
    "Content-Type": "application/json"
  },
  method: "POST",
  body: JSON.stringify(userData)
})
.then((response) => {
  if(!response.ok)
  {
    signIn.style.visibility = 'visible'
    buttonLoading.style.visibility = 'hidden'
    modelContainer.style.display = 'block';
   close.addEventListener('click', function()
   {
       modelContainer.style.display = 'none'
   })
  }
  return response.json()
}).then((data) => {
  buttonLoading.style.visibility = 'hidden'
  signIn.style.visibility = 'none'
  console.log(data.accessToken)
  console.log(data.result.username)
  const myUserID = data.result._id
  const myToken = data.accessToken
  const userName = data.result.username
  localStorage.setItem('id', JSON.stringify(myUserID))
  localStorage.setItem('name', JSON.stringify(userName))
  localStorage.setItem('jwt', JSON.stringify(myToken))
     window.location = "./Admin/admin-index.html"
}).catch((error) => {
  buttonLoading.style.visibility = 'hidden'
  signIn.style.visibility = 'none'
  console.log(error)
})
}
