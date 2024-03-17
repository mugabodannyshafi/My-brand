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
const darkBtn = document.getElementById("dark")
darkBtn.addEventListener("click", () =>{
    const sun = document.querySelector('.fa-sun')
    document.body.classList.toggle('dark-theme')

    if(document.body.classList.contains('dark-theme'))
    {
        darkBtn.style.visibility = "hidden"
        sun.style.visibility = 'visible'
    }
    else
    {
        darkBtn.style.visibility = "visible"
        sun.style.visibility = 'hidden'
    }
    sun.onclick = () => 
    {
        document.body.classList.remove('dark-theme')
        darkBtn.style.visibility = "visible"
        sun.style.visibility = 'hidden'
    }
})

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
    if (isLiked) {
        likeCount--;
        isLiked = false;
        likeButton.className = 'fa-regular fa-heart'
      } else {
        likeCount++;
        isLiked = true;
        likeButton.className = 'fa-solid fa-heart'
      }
      document.getElementById("likeCount").innerText = likeCount + ' likes';
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
commentBtn.addEventListener('click', () => {
          const myComments = {
            user: userName.value,
            comment: userComment.value,
            id : i,
            date: new Date()
           }
        const myComment = JSON.parse(localStorage.getItem('comments')) || []
        myComment.push(myComments)
        localStorage.setItem('comments', JSON.stringify(myComment))
        console.log()
    userComment.value = ''
    userName.value = ''
})

const Comment = JSON.parse(localStorage.getItem('comments')) || []
let commentCounter = 0
for(j = 0; j < Comment.length; j++)
{
    if(Comment[j].id === i)
    {
        const li = document.createElement('fieldset')
        li.classList.add('list')
        li.innerHTML =  `<legend class='myNames'>${Comment[j].user}</legend> <p class='myComment'>${Comment[j].comment}</p> \
        <p class='myDates'>${Comment[j].date.slice(0, 10)}</p>`
        commentsDiv.appendChild(li)
        commentCounter++;
    }
}
const numOfComment = document.createElement('p')
numOfComment.classList.add('number-of-comment')
commentsDiv.appendChild(numOfComment)
numOfComment.innerHTML = commentCounter + ' comments'

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
