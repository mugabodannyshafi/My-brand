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
const displayMessage = (action) =>{
    action.style.display = 'block';
     setTimeout(() =>{
        action.style.display = 'none';
     }, 1200);
  }
modelBtn.addEventListener('click', () => {
    const modal = document.querySelector('.modal-overlay')
    const closeBtn = document.querySelector('.close-btn')
    modal.classList.toggle('open-modal')
    
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('open-modal')
    })

    const title = modal.querySelector('#title')
    const description = modal.querySelector('#description')
    const image = modal.querySelector('#image')
    const addBtn = modal.querySelector('#addBtn')
    const errMsg = modal.querySelector('#error')
    const form = modal.querySelector('#form')

    addBtn.addEventListener('click', () =>
    {
        if(title.value.trim() === '' || description.value.trim() === '' || image.value.trim() === '')
        {
            displayMessage(errMsg)
        }
        else{
            form.action = "./articles.html";
        }
    })

    window.addEventListener('click', (e) =>
          {
            if(e.target === modal)
            {
                modal.classList.remove('open-modal')
            }
          })
})


