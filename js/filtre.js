
    // const filters = document.querySelectorAll('#filtre input[type="checkbox"]');
    // const recipes = document.querySelectorAll('.recette');

    // filters.forEach(filter => {
    //     filter.addEventListener('change', applyFilters);
    // });

    // function applyFilters() {
    //     const selectedCategories = Array.from(document.querySelectorAll('#categorie input[type="checkbox"]:checked')).map(checkbox => checkbox.value);
    //     const selectedTimes = Array.from(document.querySelectorAll('#temps input[type="checkbox"]:checked')).map(checkbox => checkbox.value);
    //     const selectedDifficulties = Array.from(document.querySelectorAll('#difficulte input[type="checkbox"]:checked')).map(checkbox => checkbox.value);

    //     recipes.forEach(recipe => {
    //         const recipeCategory = recipe.getAttribute('data-type');
    //         const recipeTime = recipe.getAttribute('data-duree');
    //         const recipeDifficulty = recipe.getAttribute('data-difficulte');

    //         const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(recipeCategory);
    //         const matchesTime = selectedTimes.length === 0 || selectedTimes.some(time => {
    //             if (time === 'rapide') return recipeTime <= 30;
    //             if (time === 'moyen') return recipeTime > 30 && recipeTime <= 60;
    //             if (time === 'long') return recipeTime > 60;
    //             return false;
    //         });
    //         const matchesDifficulty = selectedDifficulties.length === 0 || selectedDifficulties.includes(recipeDifficulty);

    //         if (matchesCategory && matchesTime && matchesDifficulty) {
    //             recipe.style.display = 'block';
    //         } else {
    //             recipe.style.display = 'none';
    //         }
    //     });
    // }

    const filters = document.querySelectorAll('#filtre input[type="checkbox"]');
    const recipes = document.querySelectorAll('.recette');

    filters.forEach(filter => {
        filter.addEventListener('change', applyFilters);
    });

    function applyFilters() {
        const selectedCategories = getSelectedFilters('#categorie');
        const selectedTimes = getSelectedFilters('#temps');
        const selectedDifficulties = getSelectedFilters('#difficulte');

        for (let i = 0; i < recipes.length; i++) {
            const recipe = recipes[i];
            const recipeCategory = recipe.getAttribute('data-type');
            const recipeTime = parseInt(recipe.getAttribute('data-duree'), 10);
            const recipeDifficulty = recipe.getAttribute('data-difficulte');

            const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(recipeCategory);
            const matchesTime = selectedTimes.length === 0 || matchesSelectedTime(recipeTime, selectedTimes);
            const matchesDifficulty = selectedDifficulties.length === 0 || selectedDifficulties.includes(recipeDifficulty);

            recipe.style.display = (matchesCategory && matchesTime && matchesDifficulty) ? 'block' : 'none';
        }
    }

    function getSelectedFilters(selector) {
        const checkboxes = document.querySelectorAll(`${selector} input[type="checkbox"]:checked`);
        const values = [];
        for (let j = 0; j < checkboxes.length; j++) {
            values.push(checkboxes[j].value);
        }
        return values;
    }

    function matchesSelectedTime(recipeTime, selectedTimes) {
        for (let k = 0; k < selectedTimes.length; k++) {
            const time = selectedTimes[k];
            if ((time === 'rapide' && recipeTime <= 30) ||
                (time === 'moyen' && recipeTime > 30 && recipeTime <= 60) ||
                (time === 'long' && recipeTime > 60)) {
                return true;
            }
        }
        return false;
    }