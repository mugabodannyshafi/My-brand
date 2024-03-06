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
    document.body.classList.toggle('dark-theme')

    if(document.body.classList.contains('dark-theme'))
    {
        darkBtn.src = "./image/light.png"
        darkBtn.classList.add('light')
    }
    else
    {
        darkBtn.src = "./image/dark.png"
        darkBtn.classList.add('dark')
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

          const likeComment = document.createElement('div')
          likeComment.classList.add('like-comment')
          likeComment.innerHTML = "<i class='fa-regular fa-heart'></i><i class='fa-regular fa-comment'></i><i class='fa-regular fa-share-from-square'></i>"

          const likes = document.createElement('span')
          likes.classList.add('likes')
          likes.innerHTML = "1,200 likes"
        
          modalContent.append(likeComment)
          modalContent.append(likes)

          const comment = document.createElement('div')
          comment.classList.add('write-comment')
          comment.innerHTML = "<input type='text' placeholder='Write a comment'><button>Comment</button>"
          modalContent.append(comment)
          modalContainer.append(modalContent)
          
          closeBtn.addEventListener("click", function () {
            modal.classList.remove("open-modal");
            modalContainer.removeChild(modalContent)
          });
          window.addEventListener('click', (e) =>
          {
            if(e.target === modal)
            {
                modal.classList.remove('open-modal')
                modalContainer.removeChild(modalContent)
            }
          })
    })
}
