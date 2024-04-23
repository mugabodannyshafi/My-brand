 async function changePassword(event) {
event.preventDefault()

const menuBtn = document.querySelector('.hamburger')
const closeBtn = document.querySelector('.close')
menuBtn.onclick = () => {
    const sideBar = document.querySelector('.side-bar');
    sideBar.classList.toggle('active-side');

    if(sideBar.classList.contains('active-side'))
    {
       menuBtn.style.visibility = 'hidden';
       closeBtn.style.visibility = 'visible';
    }
    else{
        closeBtn.style.visibility = 'hidden'
        menuBtn.style.visibility = 'visible'
    }
    closeBtn.addEventListener('click', () =>{
        sideBar.classList.remove('active-side');
        closeBtn.style.visibility = 'hidden'
        menuBtn.style.visibility = 'visible'
    })
}
const localUser = JSON.parse(localStorage.getItem('name')) || []
  const roleUser = document.querySelector('.name')
  roleUser.innerHTML = `${localUser}`
  
  const spanName = document.querySelector('.span-name')
  spanName.innerHTML = `${localUser}`
  const details = document.querySelector('.details');

spanName.addEventListener('mouseover', () => {
    details.style.visibility = 'visible';
});

details.addEventListener('mouseover', () => {
    details.style.visibility = 'visible';
});

details.addEventListener('mouseout', () => {
    details.style.visibility = 'hidden';
});
const modelContainer = document.getElementById('model-container')
const model = document.getElementById('model')
const messageResponse = document.querySelector('.response')
const currentUserID = JSON.parse(localStorage.getItem('id')) || []
const oldPass = document.getElementById('user')
const newPass = document.getElementById('pass')
const confirmPass = document.getElementById('pass1')
const button = document.getElementById('button')
const userData = {
    oldPassword: oldPass.value,
    newPassword: newPass.value,
    confirmPassword: confirmPass.value
}
const token = JSON.parse(localStorage.getItem('jwt')) || [];
await fetch(`http://localhost:7000/changePassword/${currentUserID}`, {
  headers: {
    "Authorization": `Bearer ${token}`,
    "Content-Type": "application/json"
  },
  method: "POST",
  body: JSON.stringify(userData)
})
.then((response) => {
  if(!response.ok) 
  {
    console.log('Error')
    modelContainer.style.display = 'block';
    setTimeout(function() {
        modelContainer.style.display = 'none';
    }, 3000);
        messageResponse.innerHTML = 'Error'
  }
  return response.json()
}).then((data) => {
    modelContainer.style.display = 'block';
setTimeout(function() {
    modelContainer.style.display = 'none';
}, 3000);
    messageResponse.innerHTML = data.message
  console.log(data)
  oldPass.value = ''
  newPass.value = ''
  confirmPass.value = ''
}).catch((error) => {
  console.log(error.message)
})

}

// modelContainer.style.display = 'block';
//    close.addEventListener('click', function()
//    {
//        modelContainer.style.display = 'none'
//    })