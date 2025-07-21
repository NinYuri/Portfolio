document.addEventListener('DOMContentLoaded', () => {
    scrollSpy();
    navButtons();
    navScroll();
    projectsBtn();
    projectOptions();
    projectAbout();
    projectGithub();
    projectDemo();
    enableTouchProjects();
    projectResponsive();
    adjustProjectButtons();
});


/* ================================ PROJECT OBJECTS ================================ */
const projectData = {
    prenacional: {
        title: "PRENATIONAL",
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
        description: "A static website designed for an elegant beauty studio, using warm colors and pastel pinks over a clean white base. It includes sections like Home, About Us, Services and Login — highlighting the salon's philosophy, stylists, and a visual catalog of treatments.",
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
            "JavaScript",
            "SweetAlert"
        ],
        github: "https://github.com/NinYuri/StayFashion.git",
        demo: "https://ninyuri.github.io/StayFashion/"
    },
    cinema: {
        title: "CINEMA",
        description: "A sleek movie catalog connected to a NestJS microservice with Prisma. It displays 10 movies per page with poster backgrounds and detailed info cards, plus dynamic controls for browsing and selection.",
        images: [
            "./assets/images/Cinema.webp",
            "./assets/images/Cin1.webp",
            "./assets/images/Cin2.webp",
            "./assets/images/Cin3.webp",
            "./assets/images/Cin4.webp"
        ],
        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "TypeScript",
            "Node.js",
            "NestJS",
            "Prisma"
        ],
        github: {
            frontend: "https://github.com/Nest-Microservice-7mo/Cine_frontend.git",
            backend: "https://github.com/Nest-Microservice-7mo/Cine_microservice.git"
        }
    },
    tourism: {
        title: "TOURISM",
        description: "A vintage-themed web app that predicts city names from uploaded photos using a Keras model hosted in Docker. The system displays the prediction and confidence with smooth UI and alert handling.",
        images: [
            "./assets/images/Turismo.webp"
        ],
        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "SweetAlert",
            "API",
            "Docker",
            "Python",
            "Keras"
        ],
        github: "https://github.com/NinYuri/Turismo_ML.git"
    },
    cafendi: {
        title: "CAFENDI",
        description: "A warm and elegant homepage concept for a specialty in coffee shop. The layout blends soft cream tones and browns, accented with coffee beans and vintage typography. It highlights product categories, a featured frappe, the shop's story, chef intro, and customer reviews.",
        images: [
            "./assets/images/Cafendi.webp",
            "./assets/images/Cafendi1.webp",
            "./assets/images/Cafendi2.webp",
            "./assets/images/Cafendi3.webp",
            "./assets/images/Cafendi4.webp"
        ],
        technologies: [
            "Figma"
        ],
        github: "https://www.figma.com/proto/2x54qr0EZsmKqRczeUL8fF/Coffe-Shop?node-id=1066-2&starting-point-node-id=1066%3A2&scaling=scale-down-width&content-scaling=fixed&t=fg8e3HHhptMGCcQu-1"
    },
    swim: {
        title: "OGREN",
        description: "A homepage and about us concept for a swimming school, designed in soft blues with playful bubble accents. It highlights programs, facilities, team, events and reviews, using rounded visuals and outlined typography for a clean, lighthearted feel.",
        images: [
            "./assets/images/Natacion.webp",
            "./assets/images/Swim1.webp",
            "./assets/images/Swim2.webp",
            "./assets/images/Swim3.webp",
            "./assets/images/Swim4.webp",
            "./assets/images/Swim5.webp",
            "./assets/images/Swim6.webp"
        ],
        technologies: [
            "Figma"
        ],
        github: "https://www.figma.com/proto/xWQSHQs4Bxhi0p8MRLMSDM/Escuela-de-Nataci%C3%B3n?node-id=12-27&starting-point-node-id=12%3A27&scaling=scale-down-width&content-scaling=fixed&t=z4t97BerVPPv9Sfw-1"
    },
    accounting: {
        title: "ACCOUNTING",
        description: "A design concept for an accounting web platform to manage clients, properties, and legal documents. Built with an earthy green and mustard palette, the interface guides users through structured forms for mutual credit contracts.",
        images: [
            "./assets/images/Contador.webp",
            "./assets/images/Cont1.webp",
            "./assets/images/Cont2.webp"
        ],
        technologies: [
            "Figma"
        ],
        github: "https://www.figma.com/proto/R8o81db3Pxa1JMwu2gBOpy/Contadur%C3%ADa?node-id=275-24&starting-point-node-id=275%3A24&t=kMvbpnMIuCFmphQC-1"
    },
    tanks: {
        title: "TANK BATTLE",
        description: "A 2D two-player tank battle set in a lunar base. Each player controls a tank using opposite sides of the keyboard, aiming and firing with distinct directional guides. After five shots, a powerful special attack becomes available. The camera dynamically adjusts to keep both players in view, ensuring a competitive and immersive experience.",
        video: "./assets/images/Tanks.mp4",
        technologies: [
            "Unity",
            "C#"
        ]
    },
    galaga: {
        title: "GALAGA",
        description: "An arcade-style shooter inspired by Galaga, where players must match their ship's color to falling stars. Hitting the wrong color — or missing any star — ends the game. Includes dynamic color changes and a switchable 3D perspective view for added challenge and depth.",
        video: "./assets/images/Galaga.mp4",
        technologies: [
            "Unity",
            "C#"
        ]
    },
    solfran: {
        title: "SOLFRAN MANAGER",
        description: "A java desktop app built in NetBeans for Solfrán Labs. It features role-based access, real-time CRUD operations and a MySQL database connection. The interface uses magenta and blue tones for clarity and structure, with a clean side menu and modules like User Management and Inventory.",
        images: [            
            "./assets/images/Solf1.webp",
            "./assets/images/Solf2.webp",
            "./assets/images/Solf3.webp",
            "./assets/images/Solf4.webp",
            "./assets/images/Solf5.webp",
            "./assets/images/Solf6.webp",
            "./assets/images/Solf7.webp",
            "./assets/images/Solf8.webp"
        ],
        technologies: [
            "Java",
            "MySQL",
            "Git",
            "NetBeans"
        ],
        github: "https://github.com/NinYuri/Lab_Solfran.git"
    },
    netbeans: {
        title: "STAY FASHION",
        description: "A pastel-themed beauty appointment system built with Java and MySQL. Users can register, browse services like nails and makeup, and schedule multiple appointments. Booking details are saved directly to the database after choosing the date and payment method.",
        images: [
            "./assets/images/Fashion.webp",
            "./assets/images/Fas1.webp",
            "./assets/images/Fas2.webp",
            "./assets/images/Fas3.webp",
            "./assets/images/Fas4.webp",
            "./assets/images/Fas5.webp",
            "./assets/images/Fas6.webp",
            "./assets/images/Fas7.webp",
        ],
        technologies: [
            "Java",
            "MySQL",
            "Git",
            "NetBeans"
        ],
        github: "https://github.com/NinYuri/TopicProject.git"
    },
    compLL: {
        title: "LL COMPILER",
        description: "A custom LL compiler with a dark-themed UI. Includes buttons like New, Save, Open, and Compile. The Compile function runs lexical (with Lexer) and syntactic analysis. Errors — if any — are shown below with their type, line number, and explanation.",
        images: [
            "./assets/images/LL1.webp",
            "./assets/images/LL2.webp",
            "./assets/images/LL3.webp"
        ],
        technologies: [
            "NetBeans",
            "Java",
            "ExcelJS",
            "Lexer"
        ],
        github: "https://github.com/NinYuri/Compilador.git"
    },
    compLR: {
        title: "LR COMPILER",
        description: "An improved LR compiler with a sleeker dark-gray UI. Includes all basic functions plus “Save As” and a new pane for intermediate code in C, generated from the user’s input. This code runs correctly in standard C compilers online.",
        images: [
            "./assets/images/LR1.webp",
            "./assets/images/CompiladorLR.webp",
            "./assets/images/LR3.webp"
        ],
        technologies: [
            "NetBeans",
            "Java",
            "ExcelJS",
            "Lexer"
        ],
        github: "https://github.com/NinYuri/Compilador_LR.git"
    }
};

