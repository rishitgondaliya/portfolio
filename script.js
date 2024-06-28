document.addEventListener('DOMContentLoaded', function () {
    // Initialize AOS with your desired configuration
    AOS.init({
        duration: 1500,
        offset: 100,
        once: false
    });

    // Event listener for .pro elements
    document.querySelectorAll('.pro').forEach(div => {
        div.addEventListener('click', function () {
            const url = this.getAttribute('data-url');
            if (url) {
                window.open(url, '_blank');
            }
        });
    });

    // Event listener for navbar toggler
    const navbarToggler = document.querySelector('.navbar-collapse');
    const mainContent = document.querySelector('#mainContent');

    if (navbarToggler && mainContent) {
        navbarToggler.addEventListener('click', function () {
            const navbarCollapse = document.querySelector('.navbar-collapse');
            const isVisible = navbarCollapse.classList.contains('show');

            if (isVisible) {
                mainContent.style.paddingTop = '80px'; 
            } else {
                mainContent.style.paddingTop = '0';
            }
        });
    } else {
        console.error('Navbar toggler or main content element not found.');
    }
});