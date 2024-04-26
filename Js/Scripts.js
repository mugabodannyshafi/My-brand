document.addEventListener('visibilitychange',
    function() {
        if (document.visibilityState === "visible") {
            document.title = "MUGABO Shafi Danny || MyBrand";
        } else {
            document.title = "Back To MyBrand 😢";
        }
    })

let sections = document.querySelectorAll("section")
let navLinks = document.querySelectorAll(".nav-contents a")

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY
        let offset = sec.offsetTop-150
        let height = sec.offsetHeight
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active')
                document.querySelector('.nav-contents a[href*=' + id + ']').classList.add('active')
            })
        }
    })
}
const darkBtn = document.getElementById("dark");

darkBtn.addEventListener("click", () => {
    let theme;
    const sun = document.querySelector('.fa-sun');
    document.body.classList.toggle('dark-theme');

    if (document.body.classList.contains('dark-theme')) {
        darkBtn.style.visibility = "hidden";
        sun.style.visibility = 'visible';
        theme = 'LIGHT';
        console.log('light mode');
    } else {
        darkBtn.style.visibility = "visible";
        sun.style.visibility = 'hidden';
    }

    sun.onclick = () => {
        document.body.classList.remove('dark-theme');
        darkBtn.style.visibility = "visible";
        sun.style.visibility = 'hidden';
    }

    localStorage.setItem('theme', theme);
});

const savedTheme = localStorage.getItem('theme');

if (savedTheme && savedTheme === 'LIGHT') {
    document.body.classList.add('dark-theme');
}



const scrollToTop = document.getElementById("scroll")

scrollToTop.onclick = () =>{
    window.scrollTo(0,0)
}

const menuBtn = document.getElementById("menu-icon");
menuBtn.onclick = () => {
    const navBar = document.querySelector('.menu');
    navBar.classList.toggle('active-menu');

    if(navBar.classList.contains('active-menu'))
    {
       darkBtn.style.display = 'none'
       menuBtn.style.color = "#fff"
    }
    else
    {
        darkBtn.style.display = 'block'
        menuBtn.style.color = "#21A5EE"
    }
}