/* ================================ SCROLLSPY ================================ */
function scrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-menu a');

    function activateMenuOnScroll() {
        let scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 90;
            const sectionId = current.getAttribute('id');

            if(scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if(link.getAttribute('href') === `#${sectionId}`)
                        link.classList.add('active');
                });
            }
        });
    }

    window.addEventListener('scroll', activateMenuOnScroll);
}

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

/* ================================ PROJECTS ================================ */
// RESPONSIVE
function projectResponsive() {
    document.querySelectorAll('.touch-project').forEach(project => {
        project.addEventListener('click', () => {
            project.classList.toggle('touched');
        });
    });
}

function enableTouchProjects() {
    if(window.innerWidth <= 1200) {
        document.querySelectorAll('.project').forEach(project => {
            project.classList.add('touch-project');
        });
    }
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

// RESPONSIVE
function adjustProjectButtons() {
    document.querySelectorAll('.project-buttons').forEach(container => {
        const buttons = container.querySelectorAll('button');
        if(buttons.length > 2)
            container.classList.add('wrap-3');
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

    if(project.video) {
        // Video
        const video = document.createElement('video');
        video.src = project.video;
        video.controls = true;
        video.autoplay = true;
        video.loop = true;
        video.muted = true;
        video.style.width = "100%";

        imgContainer.appendChild(video);
    } else {
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
    }

    // Technologies
    const techContainer = document.querySelector('.modal-content .technologies');
    techContainer.innerHTML = '';

    // Safe names
    const techMap = {
        "Node.js": "Nodejs",
        "C#": "CSharp"
    };

    project.technologies.forEach(tech => {
        const btn = document.createElement('button');
        btn.classList.add('tech');

        const safeTech = techMap[tech] || tech;

        const img = document.createElement('img');
        img.src = `./assets/images/${safeTech}.webp`;
        img.alt = tech;
        img.classList.add(safeTech.toLowerCase());

        btn.appendChild(img);
        btn.append(tech);
        techContainer.appendChild(btn);
    });

    if(!project.video)
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