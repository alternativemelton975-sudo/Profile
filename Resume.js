document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        themeToggle.textContent = body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
    });

    // Add click event to skills for fun
    const skills = document.querySelectorAll('#skills li');
    skills.forEach(skill => {
        skill.addEventListener('click', function() {
            alert(`You clicked on ${this.textContent}!`);
        });
    });
});

const resume = {
    name: "William",
    contact: {
        email: "Alternativemelton975@gmail.com",
        phone: "(239) 203-8356",
        location: "Labelle, Florida"
    },
    summary: "A passionate software developer with experience in JavaScript and web development.",
    experience: [
        {
            title: "Web Developer",
            duration: "2025 - Present",
            description: "Developed web applications using JavaScript, React, and Node.js."
        }
    ],
    education: [
        {
            certifications: "Web Programming",
            institution: "Fort Myers Technical College",
            year: "2026"
        }
    ],
    skills: ["JavaScript", "Python", "C#", "HTML", "CSS"]
};

console.log(resume);