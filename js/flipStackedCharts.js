// creates the flip action for the stacked charts

var cards = document.querySelectorAll('.card-bar');

[...cards].forEach((card)=>{
    card.addEventListener( 'click', function() {
        card.classList.toggle('is-flipped');
    });
});