const menuLinks = document.querySelectorAll('.menu_link');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        const navBar = document.querySelector('.menu');
        navBar.classList.remove('active-menu');
        darkBtn.style.display = 'block'
        menuBtn.style.color = "#21A5EE"
    });
});
const blogs = document.querySelector('.blogs')
fetch('http://localhost:7000/blogs')
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then(data => {
    console.log(data)
    if(data.blogs.length <= 0)
    {
    const div = document.createElement('div')
    div.classList.add('noArticles')
    div.innerHTML = `<span>No articles found</span>`
    blogs.appendChild(div)
    }
    else{
  for(counter = 0; counter < data.blogs.length; counter++)
  {
    
        const div = document.createElement('div')
        div.innerHTML = `<div class="blog-cards">
        <div class="img-hover">
            <i class="fa-solid fa-heart"></i>&nbsp; <span id="numLikes"></span>
        </div>
        <img class="modal-image" src="${data.blogs[counter].image}" alt="">
        <span class="blogsTitle">${data.blogs[counter].title}</span>
        <div class="blog-description">
        ${data.blogs[counter].body}
        </div>`
            blogs.appendChild(div)
    }
  }
const cardBtn = document.querySelectorAll('.blog-cards')
for(let i = 0; i < cardBtn.length; i++)
{
    cardBtn[i].addEventListener('click', () => {
        const modal = document.querySelector(".modal-overlay");
        const closeBtn = document.querySelector(".close-btn");
        modal.classList.toggle('open-modal')

          const modalContainer = document.querySelector('.modal-container')
          const modalImage = cardBtn[i].querySelector('.modal-image')
          const cardImage = modalImage.cloneNode(true)
          modalContainer.append(cardImage)

          const modalContent = document.createElement("div")
          modalContent.classList.add('modal-content')
          const blogsTitle = cardBtn[i].querySelector('.blogsTitle')
          const cardTitle =blogsTitle.cloneNode(true) 
          modalContent.append(cardTitle)
          const blogsId = document.createElement('span')
          
          const blogsDescription = cardBtn[i].querySelector('.blog-description')
          const cardDescription =blogsDescription.cloneNode(true)
          modalContent.append(cardDescription)
          
          const line = document.createElement('div')
          line.classList.add('like-comment-line')
          modalContent.append(line)

          const likeComment = document.createElement('div');
likeComment.classList.add('like-comment');
likeComment.innerHTML = `<i id="likeButton" class='fa-regular fa-heart'></i><i class='fa-regular fa-comment'></i><i class='fa-regular fa-share-from-square'></i>`;
document.body.appendChild(likeComment);

          const likes = document.createElement('span')
          likes.classList.add('likes')
          likes.innerHTML = "<b id='likeCount'>0 likes</b>"

const likeButton = document.getElementById('likeButton');
let likeCount = 0;
let isLiked = false;
likeButton.addEventListener('click', () =>{
    
     async function likeBlog(){
         let likedBlog = JSON.parse(localStorage.getItem("likedBlog")) || []
         let action = ""
         if(!likedBlog.find(blog => blog.id === data.blogs[i]._id)){
           likedBlog.push({id:data.blogs[i]._id})
           action = "like"
           localStorage.setItem("likedBlog", JSON.stringify(likedBlog))
      
         }else{
          const index = likedBlog.findIndex(blog => blog.id === data.blogs[i]._id)
          likedBlog.splice(index, 1)
          action = "unlike"
          likeButton.className = 'fa-solid fa-heart'
          localStorage.setItem("likedBlog", JSON.stringify(likedBlog))
          }
         await fetch(`http://localhost:7000/likes/${data.blogs[i]._id}`,{
           method: "POST",
           headers:{
             "Content-Type": "application/json"
           },
           body: JSON.stringify({action:action})
         }).then((res)=>{
           if(!res.ok){
             console.log("-------------->error here")
           } return res.json()
         }).then((data)=>{
         console.log(data)
         document.getElementById("likeCount").innerText = `${data.likes} likes`;
            window.location.reload()
         }).catch((error)=>{
           console.log("------------------->",error.message)
         })
       
      
      
       }
       likeBlog()
})
fetch(`http://localhost:7000/likes/getLikes/${data.blogs[i]._id}`,{
    method: "GET",
    headers:{
      "Content-Type": "application/json"
    }
  }).then((res)=>{
    if(!res.ok){
      console.log("-------------->error here")
    } return res.json()
  }).then((data)=>{
  console.log(data)
  document.getElementById("likeCount").innerText = `${data.likes} likes`;
  if(data.likes > 0) {
    likeButton.className = 'fa-regular fa-heart'
  }
  }).catch((error)=>{
    console.log("------------------->",error.message)
  })
          modalContent.append(likeComment)
          modalContent.append(likes)

          const comment = document.createElement('div')
          comment.classList.add('write-comment')
          comment.innerHTML = '<main> \
    <div class="inputs"> \
        <div class="form-group"> \
            <input id="userName" type="text" placeholder=""> \
            <label class="form-label" for="">Enter your names</label> \
        </div> \
        <div class="form-group"> \
        <textarea name="" id="userComment"  placeholder=""  cols="30" rows="10"></textarea> \
            <label id="form-label" for="">Type a comment</label> \
        </div> \
        <div class="form-group"> \
            <input id="commentBtn" type="submit" value="Comment"> \
        </div> \
    </div> \
</main>';
document.body.appendChild(comment);

const userName = document.getElementById('userName')
const userComment = document.getElementById('userComment')
const commentBtn = document.getElementById('commentBtn')   
const commentsDiv = document.createElement('div')
    commentsDiv.classList.add('commentsDiv')
    comment.append(commentsDiv)
    
commentBtn.addEventListener('click', async () => {
          if(userName.value.trim() !== '' && userComment.value.trim() !== '')
          {
            const uComments = {
                userName: userName.value,
                comment: userComment.value
            }
       await fetch(`http://localhost:7000/${data.blogs[i]._id}/comment`, {
        headers:{
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(uComments)
    })
    .then((response) => {
        if(!response.ok) {
            console.log("-------->Error")
        }
        return response.json()
    })
    .then((addComment) => {
        console.log(addComment)
        window.location.reload()
    })
    .catch((error) => {
        console.log(error.message)
    });
        userComment.value = ''
        userName.value = ''
          }
          else{
            alert('that must be filled')
          }
})
fetch(`http://localhost:7000/${data.blogs[i]._id}/findComment`,{
    method: "GET"
})
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then(commentData => {
     console.log(commentData)
    let commentCounter = 0
    console.log(i)
    let test = 0
for(j = 0; j < commentData.comments.length; j++)
{
    if(commentData.comments[j].blog._id === data.blogs[i]._id)
    {
        console.log('yes')
        const li = document.createElement('fieldset')
        li.classList.add('list')
        li.innerHTML =  `<legend class='myNames'>${commentData.comments[j].username}</legend> <p class='myComment'>${commentData.comments[j].comment}</p> 
        <p class='myDates'>${commentData.comments[j].date}</p>`
        commentsDiv.appendChild(li)
        commentCounter++;
    }
    else{
        console.log('NO')
    }
    test++
}
const numOfComment = document.createElement('p')
numOfComment.classList.add('number-of-comment')
commentsDiv.appendChild(numOfComment)
numOfComment.innerHTML = commentCounter + ' comments'

   }).catch((error) => {
    console.log(error.message)
   })

          modalContent.append(comment)
          modalContainer.append(modalContent)
          closeBtn.addEventListener("click", function () {
            modal.classList.remove("open-modal");
            modalContainer.removeChild(modalContent)
            modalContainer.removeChild(cardImage)
          });
          window.addEventListener('click', (e) =>
          {
            if(e.target === modal)
            {
                modal.classList.remove('open-modal')
                modalContainer.removeChild(modalContent)
                modalContainer.removeChild(cardImage)
            }
          })
    })
}
}).catch((error) => {
    console.log(error)
})



const contactEmail = document.getElementById('contactEmail')
const contactNames = document.getElementById('contactNames')
const contactPhone = document.getElementById('contactPhone')
const contactMessage = document.getElementById('contactMessage')
const contactBtn = document.getElementById('contactBtn')
let modelContainer = document.getElementById('model-container')
let closeBtn = document.getElementById('close')
const buttonLoading = document.querySelector('.buttonLoading')
const signIn = document.querySelector('.signIn')
contactBtn.addEventListener('click', () => {
    const contacts = {
        fromEmail: contactEmail.value,
        names: contactNames.value,
        contact: contactPhone.value,
        emailMessage: contactMessage.value,
    }
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactEmail.value)
  if(emailValid && contactNames.value.trim() !== '' && contactPhone.value.trim() !== '' && contactMessage.value.trim() !== '')
  {
    buttonLoading.style.visibility = 'visible'
    signIn.style.visibility = 'hidden'
    fetch('http://localhost:7000/sendEmail', {
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(contacts)
    }).then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then(data => {
  buttonLoading.style.visibility = 'hidden'
  signIn.style.visibility = 'visible'
contactEmail.value = ''
        contactNames.value = ''
        contactPhone.value = ''
        contactMessage.value = ''
        modelContainer.style.display = 'block';
    closeBtn.addEventListener('click', function()
    {
        modelContainer.style.display = 'none'
    })
}).then((error) => {
    console.log('This is error', error)
})
  }
  else{
    alert('this is an error')
  }
})
