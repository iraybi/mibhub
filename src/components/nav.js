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


// Dropdown

function dropdown() {
    document.getElementById("filter").classList.toggle("show");
};

// Close the dropdown if the user clicks outside of it

window.onclick = e => {
    if (!e.target.matches('.dropbtn')) {
        let dropdown = document.getElementById("filter");
        if (dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
        }
    }
};


// navBar.addEventListener("click", e => {
//     console.log(e.target);
//     if(e.target.)
// })


let activeNav = Array.from(document.querySelectorAll('.nav_btn'));

const handleClick = (e) => {
    e.preventDefault();
    activeNav.forEach(node => {
        node.classList.remove('active');
    });
    e.currentTarget.classList.add('active');

}

activeNav.forEach(node => {
    node.addEventListener('click', handleClick)
});