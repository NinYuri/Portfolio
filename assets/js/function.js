document.addEventListener('DOMContentLoaded', () => {
    navButtons();
    navScroll();
    projectsBtn();
    projectOptions();
    projectAbout();
    projectGithub();
    projectDemo();
});


/* ================================ PROJECT OBJECTS ================================ */
const projectData = {
    prenacional: {
        title: "PRENATIONAL SPORTS EVENT",
        description: "An informative and user-friendly web platform designed to centralize details for the Prenational Sports Event hosted by the Instituto Tecnológico de Jiquilpan — including teams, venues, schedules, and results.",
        images: [
            "./assets/images/Prenacional.webp",
            "./assets/images/Pre1.webp",
            "./assets/images/Pre2.webp",
            "./assets/images/Pre3.webp",
            "./assets/images/Pre4.webp",
            "./assets/images/Pre5.webp",
            "./assets/images/Pre6.webp"
        ],
        technologies: [
            "HTML", 
            "CSS", 
            "JavaScript", 
            "TypeScript", 
            "Node.js", 
            "Prisma", 
            "Docker", 
            "PostgreSQL"
        ],
        github: "https://github.com/NinYuri/Proyecto_Prenacional.git"
    },
    bibliopass: {
        title: "BIBLIOPASS",
        description: "A web-based platform that automates library check-ins by scanning student QR codes, scraping data from Mindbox, and instantly recording their academic data, date, time and service consulted in an Excel report.",
        images: [
            "./assets/images/QR1.webp",
            "./assets/images/QR.webp"            
        ],
        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "Node.js",
            "Puppeteer",
            "ExcelJS"
        ],
        github: {
            frontend: "https://github.com/NinYuri/QR_Project.git",
            backend: "https://github.com/NinYuri/QR_ProjectNode.git"
        }
    },
    casamia: {
        title: "CASA MIA",
        description: "A refined and responsive restaurant website concept with a sleek, sophisticated design. It includes sections like Home, Menu, About Us, Contact, and Table Reservation — all wrapped in a dark palette with gold accents to evoke a luxurious and welcoming dining atmosphere.",
        images: [
            "./assets/images/Restaurant.webp",
            "./assets/images/CM1.webp",
            "./assets/images/CM2.webp",
            "./assets/images/CM3.webp",
            "./assets/images/CM4.webp",
            "./assets/images/CM5.webp"
        ],
        technologies: [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        github: "https://github.com/NinYuri/Restaurante_web.git",
        demo: "https://ninyuri.github.io/Restaurante_web/"
    },
    stayfashion: {
        title: "STAY FASHION",
        description: "",
        images: [
            "./assets/images/Stay_Fashion.webp",
            "./assets/images/SF1.webp",
            "./assets/images/SF2.webp",
            "./assets/images/SF3.webp",
            "./assets/images/SF4.webp",
            "./assets/images/SF5.webp"
        ],
        technologies: [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        github: "https://github.com/NinYuri/StayFashion.git",
        demo: "https://ninyuri.github.io/StayFashion/"
    },
    cinema: {

    }
};

/* ================================ NAVBAR ================================ */
// BUTTONS
function navButtons() {
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
}

// SCROLL
function navScroll() {
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
}

/* ===================================== HOME ===================================== */
function projectsBtn() {
    const seeProjects = document.querySelector('.button.view-projects');

    seeProjects.addEventListener('click', (e) => {
        e.preventDefault();

        const projectsSection = document.querySelector('.projects');
        projectsSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
}

/* ================================ PROJECTS OPTIONS ================================ */
function projectOptions() {
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
            if(option === 'web pages') target = document.querySelector('.projects-container.web');
            if(option === 'web designs') target = document.querySelector('.projects-container.design');
            if(option === 'unity games') target = document.querySelector('.projects-container.unity');
            if(option === 'java apps') target = document.querySelector('.projects-container.java');

            if(target) target.classList.add('active');
        });
    });
}

/* ================================ PROJECT BUTTONS ================================ */
// ABOUT
function projectAbout() {
    const aboutButton = document.querySelectorAll('.project-option.about');
    const modal = document.querySelector('.modal');
    const btnModal = document.querySelector('label[for="btn-modal"]');

    btnModal.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    aboutButton.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();

            const projectId = button.dataset.project;
            const project = projectData[projectId];

            if(!project) return;

            modal.classList.add('active');
            fillModalContent(project);
        });
    });

    modal.addEventListener('click', (e) => {
        if(e.target === modal)
            modal.classList.remove('active');
    });
}

