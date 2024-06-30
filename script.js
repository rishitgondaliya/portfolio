document.addEventListener('DOMContentLoaded', function() {
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
    const navbarToggler = document.querySelector('.navbar-toggler');
    const mainContent = document.querySelector('#main-content');
    const navbarCollapse = document.querySelector('#navbarNavAltMarkup');

    function adjustMainContentMargin() {
        const isVisible = navbarCollapse.classList.contains('show');
        if (isVisible) {
            const navbarHeight = navbarCollapse.scrollHeight;
            mainContent.style.marginTop = `${navbarHeight}px`;
        } else {
            mainContent.style.marginTop = '0';
        }
    }

    navbarToggler.addEventListener('click', function() {
        adjustMainContentMargin();
    });

    // Listen for collapse events to adjust margin when toggling is done
    navbarCollapse.addEventListener('shown.bs.collapse', adjustMainContentMargin);
    navbarCollapse.addEventListener('hidden.bs.collapse', adjustMainContentMargin);
});
