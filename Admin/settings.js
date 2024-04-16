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

activeUser.addEventListener('mouseover', () => {
    details.style.visibility = 'visible';
});

details.addEventListener('mouseover', () => {
    details.style.visibility = 'visible';
});

details.addEventListener('mouseout', () => {
    details.style.visibility = 'hidden';
});
