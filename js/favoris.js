

// Récupérer les favoris depuis localStorage
const favoris = new Set(JSON.parse(localStorage.getItem("favoris")) || []);
const favorisList = document.getElementById("favoris-list");

// Exemple de données de recettes (à remplacer par vos données réelles)
const recettes = [
    { id: "1", titre: "Tarte aux pommes", type: "Dessert", duree: "60 min", difficulte: "Facile", image: "assets/images/Tarte aux pommes (1).jpg" },
    { id: "2", titre: "Ratatouille provençale", type: "Plat", duree: "45 min", difficulte: "Moyen", image: "assets/images/Ratatouille provençale.jpg" },
    { id: "3", titre: "Velouté de potiron", type: "Entrée", duree: "30 min", difficulte: "Facile", image: "assets/images/velouté au potiron.jpg" }
];

// Filtrer les recettes pour n'afficher que les favoris
const favorisRecettes = recettes.filter(recette => favoris.has(recette.id));

// Afficher les recettes favorites avec une boucle for classique
for (let i = 0; i < favorisRecettes.length; i++) {
    const recette = favorisRecettes[i];
    const recetteElement = document.createElement("figure");
    recetteElement.classList.add("recette");
    recetteElement.setAttribute("data-id", recette.id);

    recetteElement.innerHTML = `
        <img src="${recette.image}" alt="${recette.titre}" width="100%">
        <figcaption>
            <h2>${recette.titre}</h2>
            <div>
                <p class="type">${recette.type}</p>
                <p class="duree">${recette.duree}</p>
                <p class="difficulte">${recette.difficulte}</p>
            </div>
           
            <button type="button"><a href="recette.html">Voir la recette</a></button>
            
        </figcaption>
         <div>
             <button type="button" class="remove-favori">Supprimer des favoris</button> <!-- Ce bouton est ajouté ici -->
             </div>
    `;

    favorisList.appendChild(recetteElement);


    // Ajouter l'événement de suppression au bouton
    const removeButton = recetteElement.querySelector(".remove-favori");
    removeButton.addEventListener("click", () => {
        // Supprimer l'élément de la Set favoris
        favoris.delete(recette.id);
        // Mettre à jour le localStorage
        localStorage.setItem("favoris", JSON.stringify(Array.from(favoris)));
        // Mettre à jour l'affichage en retirant l'élément
        recetteElement.remove();
    });
}