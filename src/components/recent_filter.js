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