// GITHUB
function projectGithub() {
    const githubBtn = document.querySelectorAll('.project-option.code');

    githubBtn.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();

            const projectId = button.dataset.project;
            const codeType = button.dataset.type;
            const project = projectData[projectId];

            if(!project) return;

            if(!codeType) {
                if(project && project.github)
                    window.open(project.github, '_blank');
            } else {
                if(project && project.github && project.github[codeType])
                    window.open(project.github[codeType], '_blank');
            }
        });
    });
}

// LIVE DEMO
function projectDemo() {
    const demoBtn = document.querySelectorAll('.project-option.demo');

    demoBtn.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();

            const projectId = button.dataset.project;
            const project = projectData[projectId];

            if(!project) return;

            if(project && project.demo)
                window.open(project.demo, '_blank');
        });
    });
}

/* ================================ FILL MODAL ================================ */
function fillModalContent(project) {
    // Title and Description
    document.querySelector('.modal-content h3').textContent = project.title;
    document.querySelector('.modal-content p').textContent = project.description;

    // Images
    const imgContainer = document.querySelector('.modal-img');
    const sliderDots = document.querySelector('.modal-slider');

    imgContainer.innerHTML = '';
    sliderDots.innerHTML = '';

    sliderDots.innerHTML = `
        <a href="" id="prevBtn"><i class="fa-solid fa-angle-left"></i></a>
    `;

    project.images.forEach((src, index) => {
        // Image
        const img = document.createElement('img');
        img.src = src;
        img.alt = project.title;
        img.id = `slide${index + 1}`;
        imgContainer.appendChild(img);

        // Dots
        const dot = document.createElement('a');
        dot.href = "";
        dot.className = 'img-slider' + (index === 0 ? ' active' : '');
        dot.dataset.project = index + 1;
        dot.dataset.target = `slide${index + 1}`;
        sliderDots.appendChild(dot);
    });
    
    sliderDots.innerHTML += `
        <a href="" id="nextBtn"><i class="fa-solid fa-angle-right"></i></a>
    `;

    // Technologies
    const techContainer = document.querySelector('.modal-content .technologies');
    techContainer.innerHTML = '';

    project.technologies.forEach(tech => {
        const btn = document.createElement('button');
        btn.classList.add('tech');

        const img = document.createElement('img');
        img.src = `./assets/images/${tech}.webp`;
        img.alt = tech;
        img.classList.add(tech.toLowerCase());

        btn.appendChild(img);
        btn.append(tech);
        techContainer.appendChild(btn);
    });

    modalSlider();
}

/* ========================= MODAL SLIDER ========================= */
function modalSlider() {
    const slides = document.querySelectorAll('.modal-img img');
    const dots = document.querySelectorAll('.img-slider');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;
    let autoSlide;

    // Actualizar slides
    function updateSlider(index) {
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(-${index * 100}%)`;
        });

        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
        currentIndex = index;
    }

    // Reiniciar autoPlay
    function resetAutoSlide() {
        clearInterval(autoSlide);
        autoSlide = setInterval(() => {
            currentIndex = (currentIndex + 1) % slides.length;
            updateSlider(currentIndex);
        }, 1500);
    }

    // Eventos de botones
    nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider(currentIndex);
        resetAutoSlide();
    });

    prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlider(currentIndex);
        resetAutoSlide();
    })

    dots.forEach((dot, index) => {
        dot.addEventListener('click', (e) => {
            e.preventDefault();
            updateSlider(index);
            resetAutoSlide();
        });
    });

    // AutoPlay inicial
    autoSlide = setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider(currentIndex);
    }, 1500);

    // Pausar autoPlay al pasar el mouse
    document.querySelector('.modal-img').addEventListener('mouseenter', () => {
        clearInterval(autoSlide);
    });

    // Reanudar autoPlay al salir el mouse
    document.querySelector('.modal-img').addEventListener('mouseleave', () => {
       resetAutoSlide();
    });

    updateSlider(0);
}