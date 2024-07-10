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
    const header = document.querySelector('header-component');
    const footer = document.querySelector('footer-component');
    const carousel = document.querySelector('carousel-component');
    
    const headerLoaded = header && header.innerHTML.trim() !== '';
    const footerLoaded = footer && footer.innerHTML.trim() !== '';
    const carouselLoaded = !carousel || (carousel && carousel.innerHTML.trim() !== '');  // Check if carousel is either not present or loaded

    if (headerLoaded && footerLoaded && carouselLoaded) {
        document.body.classList.remove('loading');  // Show the content
        initializeDarkMode();  // Initialize dark mode functionality
    }
}

// Load the head, header, and footer
document.addEventListener('DOMContentLoaded', () => {
    loadHeadContent('components/head.html', () => {
        loadHTMLComponent('header-component', 'components/header.html', setDarkModeToggleListener);
        loadHTMLComponent('footer-component', 'components/footer.html');
        loadHTMLComponent('carousel-component', 'components/carousel.html');
    });
});
