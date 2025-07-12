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
        projects.forEach(btn => btn.classList.remove('active'));

        button.classList.add('active');
        option = button.textContent.trim().toLowerCase();
        
        options.forEach(container => {
            container.classList.remove('active');
        });

        let target;
        if(option === 'all') target = document.querySelector('.projects-container.all');
        if(option === 'web pages') target = document.querySelector('.projects-container.web');
        if(option === 'web designs') target = document.querySelector('.projects-container.design');
        if(option === 'unity games') target = document.querySelector('.projects-container.unity');
        if(option === 'java apps') target = document.querySelector('.projects-container.java');

        if(target) target.classList.add('active');
    });
});

/* ================== PROJECT ABOUT ================== */
const aboutButton = document.querySelectorAll('.project-option.about');
const modal = document.querySelector('.modal');
const btnModal = document.querySelector('label[for="btn-modal"]');

btnModal.addEventListener('click', () => {
    modal.classList.remove('active');
});

aboutButton.forEach(button => {
    button.addEventListener('click', () => {
        modal.classList.add('active');
    });
});

modal.addEventListener('click', (e) => {
    if(e.target === modal)
        modal.classList.remove('active');
});