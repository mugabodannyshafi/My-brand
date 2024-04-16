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
const user = document.querySelector('.homepage-description')
const roleUser = document.querySelector('.name')
roleUser.innerHTML = `${localUser}`
user.innerHTML = `Hey, ${localUser} Welcome to the admin panel!`
const activeUser = document.querySelector('.active-user')
const spanName = document.querySelector('.span-name')


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



spanName.innerHTML = `${localUser}`
async function handleAdmin() {
 await fetch('http://localhost:7000/login',{
    headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      body: success
    }).then((response) => {
        if(!response.ok) {
            console.log('--------->error')
        }
        return response.json()
    }).then((data) => {
        if(data) {
        
        }
    })
     }
    
    const messageCounter = document.getElementById('message')
    let counter = 0
    const token = JSON.parse(localStorage.getItem('jwt')) || [];
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
.then(messageData=> {
    console.log(messageData.messages)
    const messageSpace = document.querySelector('.message-space')
    if(messageData.messages.length <= 0)
        {
            const div = document.createElement('div')
        div.classList.add('noMessage')
        div.innerHTML = `<span>No messageData.messages found</span>`
        messageSpace.appendChild(div)
        }
        else{
    for(i = 0; i < messageData.messages.length; i++)
    {
        if(messageData.messages.length === 1)
        {
            messageSpace.innerHTML = `<div class="message1">
    <p id="mucyo">${messageData.messages[0].names}</p>
    <p id="message1">${messageData.messages[0].message}</p>
    </div>`
        }
    messageSpace.innerHTML = `<div class="message1">
    <p id="mucyo">${messageData.messages[0].names}</p>
    <p id="message1">${messageData.messages[0].message}</p>
    </div>
    <div class="message2">
    <p id="gloire">${messageData.messages[1].names}</p>
    <p id="message2">${messageData.messages[1].message}</p>
    </div>
    <div class="message2">
    <p id="gloire">${messageData.messages[2].names}</p>
    <p id="message2">${messageData.messages[2].message}</p>
    </div>`
        counter ++;
    }
    }
    messageCounter.innerHTML = counter + ' messages'
    
}).catch((error) => {
    console.log(error.message)
})
    
    
fetch('http://localhost:7000/blogs', {
    headers: {
        "Authorization": `Bearer ${token}`
    },
    method: "GET"
})
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then(data => {
    console.log(data)
    const blogs = document.getElementById('blog')
    const blogSpace = document.querySelector('.blogs')
    let blogCounter = 0
    
    if(data.blogs.length <= 0)
        {
            const div = document.createElement('div')
        div.classList.add('nodata')
        div.innerHTML = `<span>No data found</span>`
        blogSpace.appendChild(div)
        }
        else{
            for(j = 0; j < data.blogs.length; j++)
    {
            if(data.blogs.length === 1)
        {
            blogSpace.innerHTML = `<div class="blog-card">
            <img src="${data.blogs[0].image}" alt="">
            <div class="texts">
                <span>${data.blogs[0].title}</span>
            <p>${data.blogs[0].description}</p>
            </div>`
        }
        blogSpace.innerHTML = `<div class="blog-card">
        <img src="${data.blogs[0].image}" alt="">
        <div class="texts">
            <span>${data.blogs[0].title}</span>
        <p>${data.blogs[0].body}</p>
        </div>
    </div>
    <div id="blog2" class="blog-card">
        <img src="${data.blogs[1].image}" alt="">
        <div class="texts">
            <span>${data.blogs[1].title}</span>
        <p>${data.blogs[1].body}</p>
        </div>
    </div>`
    blogCounter++
    }
    }       
    blogs.innerHTML = blogCounter + ' Blogs'

}).catch((error) => {
    console.log(error.message)
})

