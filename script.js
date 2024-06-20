AOS.init({
    duration: 1500, // Animation duration in milliseconds
    offset: 100,    // Offset (in pixels) from the original trigger point
    once: false     // Animation should appear both on scroll up and down
});

document.querySelectorAll('.pro').forEach(div => {
    div.addEventListener('click', function () {
        const url = this.getAttribute('data-url');
        if (url) {
            window.open(url, '_blank');
        }
    })
})