//sidebar
const menuItems = document.querySelectorAll('.menu-item');
const messagesNotification = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');
const offers = document.querySelector('#offers')


const selectImage = document.querySelector('.img-area');
const inputFile = document.querySelector('#file');
const imgArea = document.querySelector('.img-area');

//remove active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}
 

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        
        if (item.id != 'notifications') {
            document.querySelector('.notifications-popup').style.display = 'none';
        } else {
            document.querySelector('.notifications-popup').style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display='none';
        }
    })
})


const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(chat => {
        let name=chat.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            chat.style.display = 'flex';
        } else{
            chat.style.display = 'none';
        }
    })
}

messageSearch.addEventListener('keyup', searchMessage);


messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
})

const offerSection = document.querySelector("#offer_section")
offers.addEventListener('click', () => {
    offerSection.style.boxShadow = '0 0 1rem var(--color-primary)';
    setTimeout(() => {
        offerSection.style.boxShadow = 'none';
    }, 2000);
})


const containerPost = document.querySelector(".containerPost"),
      privacy = containerPost.querySelector(".post .privacy"),
      arrowBack = containerPost.querySelector(".audience .arrow-back");

      privacy.addEventListener("click", () => {
        containerPost.classList.add("active");
      });

      arrowBack.addEventListener("click", () => {
        containerPost.classList.remove("active");
      });

document.querySelector('#create-post').addEventListener('click', ()=>{
    containerPost.showModal();
})



document.querySelector('#AddImages').addEventListener('click',()=>{
    document.querySelector('.addImageArea').style.display = 'block'
    document.querySelector('.theme-emoji').style.display = 'none'
    document.querySelector('.options').style.display = 'none'
})

selectImage.addEventListener('click', function () {
    inputFile.click();
})
let imageUrl
inputFile.addEventListener('change', function () {
    const image = this.files[0]
    if (image.size < 2000000) {
        const reader = new FileReader();
        reader.onload = () => {
            const allImg = imgArea.querySelectorAll('img');
            allImg.forEach(item => item.remove());
            imgUrl = reader.result;
            var img = document.createElement('img');
            img.src = imgUrl;
            imgArea.appendChild(img);
            imgArea.classList.add('active');
            imgArea.dataset.img = image.name;
        }
        reader.readAsDataURL(image);
    } else {
        alert("Image size more than 2MB");
    }
})

document.querySelector('.postBtn').addEventListener('click', () => {
    containerPost.close();
    let stringToAdd = `
    <div class="feed">
                        <div class="head">

                        </div>
                        <div class="user">
                            <div class="profile-pic">
                                <img src="../images/profiles/Me.jpg" alt="">
                            </div>
                            <div class="info">
                                <h3>Shishir Bhusal</h3>
                                <small>Gulmi, Just Now</small>
                            </div>
                            <SPAN class="edit"><i class="uil uil-ellipsis-h"></i></SPAN>
                        </div>

                        <div class="photo">
                            <img src= "../images/story_post/js.jpg" alt="">
                        </div>

                        <div class="action-button">
                            <div class="interaction-button">
                                <span><i class="uil uil-thumbs-up"></i></span>
                                <span><i class="uil uil-comment"></i></span>
                                <span><i class="uil uil-share"></i></span>
                            </div>
                            <div class="bookmark">
                                <span><i class="uil uil-bookmark"></i></span>
                            </div>
                        </div>

                        <div class="caption">
                            <p><b>Shishir Bhusal </b>${document.querySelector('.getCaption').value}
                            </p>
                        </div>
                        <div class="comments text-muted">No comments are available!!</div>
                    </div>
    `
    const feeds =  document.querySelector('.feeds')
    feeds.insertAdjacentHTML("afterbegin",stringToAdd)
})



