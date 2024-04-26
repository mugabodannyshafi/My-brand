
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
  const localUser = JSON.parse(localStorage.getItem('name')) || []
  const roleUser = document.querySelector('.name')
  roleUser.innerHTML = `${localUser}`
  
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
const modal = document.querySelector('.modal-overlay');
const title = modal.querySelector('#title');
const description = modal.querySelector('#description');
const imageInput = modal.querySelector('#image');
const addBtn = modal.querySelector('#addBtn');

    addBtn.onclick = async () => {
    const formData = new FormData();
    formData.append("title", title.value);
    formData.append("body", description.value);
    formData.append("image", imageInput.files[0]);
    
    const token = JSON.parse(localStorage.getItem('jwt')) || [];

    
    fetch('http://localhost:7000/blogs/newBlog', {
        headers: {
            "Authorization": `Bearer ${token}`
        },
        method: "POST",
        body: formData
    })
    .then((response) => {
        if(!response.ok) {
            console.log("-------->")
        }
        return response.json()
    })
    .then((data) => {
        window.location.reload() = "./articles.html"
    })
    .catch((error) => {
        console.log(error.message)
    });
};
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

const blogs = document.querySelector('.blogs')
const token = JSON.parse(localStorage.getItem('jwt')) || []
const loader = document.getElementById('loader');

loader.style.display = 'block';
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
    loader.style.display = 'none';
    if(data.blogs.length <= 0 || !data)
    {
        const div = document.createElement('div')
    div.classList.add('noArticles')
    div.innerHTML = `<img src="../image/not_found-removebg-preview.png" title="No results found" alt="No results found">`
    blogs.appendChild(div)
    }

    else{
  for(i = 0; i < data.blogs.length; i++)
  {
    
        const div = document.createElement('div')
        div.classList.add('blog-cards')
        div.innerHTML = `<img class="modal-image" src="${data.blogs[i].image}" alt="">
        <span title='this is blog title' class="blogsTitle">${data.blogs[i].title}</span>
        <p title='this is blog description' class="blog-description">
            ${data.blogs[i].body}
            </p>
            <div class="actions">
                <i title='Edit this blog' class="fa-sharp fa-regular title='hey' fa-pen-to-square"></i>
                <i title='Delete this blog' class="fas fa-trash"></i>
            </div>`
            blogs.appendChild(div)

            
    }
    const cardBlog = document.querySelectorAll('.blog-cards');
for (let j = 0; j < cardBlog.length; j++) {
    const card = cardBlog[j];
    const editButtons = card.querySelectorAll('.fa-pen-to-square');

    for (let i = 0; i < editButtons.length; i++) {
        const edit = editButtons[i];
        edit.addEventListener('click', () => {
            const editOverlay = document.querySelector(".edit-overlay");
            const closeEdit = document.querySelector(".close-edit");

            editOverlay.classList.toggle('open-edit');

            const editContainer = document.querySelector('.edit-container');
const token = JSON.parse(localStorage.getItem('jwt')) || []
fetch('http://localhost:7000/blogs', {
    headers: {
        "Content-Type": "application/json"
    },
    method: "GET"
})
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then(blogData => {
    const div = document.createElement('div');
            editContainer.appendChild(div);
          const blogsTitle = card.querySelector('.blogsTitle')
          const titleEdit = document.querySelector('.title')
          titleEdit.value = `${blogsTitle.textContent}`
          const imageInputEdit = document.querySelector('.image');
          const blogDescription = card.querySelector('.blog-description')
          const descriptionEdit = document.querySelector('.description')
          descriptionEdit.innerHTML = `${blogDescription.textContent}`
          const editBtn = document.querySelector('.button-edit');
          editBtn.addEventListener('click', async () => {
              const formData = new FormData();
              formData.append("title", titleEdit.value);
              formData.append("body", descriptionEdit.value);
              formData.append("image", imageInputEdit.files[0]);
                    const token = JSON.parse(localStorage.getItem('jwt')) || []
                    await fetch(`http://localhost:7000/updateBlogs/${blogData.blogs[j]._id}`, {
                        headers:{
                            "Authorization":`Bearer ${token}`,
                        },
                        method: "PATCH",
                        body: formData
                    }).then((response) => {
                        if(!response.ok) {
                            console.log('------->error')
                        }
                        return response.json()
                    }).then((data) => {
                        console.log(data)
                        window.location.reload() = "./articles.html"
                    }).catch((error) => {
                        console.log(error)
                    })

              }
          );
          closeEdit.addEventListener("click", function () {
          editOverlay.classList.remove("open-edit");
          editContainer.removeChild(div);
          description.textContent = ``
            });
}).catch((error) => {
    console.log(error.message)
})
            
        });
    }
    const deleteButton = card.querySelectorAll('.fa-trash');
    for (let d = 0; d < deleteButton.length; d++) {
        const deleteBtn = deleteButton[d];
        deleteBtn.addEventListener('click', () => {
 fetch('http://localhost:7000/blogs', {
    headers: {
        "Content-Type": "application/json"
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
    console.log(data.blogs[j]._id)
    const token = JSON.parse(localStorage.getItem('jwt')) || []
fetch(`http://localhost:7000/deleteBlog/${data.blogs[j]._id}`, {
    headers: {
        "Authorization": `Bearer ${token}`
    },
    method: "DELETE"
}).then((response) => {
    if(!response.ok){
        throw new Error('--------> Error')
    }
    return response.json()
}).then((items) => {
    console.log(items)
    window.location.reload() = "./articles.html"
}).catch((error) => {
    console.log(error.message)
})
}).catch((error) => {
    console.log(error.message)
})
        });
    }

}
}
})
.catch(error => {
console.error('There was a problem with the fetch operation:', error);
});