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

const modelBtn = document.getElementById('button')

modelBtn.addEventListener('click', () => {
    const modal = document.querySelector('.modal-overlay')
    const closeBtn = document.querySelector('.close-btn')
    modal.classList.toggle('open-modal')
    
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('open-modal')
    })

    window.addEventListener('click', (e) =>
          {
            if(e.target === modal)
            {
                modal.classList.remove('open-modal')
            }
          })
})

