// loadComponents.js
function loadHTMLComponent(selector, url, callback) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.querySelector(selector).innerHTML = data;
            if (callback) callback();
            checkAllComponentsLoaded();  // Check if all components are loaded
        })
        .catch(error => console.error('Error loading component:', error));
}

// Load and inject the head content
function loadHeadContent(url, callback) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.head.innerHTML += data;
            if (callback) callback();
        })
        .catch(error => console.error('Error loading head content:', error));
}

// Check if all components are loaded
function checkAllComponentsLoaded() {
    const headerLoaded = document.querySelector('header-component').innerHTML.trim() !== '';
    const footerLoaded = document.querySelector('footer-component').innerHTML.trim() !== '';

    if (headerLoaded && footerLoaded) {
        document.body.classList.remove('loading');  // Show the content
        initializeDarkMode();  // Initialize dark mode functionality
    }
}

// Load the head, header, and footer
document.addEventListener('DOMContentLoaded', () => {
    loadHeadContent('components/head.html', () => {
        loadHTMLComponent('header-component', 'components/header.html', setDarkModeToggleListener);
        loadHTMLComponent('footer-component', 'components/footer.html');
    });
});

// Set the dark mode toggle event listener
function setDarkModeToggleListener() {
    const toggleButton = document.getElementById('darkModeToggle');
    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            // Save dark mode state to localStorage
            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('darkMode', 'enabled');
            } else {
                localStorage.setItem('darkMode', 'disabled');
            }
        });
    }
}

// Initialize dark mode based on localStorage
function initializeDarkMode() {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'enabled') {
        document.body.classList.add('dark-mode');
    }
}
