
document.addEventListener('DOMContentLoaded', function() {
    // Initialize interactivity
    initializeLearnMoreButton();
    initializeContactForm();
    initializeDarkModeToggle();
    loadTheme();
});

// Function to handle the Learn More button
function initializeLearnMoreButton() {
    const learnMoreButton = document.getElementById('learnMoreButton');
    if (learnMoreButton) {
        learnMoreButton.addEventListener('click', function() {
            alert('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
        });
    }
}

// Function to handle Contact Form submission
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Thank you for your message, Lorem ipsum!');
        });
    }
}

// Function to initialize Dark Mode Toggle
function initializeDarkModeToggle() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', toggleDarkMode);
    }
}

// Function to toggle dark mode and save the preference in localStorage
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
}

// Function to load the theme from localStorage when the page loads
function loadTheme() {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
    }
}
