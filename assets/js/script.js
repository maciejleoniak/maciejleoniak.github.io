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
