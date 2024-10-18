// Welcome message in the console
console.log("Welcome to Falcon Furnishings!");
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
window.onscroll = function() {
    const backToTopButton = document.getElementById('backToTop');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
};
