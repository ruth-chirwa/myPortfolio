// JavaScript to toggle the menu visibility on small screens
function toggleMenu() {
    const navClass = document.querySelector('.nav-class');
    navClass.classList.toggle('active'); // Toggle the 'active' class to show/hide the menu
}

// Close the menu when a menu item is clicked
const menuLinks = document.querySelectorAll('.nav-class ul li a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        const navClass = document.querySelector('.nav-class');
        navClass.classList.remove('active'); // Remove the 'active' class to hide the menu
    });
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});



let projectCount = 4; // Start with the initial number of projects

// Define the array of projects to dynamically load
const projects = [
    {
        title: 'Project Title 6',
        description: 'A brief description of Project 4.',
        image: 'img/pexels-divinetechygirl-1181278.jpg'
    },
    {
        title: 'Project Title 7',
        description: 'A brief description of Project 5.',
        image: 'img/pexels-mentatdgt-1714201.jpg'
    },
    {
        title: 'Project Title 8',
        description: 'A brief description of Project 6.',
        image: 'img/pexels-igor-ovsyannykov-2433009.jpg'
    }
];

// Function to dynamically load more projects
function loadMoreProjects() {
    const container = document.getElementById('project-container');
    
    // Load the next 3 projects
    for (let i = projectCount; i < projectCount + 3; i++) {
        if (i < projects.length) {
            const project = projects[i];
            const newProjectDiv = document.createElement('div');
            newProjectDiv.classList.add('project');
            newProjectDiv.innerHTML = `
                <img src="${project.image}" alt="${project.title}" loading="lazy">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
            `;
            container.appendChild(newProjectDiv);
        }
    }

    projectCount += 3; // Update the project count
    if (projectCount >= projects.length) {
        // Disable the button if all projects have been loaded
        document.getElementById('load-more-btn').disabled = true;
        document.getElementById('load-more-btn').textContent = 'No More Projects';
    }
}

