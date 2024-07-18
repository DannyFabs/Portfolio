

const hamburgerIcon = document.querySelector('.icon');
const offScreenMenu = document.querySelector('.menu');

const pageLinks = document.querySelectorAll('.menu--item');

const closeIcon = document.querySelector('.close')
const close = document.getElementById("close")

pageLinks.forEach(link => {
    link.addEventListener('click', function() {
        pageLinks.forEach(link => link.classList.remove('active'));
        this.classList.toggle('active')
        offScreenMenu.classList.remove('active')
        close.style.display="none"
    })
});

hamburgerIcon.addEventListener("click",function() {
    close.style.display="inline"
    offScreenMenu.classList.toggle("active");
})

closeIcon.addEventListener("click", function(){
    close.style.display="none"
    offScreenMenu.classList.remove("active")
})