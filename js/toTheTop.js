// adjust the visibility and appearance of the to the top button
mybutton = document.getElementById("gotobtn");

// When the user scrolls down from the top of the body by x amount, show the button

addEventListener('load', function() {
    mybutton.style.display = 'none';
});

window.addEventListener('scroll', e => {
    mybutton.style.display = window.scrollY > 1000 ? 'block' : 'none';
});