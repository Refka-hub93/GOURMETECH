


// Gestion des favoris

// Fonction pour mettre à jour l'interface des favoris
function updateFavorisUI() {
    console.log('Mise à jour de l\'interface des favoris');
    // Parcourir toutes les recettes
    for (const recette of recettes) {
        const recetteID = recette.getAttribute("data-id");
        const coeur = recette.querySelector("svg");

        if (!coeur || !recetteID) {
            console.error('Élément SVG ou data-id manquant pour la recette:', recette);
            continue;
        }

        // Si la recette est un favori, on colore le cœur en rouge
        if (favoris.has(recetteID)) {
            coeur.classList.add("favori-actif");
            coeur.style.fill = "red";
            console.log(`Recette ${recetteID} est un favori`);
        } else {
            coeur.classList.remove("favori-actif");
            coeur.style.fill = "currentColor"; // Remet la couleur d'origine
            console.log(`Recette ${recetteID} n'est pas un favori`);
        }
    }
}

// Fonction pour enregistrer les favoris dans le localStorage
function saveFavoris() {
    console.log('Sauvegarde des favoris dans localStorage:', favoris);
    localStorage.setItem("favoris", JSON.stringify(Array.from(favoris)));
}

// Initialiser l'interface au chargement de la page
updateFavorisUI();
