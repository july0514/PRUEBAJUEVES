// script.js
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.backgroundColor = '#e10600';
    } else {
        nav.style.backgroundColor = '#333';
    }
});
