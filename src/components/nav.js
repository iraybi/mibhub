// Responsive Navmenu

const navMenu = document.querySelector(".open");
const navBar = document.querySelector("nav");
const navClose = document.querySelector(".close");
const overlay = document.querySelector(".overlay");

navMenu.addEventListener("click", () => {
    navBar.style.transform = "translateX(0)";
    navMenu.style.display = "none";
    navClose.style.display = "block";
    overlay.style.display = "block";
})

navClose.addEventListener("click", () => {
    navBar.style.transform = "translateX(-100%)";
    navMenu.style.display = "block";
    navClose.style.display = "none";
    overlay.style.display = "none";
})

overlay.addEventListener("click", () => {
    navBar.style.transform = "translateX(-100%)";
    navMenu.style.display = "block";
    navClose.style.display = "none";
    overlay.style.display = "none";
})

function stateReset(y) {
    if (y.matches) { // If media query matches
        navBar.style.transform = "translateX(-100%)";
        navMenu.style.display = "block";
        navClose.style.display = "none";
        overlay.style.display = "none";
    } else {
        navBar.style.transform = "translateX(0)";
        navMenu.style.display = "none";
        navClose.style.display = "none";
        overlay.style.display = "none";
    }
};

// Slide the menu if the user clicks outside of it

let y = window.matchMedia("(max-width: 600px)");
stateReset(y);
y.addListener(stateReset);

let activeNavBtn = Array.from(document.querySelectorAll('.nav_btn'));

const handleClick = (e) => {
    e.preventDefault();
    activeNavBtn.forEach(node => {
        node.classList.remove('active');
    });
    e.currentTarget.classList.add('active');

}

activeNavBtn.forEach(node => {
    node.addEventListener('click', handleClick)
});