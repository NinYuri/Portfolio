/* ================== CONTACT BUTTON ================== */
const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');
const navElements = document.querySelectorAll('.navbar-menu li a');

navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
});

navElements.forEach(link => {
    link.addEventListener('click', () => {
        // No hacer nada si es el botón de Contact
        if(link.parentElement.classList.contains('contact')) return;

        navElements.forEach(el => {
            if(!el.parentElement.classList.contains('contact'))
                el.classList.remove('active');
        });

        link.classList.add('active');
    });
});

/* ================== NAVBAR SCROLL ================== */
let lastScrollY = window.scrollY;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if(currentScrollY > lastScrollY) 
        navbar.classList.add('hide');
    else
        navbar.classList.remove('hide');

    lastScrollY = currentScrollY;
});

/* ================== PROJECTS BUTTONS ================== */
const projects = document.querySelectorAll('.options-container .option');
const options = document.querySelectorAll('.projects-container');
let option;

projects.forEach(button => {
    button.addEventListener('click', () => {
        projects.forEach(btn => {
            btn.classList.remove('active');
        });

        button.classList.add('active');
        option = button.textContent.trim().toLowerCase();
        
        options.forEach(container => {
            container.classList.remove('active');
        });

        if(option === 'all')
            document.querySelector('.projects-container.all').classList.add('active');
        if(option === 'web pages')
            document.querySelector('.projects-container.web').classList.add('active');
        if(option === 'web designs')
            document.querySelector('.projects-container.design').classList.add('active');
        if(option === 'unity games')
            document.querySelector('.projects-container.unity').classList.add('active');
        if(option === 'java apps')
            document.querySelector('.projects-container.java').classList.add('active');
    });
});

