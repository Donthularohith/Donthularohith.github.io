// Toggle Menu
function toggleMenu() {
    const menuLinks = document.querySelector('.menu-links');
    menuLinks.classList.toggle('active');
}

// Scroll to Section
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    if (window.innerWidth <= 768) {
        toggleMenu();
    }
}

// Toggle Experience Details
function toggleDetails(element) {
    element.classList.toggle('active');
}

// Modal Functions
function openModal(projectId) {
    const modal = document.getElementById('modal');
    const details = document.querySelectorAll('.modal-details');
    details.forEach(detail => detail.style.display = 'none');
    document.getElementById(projectId).style.display = 'block';
    modal.style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Form Submission
function handleSubmit(event) {
    event.preventDefault();
    alert('Message sent! (Add backend for functionality)');
    event.target.reset();
}

// Typed.js Animation
document.addEventListener('DOMContentLoaded', () => {
    new Typed('#typed', {
        strings: ['Threat Mitigator', 'Penetration Tester', 'Secure Systems Designer'],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true
    });
});

// Close Modal on Outside Click
document.getElementById('modal').addEventListener('click', function(e) {
    if (e.target === this) closeModal();
});

// Toggle Night/Day Mode
function toggleMode() {
    const body = document.body;
    const modeSwitch = document.getElementById('modeSwitch');
    if (modeSwitch.checked) {
        body.classList.remove('night-mode');
        body.classList.add('day-mode');
    } else {
        body.classList.remove('day-mode');
        body.classList.add('night-mode');
    }
}