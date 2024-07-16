

const hamburgerIcon = document.querySelector('.icon');
const offScreenMenu = document.querySelector('.menu');
const closeIcon = document.querySelector('.close')
const close = document.getElementById("close")


hamburgerIcon.addEventListener("click",function() {
    close.style.display="inline"
    offScreenMenu.classList.toggle("active");
})

closeIcon.addEventListener("click", function(){
    close.style.display="none"
    offScreenMenu.classList.remove("active")
})