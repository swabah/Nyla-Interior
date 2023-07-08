
let meunIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar');

meunIcon.onclick = () => {
    meunIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}
// scroll section
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a')
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')

        if(top >= offset && top <offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id +']').classList.add('active')


            })
        }
    })
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    meunIcon.classList.remove('bx-x')
    navbar.classList.remove('active')
}





document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        var scroll = window.pageYOffset || document.documentElement.scrollTop;
        var header = document.querySelector(".header");
        if (scroll > 100) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
});
