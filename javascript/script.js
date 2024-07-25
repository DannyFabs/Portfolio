

const hamburgerIcon = document.querySelector('.icon');
const offScreenMenu = document.querySelector('.menu');

const pageLinks = document.querySelectorAll('.menu--item');

const sectionHeaders = document.querySelectorAll('.aboutsection--header')


const closeIcon = document.querySelector('.close')
const close = document.getElementById("close")

sectionHeaders.forEach(header => {
    header.addEventListener('click', function(){
        sectionHeaders.forEach(header=> header.classList.remove('active'))
        this.classList.toggle('active')

        const targetId = this.getAttribute('data-target')
        const targetContent = document.getElementById(targetId)

        document.querySelectorAll('.section--content').forEach(section=>{
            section.classList.remove('active')
        })
        
        if(targetContent){
            targetContent.classList.add('active')
        }
    })
})

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