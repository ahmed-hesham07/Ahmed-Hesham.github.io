document.addEventListener('mousemove', function(e) {
    const footer = document.querySelector('footer');
    const windowHeight = window.innerHeight;

    // Check if the mouse is near the bottom 100px of the screen
    if (e.clientY > windowHeight - 100) {
        footer.classList.add('show-footer');
    } else {
        footer.classList.remove('show-footer');
    }
});