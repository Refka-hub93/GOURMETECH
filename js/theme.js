
// Sélection du bouton et de l'icône
const themeToggleBtn = document.querySelector(".dark-theme");
const themeIcon = document.getElementById("theme-icon");
const body = document.body;

// Charger le thème depuis localStorage (par défaut: clair)
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
    body.classList.add("dark-theme");
    themeIcon.src = "assets/icons/moon.png"; // Icône pour le thème sombre
} else {
    themeIcon.src = "assets/icons/croissant.png"; // Icône pour le thème clair
}

// Fonction pour changer de thème
function toggleTheme() {
    if (body.classList.contains("dark-theme")) {
        // Passer au thème clair
        body.classList.remove("dark-theme");
        localStorage.setItem("theme", "light");
        themeIcon.src = "assets/icons/croissant.png"; // Icône pour le thème clair
    } else {
        // Passer au thème sombre
        body.classList.add("dark-theme");
        const themeIcon = document.createElement("img");
        themeIcon.classList.add("theme-icon"); // Ajouter une classe CSS

    }
    console.log(themeIcon.src)
}

// Ajouter un événement au clic du bouton
themeToggleBtn.addEventListener("click", toggleTheme);
