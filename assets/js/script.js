// script.js 
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
document.addEventListener('DOMContentLoaded', function () {
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

    let slideInterval = setInterval(nextSlide, 8000);

    document.querySelector('.carousel-button.next').addEventListener('click', () => {
        clearInterval(slideInterval);
        nextSlide();
        slideInterval = setInterval(nextSlide, 8000);
    });

    document.querySelector('.carousel-button.prev').addEventListener('click', () => {
        clearInterval(slideInterval);
        prevSlide();
        slideInterval = setInterval(nextSlide, 8000);
    });

    carouselContainer.addEventListener('pointerdown', () => clearInterval(slideInterval));
    carouselContainer.addEventListener('pointerup', () => {
        slideInterval = setInterval(nextSlide, 8000);
    });
});


//password joke
document.addEventListener('DOMContentLoaded', () => {
    const passwordForm = document.getElementById('passwordForm');
    const message = document.getElementById('message');
    const submitButton = document.getElementById('submitButton');
    const homeButton = document.getElementById('homeButton');
    let attempts = 0;
    const maxAttempts = 3;

    passwordForm.addEventListener('submit', (event) => {
        event.preventDefault();
        attempts++;
        if (attempts < maxAttempts) {
            message.innerHTML = `Attempt ${attempts} of ${maxAttempts}.<br>Try again.`;
        } else {
            message.innerHTML = 'Last attempt failed.<br>Server will be deleted in 5 seconds.';
            submitButton.disabled = true;  // Disable the submit button
            startCountdown();
        }
    });

    function startCountdown() {
        let countdown = 5;
        message.classList.add('blink');
        const countdownInterval = setInterval(() => {
            if (countdown > 0) {
                message.innerHTML = `Last attempt failed.<br>Server will be deleted in ${countdown--} seconds.`;
            } else {
                clearInterval(countdownInterval);
                message.classList.remove('blink');
                message.innerHTML = "Just kidding! 😊";
                homeButton.classList.remove('hidden');
            }
        }, 1000);
    }
});
