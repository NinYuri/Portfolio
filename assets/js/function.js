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