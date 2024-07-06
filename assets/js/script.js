async function loadHTMLComponent(selector, url, callback) {
    try {
        const response = await fetch(url);
        const data = await response.text();
        document.querySelector(selector).innerHTML = data;
        if (callback) callback();
        checkAllComponentsLoaded();  // Check if all components are loaded
    } catch (error) {
        console.error('Error loading component:', error);
    }
}

function checkAllComponentsLoaded() {
    const headerLoaded = document.querySelector('header-component').innerHTML.trim() !== '';
    const footerLoaded = document.querySelector('footer-component').innerHTML.trim() !== '';

    if (headerLoaded && footerLoaded) {
        document.body.classList.remove('loading');  // Show the content
        initializeDarkMode();  // Initialize dark mode functionality
    }
}

function setDarkModeToggleListener() {
    const toggleButton = document.getElementById('darkModeToggle');
    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            saveDarkModeState();
        });
    }
}

function saveDarkModeState() {
    try {
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    } catch (error) {
        console.error('Error accessing localStorage:', error);
    }
}

function initializeDarkMode() {
    try {
        const darkMode = localStorage.getItem('darkMode');
        if (darkMode === 'enabled') {
            document.body.classList.add('dark-mode');
        }
    } catch (error) {
        console.error('Error accessing localStorage:', error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadHTMLComponent('header-component', 'components/header.html', setDarkModeToggleListener);
    loadHTMLComponent('footer-component', 'components/footer.html');
});

// Carousel Script
document.addEventListener('DOMContentLoaded', function() {
    const carouselContainer = document.querySelector('.carousel-container');
    const carouselTrack = document.querySelector('.carousel-track');
    const slides = Array.from(document.querySelectorAll('.carousel-slide'));
    const slideWidth = carouselContainer.offsetWidth / 3; // Each slide takes 1/3 of the container

    let currentIndex = 0;

    function setSlidePositions() {
        slides.forEach((slide, index) => {
            slide.style.left = `${index * slideWidth}px`;
        });
    }

    function updateCarousel() {
        carouselTrack.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    function nextSlide() {
        currentIndex++;
        if (currentIndex >= slides.length - 4) { // Show last 3 slides
            currentIndex = 0; // Loop back to start
        }
        updateCarousel();
    }

    function prevSlide() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = slides.length - 4; // Show last 3 slides
        }
        updateCarousel();
    }

    setSlidePositions();
    updateCarousel();
    
    let slideInterval = setInterval(nextSlide, 6000);

    document.querySelector('.carousel-button.next').addEventListener('click', () => {
        clearInterval(slideInterval);
        nextSlide();
        slideInterval = setInterval(nextSlide, 6000);
    });

    document.querySelector('.carousel-button.prev').addEventListener('click', () => {
        clearInterval(slideInterval);
        prevSlide();
        slideInterval = setInterval(nextSlide, 6000);
    });

    carouselContainer.addEventListener('pointerdown', () => clearInterval(slideInterval));
    carouselContainer.addEventListener('pointerup', () => {
        slideInterval = setInterval(nextSlide, 6000);
    });
});
