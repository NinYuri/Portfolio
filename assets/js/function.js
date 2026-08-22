document.addEventListener('DOMContentLoaded', function() {
    const loaderContainer = document.querySelector('.loader-container');
    const images = document.querySelectorAll('img');
    const videos = document.querySelectorAll('video');

    // IMAGES
    const imagePromises = Array.from(images).map(img => {
        if(img.complete) return Promise.resolve();
        return new Promise(resolve => {
            img.addEventListener('load', resolve);
            img.addEventListener('error', resolve);
        });
    });

    // VIDEOS
    const videoPromises = Array.from(videos).map(video => {
        if(video.readyState >= 3) return Promise.resolve();   // 3 = HAVE FUTURE DATA
        return new Promise(resolve => {
            video.addEventListener('canplaythrough', resolve);
            video.addEventListener('error', resolve);
        });
    })

    Promise.all([
        new Promise(resolve => window.addEventListener('load', resolve)),
        ...imagePromises,
        ...videoPromises
    ]).then(() => {
        loaderContainer.classList.add("loader-container--hidden");
    });
    
    scrollSpy();
    navButtons();
    navScroll();
    contactModal();
    projectsBtn();
    animateSquares();
    projectOptions();
    projectAbout();
    projectGithub();
    projectDemo();
    awards();
    certifications();
    enableTouchProjects();
    projectResponsive();
    adjustProjectButtons();
});


