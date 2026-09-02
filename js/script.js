function triggerGlitch() {
    const glitch = document.querySelector(".glitch-layer");

    const roll = Math.random();
    let barCount;
    if (roll < 0.50) {
        barCount = Math.floor(Math.random() * 2) + 1;
    }
    else if (roll < 0.85) {
        barCount = Math.floor(Math.random() * 2) + 3;
    }
    else {
        barCount = Math.floor(Math.random() * 2) + 5;
    }
    for (let index = 0; index < barCount; index++) {
        const bar = document.createElement("div");
        bar.classList.add("glitch-bar");
        glitch.appendChild(bar);

        console.log("BARRA CRIADA!", bar);



        const barWidth = Math.random() * 60 + 10;
        bar.style.width = `${barWidth}%`;


        const y = Math.random() * 100;
        bar.style.top = `${y}%`;

        const x = Math.random() * 100;
        bar.style.left = `${x}%`;

        const axis = Math.random() < 0.5 ? "x" : "y";
        let displacementX = 0;
        let displacementY = 0;

        bar.style.transform = "translate(0, 0)";

        setTimeout(() => {
            bar.style.transform =
                `translate(${displacementX}px, ${displacementY}px)`;
        }, 15);

        const duration = Math.random() * 200 + 150;

        setTimeout(() => {
            bar.remove();
        }, duration);

    }



    const nextGlitch = Math.random() * 7000 + 3000;
    setTimeout(triggerGlitch, nextGlitch);
}
triggerGlitch();

const skills = {
    programming: [
        "Java",
        "Python",
        "JavaScript",
        "HTML / CSS"
    ],

    database: [
        "SQL",
        "Data Modeling"
    ],

    technologies: [
        "Spring Boot",
        "REST APIs",
        "Git / GitHub"
    ],

    security: [
        "Cybersecurity Fundamentals",
        "Networking Fundamentals",
        "Linux"
    ],

    languages: [
        "Portuguese - Native",
        "English - B2 (upper-intermediate stage, by TOEIC)",
        "Spanish - Basic"
    ],

    soft: [
        "Problem Solving",
        "Logical Thinking",
        "Communication",
        "Teamwork",
        "Continuous Learning"
    ]
}
function renderSkills() {
    const skillCategories = {
        programming: document.getElementById("programming-skills"),
        database: document.getElementById("database-skills"),
        technologies: document.getElementById("technology-skills"),
        security: document.getElementById("security-skills"),
        languages: document.getElementById("language-skills"),
        soft: document.getElementById("soft-skills")
    };
    for (const category in skills) {
        const container = skillCategories[category];

        skills[category].forEach(skill => {
            const skillItem = document.createElement("div");
            skillItem.classList.add("skill-item");
            skillItem.textContent = skill;
            container.appendChild(skillItem);
        });
    }
}
renderSkills();

const projects = [
    {
        name: "ANEMOIA",
        description: "Um site pessoal retrô-futurista criado com HTML, CSS e JavaScript, apresentando efeitos de CRT personalizados, falhas visuais (glitches), elementos interativos e easter eggs.",
        //description: "A retro-futuristic personal website built with HTML, CSS and JavaScript, featuring custom CRT effects, glitches, interactive elements and easter eggs.",
        technologies: ["HTML", "CSS", "JavaScript"],
        type: "PERSONAL PROJECT",
        icon: "assets/images/streamline-pixel---free--32x32-SVG/site-icon.svg",
        github: "https://github.com/KnTrickster/Anemoia_Personal_System"
    },

    {
        name: "CAMPEONATO MUNDIAL DE ESPORTES IMPOSSÍVEIS",
        description: "Projeto de modelagem de banco de dados para uma liga fictícia de esportes não convencionais. Feito com amigos!",
        //description: "Database modeling project for a fictional league of unconventional sports. Made with friends!",
        technologies: ["SQL", "Oracle", "Data Modeling"],
        type: "ACADEMIC PROJECT",
        icon: "assets/images/streamline-pixel---free--32x32-SVG/database-icon.svg",
        github: "https://github.com/KnTrickster/Campeonato-Mundial-de-Esportes-Impossiveis"
    }
]

function renderProjects() {
    const container = document.getElementById("projects-container");

    projects.forEach(project => {
        const card = document.createElement("article");
        card.classList.add("project-card");

        card.innerHTML = `
            <div class= "project-icon">
                <img src= "${project.icon}" alt="">
            </div>

            <div class= "project-content">
                <span class= "project-type">
                    ${project.type}
                </span>
            

                <h3>${project.name}</h3>
                <p>${project.description}</p>

                <div class= "project-technologies">
                    ${project.technologies
                    .map(technology => `<span>${technology}</span>`)
                    .join("")}
                </div>
            
                <a href ="${project.github}" target="_blank">
                        VIEW ON GITHUB!
                </a>
            </div>
        `;
        container.appendChild(card);
    });
}
renderProjects();

const contacts = [
    {
        channel: "EMAIL",
        handle: "ktorquato.ti@gmail.com",
        status: "[ACTIVE]",
        link: "mailto:ktorquato.ti@gmail.com"
    },
    {
        channel: "GITHUB",
        handle: "@kntrickster",
        status: "[ACTIVE]",
        link: "https://github.com/KnTrickster"
    },
    {
        channel: "LINKEDIN",
        handle: "linkedin.com/in/kevin-torquato",
        status: "[ACTIVE]",
        link: "https://www.linkedin.com/in/kevin-torquato-1830a52b7/"
    }
]

function renderContacts() {
    const contactList = document.getElementById("contact-list");

    contactList.innerHTML = "";

    contacts.forEach(contact => {
        const row = document.createElement("div");
        row.classList.add("contact-row");

        row.innerHTML = `
            <span>${contact.channel}</span>
            <a href="${contact.link}" target="_blank" rel="noopener noreferrer">
                ${contact.handle}
            </a>
            <span>${contact.status}</span>
        `;

        contactList.appendChild(row);
    });
}
renderContacts();