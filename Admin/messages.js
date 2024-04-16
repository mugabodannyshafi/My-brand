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
  const activeUser = document.querySelector('.active-user')
const spanName = document.querySelector('.span-name')
spanName.innerHTML = `${localUser}`
const details = document.querySelector('.details');

activeUser.addEventListener('mouseover', () => {
    details.style.visibility = 'visible';
});

details.addEventListener('mouseover', () => {
    details.style.visibility = 'visible';
});

details.addEventListener('mouseout', () => {
    details.style.visibility = 'hidden';
});

const messageContent = document.getElementById('message-content')
const token = JSON.parse(localStorage.getItem('jwt')) || [];
const loader = document.getElementById('loader');

loader.style.display = 'block';
    fetch('http://localhost:7000/messages', {
        headers: {
            "Authorization": `Bearer ${token}`
        },
        method: "GET"
    }).then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then(data => {
    loader.style.display = 'none';
    console.log(data.messages)
    if(data.messages.length <= 0)
    {
        const div = document.createElement('div')
    div.classList.add('nodata')
    div.innerHTML = `<img src="../image/messageEMPY-removebg-preview.png" alt="">`
    messageContent.appendChild(div)
    }
    else{
for(i = 0; i < data.messages.length; i++)
{
    const alldata = document.createElement('div')
    alldata.classList.toggle('message')
    alldata.innerHTML = `<p class="name"><span>Name:</span> <i>${data.messages[i].names}</i></p>
    <p class="email"><span>Email address:</span> <i>${data.messages[i].emailAddress}</i></p>
    <p class="message1"><span>Message:</span> <i>${data.messages[i].message}</i></p>
    <p class="contact"><span>Dates:</span> <i>${data.messages[i].date}</i></p>
    <p class="contact"><span>Contact:</span> <i>${data.messages[i].contact}</i></p>
    <hr>`
    messageContent.appendChild(alldata)
}
    }
}).catch((error) => {
    console.log(error.message)
})
