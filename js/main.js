let menuBtn = document.querySelectorAll('.menu-btn');
let menuBar = document.querySelector('.menu');
let body = document.querySelector('.body');

let menuState = true;

menuBtn.forEach(item => {
    item.addEventListener('click', () => {
        if (menuState == false) {
            menuBar.style.transform = 'translateY(-200%)';
            // body.style.overflow = 'scroll';
        } else {
            menuBar.style.transform = 'translateY(0)';
            // body.style.overflow = 'hidden';
        }
        menuState = !menuState;
    })
})