/* ================================ PROJECT OBJECTS ================================ */
const projectData = {
    posecoach: {
        title: "POSECOACH",
        description: "A full-stack fitness platform featuring an exercise catalog connected through a Django REST API to provide content for a companion mobile app. It integrates OTP verification via SendGrid for email and Vonage for phone numbers.",
        images: [
            "./assets/images/PoseCoach.webp",
            "./assets/images/PC1.webp",
            "./assets/images/PC2.webp",
            "./assets/images/PC3.webp",
            "./assets/images/PC4.webp",
            "./assets/images/PC5.webp"
        ],
        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "Python",
            "Django",
            "Cloudinary",
            "SweetAlert",
            "SendGrid",
            "Vonage",
            "Google Cloud"
        ],
        github: {
            frontend: "https://github.com/NinYuri/PoseCoachWeb.git",
            backend: "https://github.com/NinYuri/PoseCoachExercises.git"
        }
    },
    prenacional: {
        title: "PRENATIONAL",
        description: "A web platform designed to centralize information for the Prenational Sports Event hosted by the Instituto Tecnológico de Jiquilpan, providing access to teams, venues, schedules and results in one place.",
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
    casamia: {
        title: "CASA MIA",
        description: "A responsive restaurant website concept featuring sections for Home, Menu, About Us, Contact and Table Reservation. Its dark color palette with gold accents creates an elegant visual identity while keeping the experience clear and easy to navigate.",
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
    cinema: {
        title: "CINEMA",
        description: "A movie catalog platform connected to a NestJS microservice with Prisma. It displays movies in a paginated interface with poster backgrounds, detailed information cards and dynamic controls for browsing and selection.",
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
        description: "A web application that predicts city names from uploaded images using a Keras image recognition model deployed with Docker. It processes each image through an API and displays the predicted city along with the model's confidence score.",
        images: [
            "./assets/images/Turismo.webp"
        ],
        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "Python",
            "Keras",
            "Docker"
        ],
        github: "https://github.com/NinYuri/Turismo_ML.git"
    },
    stayfashion: {
        title: "STAY FASHION",
        description: "My first web development project, created as an introduction to building interfaces with HTML, CSS and JavaScript. A static beauty studio website featuring sections for Home, About Us, Services and Login, with a visual catalog of stylists and treatments.",
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
    cafendi: {
        title: "CAFENDI",
        description: "A warm and elegant homepage concept for a specialty coffee shop, designed around a clear visual hierarchy and inviting brand identity. The interface brings together product categories, featured drinks, the shop's story, team introduction and customer reviews through a cohesive browsing experience.",
        images: [
            "./assets/images/Cafendi.webp",
            "./assets/images/Cafendi1.webp",
            "./assets/images/Cafendi2.webp",
            "./assets/images/Cafendi3.webp",
            "./assets/images/Cafendi4.webp"
        ],
        technologies: [ "Figma" ],
        github: "https://www.figma.com/proto/2x54qr0EZsmKqRczeUL8fF/Coffe-Shop?node-id=1066-2&starting-point-node-id=1066%3A2&scaling=scale-down-width&content-scaling=fixed&t=fg8e3HHhptMGCcQu-1"
    },
    swim: {
        title: "OGREN",
        description: "A playful homepage concept for a swimming school, designed to present its programs, facilities, team, events and reviews through a clear and approachable experience. The interface combines friendly visual elements with an organized layout to create an engaging identity for students and families.",
        images: [
            "./assets/images/Natacion.webp",
            "./assets/images/Swim1.webp",
            "./assets/images/Swim2.webp",
            "./assets/images/Swim3.webp",
            "./assets/images/Swim4.webp",
            "./assets/images/Swim5.webp",
            "./assets/images/Swim6.webp"
        ],
        technologies: [ "Figma" ],
        github: "https://www.figma.com/proto/xWQSHQs4Bxhi0p8MRLMSDM/Escuela-de-Nataci%C3%B3n?node-id=12-27&starting-point-node-id=12%3A27&scaling=scale-down-width&content-scaling=fixed&t=z4t97BerVPPv9Sfw-1"
    },
    accounting: {
        title: "ACCOUNTING",
        description: "A web platform concept designed to manage clients, properties and legal documentation through structured workflows. The interface organizes complex information into clear, guided forms for creating and managing mutual credit contracts.",
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
        description: "A 2D two-player tank battle set on a lunar base, featuring aiming and shooting mechanics, unlockable special attacks and a dynamic camera that keeps both players in view throughout the match.",
        video: "./assets/images/Tanks.mp4",
        technologies: [
            "Unity",
            "C#"
        ]
    },
    galaga: {
        title: "GALAGA",
        description: "An arcade-style shooter inspired by Galaga, combining classic shooting mechanics with a color-matching challenge. Players must adapt their ship's color to incoming stars while navigating dynamic color changes and a switchable 3D perspective.",
        video: "./assets/images/Galaga.mp4",
        technologies: [
            "Unity",
            "C#"
        ]
    },
    solfran: {
        title: "SOLFRAN MANAGER",
        description: "A Java desktop management system developed for Solfrán Labs, featuring role-based access, CRUD operations and MySQL database integration. It includes dedicated modules for managing users, inventory and other core laboratory operations.",
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
            "NetBeans"
        ],
        github: "https://github.com/NinYuri/Lab_Solfran.git"
    },
    netbeans: {
        title: "STAY FASHION",
        description: "A Java desktop appointment system for a beauty studio, allowing users to register, browse available services and schedule multiple appointments. Booking details, including selected dates and payment methods, are stored and managed through a MySQL database.",
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
            "NetBeans"
        ],
        github: "https://github.com/NinYuri/TopicProject.git"
    },
    compLL: {
        title: "LL COMPILER",
        description: "A Java-based LL compiler with an integrated code editor that performs lexical and syntactic analysis. It identifies compilation errors and provides detailed feedback, including the error type, line number and description.",
        images: [
            "./assets/images/LL1.webp",
            "./assets/images/LL2.webp",
            "./assets/images/LL3.webp"
        ],
        technologies: [
            "NetBeans",
            "Java"
        ],
        github: "https://github.com/NinYuri/Compilador.git"
    },
    compLR: {
        title: "LR COMPILER",
        description: "A Java-based LR compiler that analyzes source code and generates intermediate C code from the user's input. The generated output can be executed in standard C compilers.",
        images: [
            "./assets/images/LR1.webp",
            "./assets/images/CompiladorLR.webp",
            "./assets/images/LR3.webp"
        ],
        technologies: [
            "NetBeans",
            "Java"
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

    /* CLOSE MENU */
    const closeMenu = () => {
        navbarToggle.classList.remove('active');
        navbarMenu.classList.remove('active');
    }

    /* TOGGLE MENU */
    navbarToggle.addEventListener('click', (e) => {
        e.stopPropagation();

        navbarToggle.classList.toggle('active');
        navbarMenu.classList.toggle('active');
    });

    /* NAV LINKS */
    navElements.forEach(link => {
        link.addEventListener('click', () => {
            // Cerrar al seleccionar opción
            closeMenu();
            
            // No hacer nada si es Contact
            if(link.parentElement.classList.contains('contact')) return;

            navElements.forEach(el => {
                if(!el.parentElement.classList.contains('contact'))
                    el.classList.remove('active');
            });

            link.classList.add('active');
        });
    });

    /* CLICK OUTSIDE */
    document.addEventListener('click', (e) => {
        if(!navbarMenu.contains(e.target) && !navbarToggle.contains(e.target))
            closeMenu();
    });
}

// SCROLL
function navScroll() {
    let lastScrollY = window.scrollY;

    const navbar = document.querySelector('.navbar');
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbarMenu = document.querySelector('.navbar-menu');

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        navbarToggle.classList.remove('active');
        navbarMenu.classList.remove('active');

        if(currentScrollY <= 80) 
            navbar.classList.remove('hide');
        else if(currentScrollY > lastScrollY) 
            navbar.classList.add('hide');
        else
            navbar.classList.remove('hide');

        lastScrollY = currentScrollY;
    });
}

