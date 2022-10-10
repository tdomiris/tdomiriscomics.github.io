let stars = document.getElementById('stars');
let planet = document.getElementById('planet');
let shooting = document.getElementById('shooting');
let text = document.getElementById('text');
let spaceman = document.getElementById('spaceman');
let satellite = document.getElementById('satellite');
let birds = document.getElementById('birds');



window.addEventListener('scroll', function(){
    let value = window.scrollY;
    stars.style.left=value * 0.5 + 'px';
    shooting.style.right=value * 1 + 'px';
    satellite.style.right=value * 0.8 + 'px';
    spaceman.style.top=value * 1 + 'px';
    birds.style.left=value * 0.3 + 'px';
    
    
})