
const form = document.querySelector("form");
const nameInput = document.querySelector("#name");
const firstNameInput = document.querySelector("#firstName");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const rgpdCheckbox = document.querySelector("#rgpd");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche l'envoi du formulaire par défaut
    let isValid = true;

    // Réinitialise les messages d'erreur
    clearErrors();

    // Vérifie le champ Nom (lettres uniquement, min 2 caractères)
    if (!/^[a-zA-ZÀ-ÖØ-öø-ÿ\s]{2,}$/.test(nameInput.value)) {
        showError(nameInput, "Veuillez entrer un nom valide (au moins 2 lettres).");
        isValid = false;
    }

    // Vérifie le champ Prénom (facultatif mais valide s'il est rempli)
    if (firstNameInput.value && !/^[a-zA-ZÀ-ÖØ-öø-ÿ\s]{2,}$/.test(firstNameInput.value)) {
        showError(firstNameInput, "Veuillez entrer un prénom valide (au moins 2 lettres).");
        isValid = false;
    }

    // Vérifie le champ E-mail
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
        showError(emailInput, "Veuillez entrer une adresse E-mail valide.");
        isValid = false;
    }

    // Vérifie le champ Message (au moins 10 caractères)
    if (!/^.{10,}$/.test(messageInput.value)) {
        showError(messageInput, "Le message doit contenir au moins 10 caractères.");
        isValid = false;
    }

    // Vérifie la case RGPD
    if (!rgpdCheckbox.checked) {
        showError(rgpdCheckbox, "Vous devez accepter la collecte des données.");
        isValid = false;
    }

    // Envoie du formulaire si tout est valide
    if (isValid) {
        alert("Formulaire envoyé avec succès !");
        form.submit(); // Envoie du formulaire
    }
});

// Fonction pour afficher un message d'erreur
function showError(element, message) {
    const error = document.createElement("p");
    error.className = "error-message";
    error.textContent = message;
    element.parentElement.appendChild(error);
}

// Fonction pour supprimer les messages d'erreur existants
function clearErrors() {
    const errors = document.querySelectorAll(".error-message");
    errors.forEach(error => error.remove());
}


// Fin gestion de formulaire


// FAQ


// Récupérer tous les éléments <details>
const details = document.querySelectorAll("details");

// Parcourir chaque élément avec une boucle for classique
for (let i = 0; i < details.length; i++) {
    details[i].addEventListener("click", function () {
        // Parcourir à nouveau pour fermer les autres éléments ouverts
        for (let j = 0; j < details.length; j++) {
            if (i !== j && details[j].open) {
                details[j].removeAttribute("open");
            }
        }
    });
}