// CONTACT MODAL
function contactModal() {
    const btnContact = document.querySelector('.button.button-contact');
    const modal = document.querySelector('.contact-modal');
    const btnModal = modal.querySelector('label[for="btn-modal"]');

    btnContact.addEventListener('click', () => {
        modal.classList.add('active');
    });

    btnModal.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    modal.addEventListener('click', (e) => {
        if(e.target === modal)
            modal.classList.remove('active');
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


/* ================================== SCROLL SEPARATOR ================================== */
function animateSquares() {
    const bottomSections = document.querySelectorAll(".bottom-section");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                const section = entry.target;
                const leftSquares = section.querySelector(".left-squares");
                const rightSquares = section.querySelector(".right-squares");

                if (entry.isIntersecting) {
                    leftSquares?.classList.remove("scroll");
                    rightSquares?.classList.remove("scroll");
                } else {
                    leftSquares?.classList.add("scroll");
                    rightSquares?.classList.add("scroll");
                }
            });
        },
        {
            threshold: 0.9, // Activa cuando el 90% del elemento es visible
        }
    );

    bottomSections.forEach((section) => observer.observe(section));
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
            if(option === 'web development') target = document.querySelector('.projects-container.web');
            if(option === 'ui/ux design') target = document.querySelector('.projects-container.design');
            if(option === 'unity games') target = document.querySelector('.projects-container.unity');
            if(option === 'java projects') target = document.querySelector('.projects-container.java');

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


/* ========================= EXPERIENCE BUTTONS ========================= */
function awards() {
    const psa = document.querySelector('.button.psa');
    const biblioFront = document.querySelector('.button.biblio.front');
    const biblioBack = document.querySelector('.button.biblio.back');
    const stay = document.querySelector('.button.stay');
    const congress = document.querySelector('.button.congress');

    psa.addEventListener('click', (e) => {
        e.preventDefault();
        window.open('https://drive.google.com/file/d/17np6jTZG5yyPyfRHjwkgjudIDAYv58Fq/view?usp=sharing', '_blank');
    });

    biblioFront.addEventListener('click', (e) => {
        e.preventDefault();
        window.open('https://github.com/NinYuri/QR_Project.git');
    });

    biblioBack.addEventListener('click', (e) => {
        e.preventDefault();
        window.open('https://github.com/NinYuri/QR_ProjectNode.git');
    });

    stay.addEventListener('click', (e) => {
        e.preventDefault();
        window.open('https://drive.google.com/file/d/1XMjfK2Fqe3oRKHFFTp3dtFiaYu2Pw4iu/view?usp=sharing', '_blank');
    });

    congress.addEventListener('click', (e) => {
        e.preventDefault();
        window.open('https://drive.google.com/file/d/1zF4WjrY0XHnfjvlHu8brsuMvkTYXpGYn/view?usp=sharing', '_blank');
    })
}


/* ========================= CERTIFICATIONS BUTTONS ========================= */
function certifications() {
    const english = document.querySelector('.button.stay.english');
    const github = document.querySelector('.button.stay.github');
    const scrum = document.querySelector('.button.stay.scrum');
    const python = document.querySelector('.button.stay.python');
    const html = document.querySelector('.button.stay.html');

    english.addEventListener('click', (e) => {
        e.preventDefault();
        window.open('https://drive.google.com/file/d/1DRGcy_NIwxzHQa3Fm49JLp-jYBkmbIJx/view?usp=sharing');
    });

    github.addEventListener('click', (e) => {
        e.preventDefault();
        window.open('https://drive.google.com/file/d/12mHSVEo41yN2i-Si7uevBLbMEyDFT2Jf/view?usp=sharing');
    });

    scrum.addEventListener('click', (e) => {
        e.preventDefault();
        window.open('https://drive.google.com/file/d/1nf-dkL4ikSMpZpaC_Es8NZvfTdXO5qYu/view?usp=sharing');
    });

    python.addEventListener('click', (e) => {
        e.preventDefault();
        window.open('https://drive.google.com/file/d/1zeEKOM5pjswG9JcXY6QkUSGESelhevCK/view?usp=sharing');
    });

    html.addEventListener('click', (e) => {
        e.preventDefault();
        window.open('https://drive.google.com/file/d/1ro0TWeG9b8iDcwIcttsF8sQrMZ1Aue2Z/view?usp=sharing');
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
        video.playsInline = true;
        video.setAttribute('webkit-playsinline', '');
        video.style.width = "100%";
        video.loading = "lazy";
        video.preload = "auto";

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
            img.loading = "lazy";
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
        "C#": "CSharp",
        "NetBeans": "Netbeans",
        "Google Cloud": "GoogleCloud"
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