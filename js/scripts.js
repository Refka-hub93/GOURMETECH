
// Récupération de toutes les recettes dans le DOM
const recettes = document.querySelectorAll(".recette");

// Charger les favoris existants depuis localStorage (ou créer un Set vide)
const favoris = new Set(JSON.parse(localStorage.getItem("favoris")) || []);

// Gestion des favoris
// Fonction pour mettre à jour l'interface des favoris
function updateFavorisUI() {
    console.log('Mise à jour de l\'interface des favoris');
    for (const recette of recettes) {
        const recetteID = recette.getAttribute("data-id");
        const coeur = recette.querySelector("svg");

        if (!coeur || !recetteID) {
            console.error('Élément SVG ou data-id manquant pour la recette:', recette);
            continue;
        }

        // Vérifie si la recette est dans les favoris
        if (favoris.has(recetteID)) {
            coeur.classList.add("favori-actif");
            coeur.style.fill = "red";
            console.log(`Recette ${recetteID} est un favori`);
        } else {
            coeur.classList.remove("favori-actif");
            coeur.style.fill = "currentColor";
            console.log(`Recette ${recetteID} n'est pas un favori`);
        }
    }
}

// Fonction pour enregistrer les favoris dans le localStorage
function saveFavoris() {
    console.log('Sauvegarde des favoris dans localStorage:', Array.from(favoris));
    localStorage.setItem("favoris", JSON.stringify(Array.from(favoris)));
}

// Ajouter un événement clic pour chaque cœur
for (const recette of recettes) {
    const coeur = recette.querySelector("svg");
    const recetteID = recette.getAttribute("data-id");

    if (!coeur || !recetteID) continue;

    coeur.addEventListener("click", () => {
        if (favoris.has(recetteID)) {
            favoris.delete(recetteID); // Supprimer des favoris
        } else {
            favoris.add(recetteID); // Ajouter aux favoris
        }
        saveFavoris(); // Sauvegarder les favoris
        updateFavorisUI(); // Mettre à jour l'interface
    });
}

// Initialiser l'interface au chargement de la page
updateFavorisUI();