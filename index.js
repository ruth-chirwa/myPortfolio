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

// Modal for Project Details (optional)
const projects = document.querySelectorAll('.project');
projects.forEach(project => {
    project.addEventListener('click', function() {
        // Create a modal with additional details about the project
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-btn">&times;</span>
                <h2>${this.querySelector('h3').textContent}</h2>
                <p>Here you can add more details about the project...</p>
            </div>
        `;
        document.body.appendChild(modal);

        // Close the modal when the user clicks on the close button
        modal.querySelector('.close-btn').addEventListener('click', () => {
            modal.remove();
        });

        // Close the modal when the user clicks outside the modal
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });
    });
});
