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

// Check if all components are loaded
function checkAllComponentsLoaded() {
    const headerLoaded = document.querySelector('header-component').innerHTML.trim() !== '';
    const footerLoaded = document.querySelector('footer-component').innerHTML.trim() !== '';

    if (headerLoaded && footerLoaded) {
        document.body.classList.remove('loading');  // Show the content
        initializeDarkMode();  // Initialize dark mode functionality
    }
}

// Load the header and footer
document.addEventListener('DOMContentLoaded', () => {
    loadHTMLComponent('header-component', 'components/header.html', setDarkModeToggleListener);
    loadHTMLComponent('footer-component', 'components/footer.html');
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

// slider 

document.addEventListener("DOMContentLoaded", function() {
    const carouselContainer = document.querySelector('.carousel-container');
    const slides = Array.from(document.querySelectorAll('.carousel-slide'));

    let slideIndex = 0;
    const slideInterval = 6000; // Interval between slides in milliseconds

    function nextSlide() {
        slideIndex++;

        if (slideIndex >= slides.length) {
            slideIndex = 0;
            carouselContainer.scrollLeft = 0;
        }

        const scrollAmount = slides[slideIndex].offsetLeft - carouselContainer.scrollLeft;

        carouselContainer.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });

        // Move the first slide to the end after scrolling past it
        if (slideIndex === slides.length - 1) {
            setTimeout(() => {
                carouselContainer.appendChild(slides[0]);
                slides.push(slides.shift());
                carouselContainer.scrollLeft -= slides[0].offsetWidth;
            }, 300); // Adjust the timeout duration if needed
        }
    }

    let slideTimer = setInterval(nextSlide, slideInterval);

    carouselContainer.addEventListener('pointerdown', () => {
        clearInterval(slideTimer);
    });

    carouselContainer.addEventListener('pointerup', () => {
        slideTimer = setInterval(nextSlide, slideInterval);
    });
});
