let sections = document.querySelectorAll("section")
let navLinks = document.querySelectorAll("header nav a")

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY
        let offset = sec.offsetTop-150
        let height = sec.offsetHeight
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active')
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
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