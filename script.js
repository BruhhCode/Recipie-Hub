
const recipesData = [
    {
        id: 1,
        title: 'Paneer Butter Masala',
        category: 'Main Course',
        cuisine: 'Indian',
        description: 'Creamy tomato-based curry with soft paneer cubes',
        prep_time: 15,
        cook_time: 30,
        serves: 4,
        difficulty: 'Medium',
        rating: 4.5,
        reviews: 25,
        ingredients: [
            { name: 'Paneer', quantity: 250, unit: 'g' },
            { name: 'Butter', quantity: 50, unit: 'g' },
            { name: 'Tomato', quantity: 400, unit: 'g' },
            { name: 'Cream', quantity: 100, unit: 'ml' }
        ],
        steps: [
            { number: 1, description: 'Heat 2 tablespoons of butter in a large pan over medium heat. Add 1 finely chopped onion and sauté until golden brown (about 3 minutes).', time: 3 },
            { number: 2, description: 'Add 2 teaspoons of ginger-garlic paste and sauté for 1 minute until fragrant. Add 2 chopped tomatoes and cook until they become mushy.', time: 5 },
            { number: 3, description: 'Add 1 teaspoon each of red chili powder, turmeric powder, coriander powder, and garam masala. Stir well and cook for 2 minutes.', time: 2 },
            { number: 4, description: 'Pour in 400g tomato puree and cook until the oil separates from the masala (about 8 minutes). Stir occasionally.', time: 8 },
            { number: 5, description: 'Add 250g cubed paneer, 100ml cream, and salt to taste. Mix gently and simmer for 5 minutes until paneer is heated through.', time: 5 },
            { number: 6, description: 'Garnish with fresh coriander leaves and serve hot with naan bread or rice.', time: 1 }
        ],
        nutrition: {
            calories: 350,
            protein: 15,
            carbs: 25,
            fat: 22,
            fiber: 2,
            sodium: 650
        },
        dietary: ['Vegetarian', 'Gluten-Free']
    },
    {
        id: 2,
        title: 'Vegetable Fried Rice',
        category: 'Main Course',
        cuisine: 'Asian',
        description: 'Quick and delicious fried rice with mixed vegetables',
        prep_time: 10,
        cook_time: 15,
        serves: 2,
        difficulty: 'Easy',
        rating: 4.2,
        reviews: 18,
        ingredients: [
            { name: 'Rice', quantity: 2, unit: 'cups' },
            { name: 'Vegetables', quantity: 300, unit: 'g' },
            { name: 'Soy Sauce', quantity: 3, unit: 'tbsp' }
        ],
        steps: [
            { number: 1, description: 'Heat 2 tablespoons of oil in a large wok or pan over high heat. Add 1 teaspoon finely chopped garlic and ginger.', time: 1 },
            { number: 2, description: 'Add 1 cup of mixed vegetables (carrots, peas, beans, corn, bell peppers) and stir-fry for 3 minutes until crisp-tender.', time: 3 },
            { number: 3, description: 'Push vegetables to one side and crack 2 eggs into the pan. Scramble them quickly with a spatula.', time: 2 },
            { number: 4, description: 'Add 2 cups of pre-cooked rice and break up any clumps. Stir-fry for 2 minutes.', time: 2 },
            { number: 5, description: 'Add 2 tablespoons soy sauce, 1 tablespoon oyster sauce (optional), and 1 teaspoon sesame oil. Mix well.', time: 1 },
            { number: 6, description: 'Add salt, white pepper, and chopped green onions. Stir-fry for 1 more minute.', time: 1 },
            { number: 7, description: 'Serve hot, optionally topped with more green onions and a fried egg on top.', time: 1 }
        ],
        nutrition: {
            calories: 280,
            protein: 8,
            carbs: 45,
            fat: 6,
            fiber: 4,
            sodium: 450
        },
        dietary: ['Vegan', 'Gluten-Free']
    },
    {
        id: 3,
        title: 'Spaghetti Carbonara',
        category: 'Main Course',
        cuisine: 'Italian',
        description: 'Classic Italian pasta with creamy sauce',
        prep_time: 10,
        cook_time: 20,
        serves: 2,
        difficulty: 'Easy',
        rating: 4.7,
        reviews: 32,
        ingredients: [
            { name: 'Spaghetti', quantity: 200, unit: 'g' },
            { name: 'Eggs', quantity: 3, unit: 'pieces' },
            { name: 'Bacon', quantity: 100, unit: 'g' }
        ],
        steps: [
            { number: 1, description: 'Bring a large pot of salted water to boil. Cook 200g spaghetti according to package directions until al dente (about 8-10 minutes).', time: 10 },
            { number: 2, description: 'While pasta cooks, heat 2 tablespoons olive oil in a large pan. Add 100g diced pancetta or bacon and cook until crispy (about 4 minutes).', time: 4 },
            { number: 3, description: 'Add 2 cloves minced garlic and cook for 1 minute until fragrant. Remove from heat.', time: 1 },
            { number: 4, description: 'Reserve 1 cup pasta water, then drain spaghetti and add to the pan with the pancetta.', time: 1 },
            { number: 5, description: 'Add 2 beaten eggs, ½ cup grated Pecorino Romano cheese, and plenty of black pepper. Toss quickly over low heat.', time: 2 },
            { number: 6, description: 'Add reserved pasta water gradually until sauce becomes creamy. Cook for 1 more minute.', time: 1 },
            { number: 7, description: 'Serve immediately with extra cheese and black pepper. The sauce should be creamy, not scrambled.', time: 1 }
        ],
        nutrition: {
            calories: 420,
            protein: 16,
            carbs: 48,
            fat: 18,
            fiber: 2,
            sodium: 380
        },
        dietary: ['High-Protein']
    },
    {
        id: 4,
        title: 'Chicken Tikka Masala',
        category: 'Main Course',
        cuisine: 'Indian',
        description: 'Tender chicken pieces in aromatic spiced sauce',
        prep_time: 20,
        cook_time: 40,
        serves: 4,
        difficulty: 'Medium',
        rating: 4.8,
        reviews: 45,
        ingredients: [
            { name: 'Chicken', quantity: 800, unit: 'g' },
            { name: 'Yogurt', quantity: 200, unit: 'ml' },
            { name: 'Tomato Sauce', quantity: 400, unit: 'ml' }
        ],
        steps: [
            { number: 1, description: 'Cut 500g chicken into bite-sized pieces. Marinate with 200g yogurt, 1 tablespoon ginger-garlic paste, 1 teaspoon red chili powder, ½ teaspoon turmeric, and salt for 30 minutes.', time: 30 },
            { number: 2, description: 'Heat 2 tablespoons oil in a pan. Add 1 chopped onion and sauté until golden brown (about 5 minutes).', time: 5 },
            { number: 3, description: 'Add 2 teaspoons ginger-garlic paste and sauté for 1 minute. Add 2 chopped tomatoes and cook until mushy.', time: 5 },
            { number: 4, description: 'Add marinated chicken and cook on high heat for 5 minutes until it changes color.', time: 5 },
            { number: 5, description: 'Add 1 teaspoon each of cumin powder, coriander powder, garam masala, and red chili powder. Cook for 3 minutes.', time: 3 },
            { number: 6, description: 'Pour in 400ml tomato sauce and 100ml cream. Simmer for 15 minutes until chicken is tender.', time: 15 },
            { number: 7, description: 'Garnish with fresh coriander and serve hot with rice or naan bread.', time: 1 }
        ],
        nutrition: {
            calories: 380,
            protein: 35,
            carbs: 15,
            fat: 20,
            fiber: 1,
            sodium: 720
        },
        dietary: ['High-Protein', 'Gluten-Free']
    },
    {
        id: 5,
        title: 'Margherita Pizza',
        category: 'Main Course',
        cuisine: 'Italian',
        description: 'Classic pizza with fresh mozzarella and basil',
        prep_time: 15,
        cook_time: 20,
        serves: 4,
        difficulty: 'Medium',
        rating: 4.4,
        reviews: 28,
        ingredients: [
            { name: 'Pizza Dough', quantity: 500, unit: 'g' },
            { name: 'Mozzarella', quantity: 250, unit: 'g' },
            { name: 'Tomato Sauce', quantity: 200, unit: 'ml' }
        ],
        steps: [
            { number: 1, description: 'Preheat oven to 220°C (425°F). Roll out 500g pizza dough on a floured surface to about 12-inch diameter.', time: 5 },
            { number: 2, description: 'Transfer dough to a pizza stone or baking sheet. Spread 200ml tomato sauce evenly, leaving a 1-inch border.', time: 2 },
            { number: 3, description: 'Sprinkle 250g shredded mozzarella cheese over the sauce, leaving the border clear.', time: 2 },
            { number: 4, description: 'Add toppings: sliced tomatoes, fresh basil leaves, and a drizzle of olive oil. Season with salt and pepper.', time: 2 },
            { number: 5, description: 'Bake in preheated oven for 12-15 minutes until crust is golden and cheese is bubbly and slightly browned.', time: 15 },
            { number: 6, description: 'Remove from oven and let cool for 2 minutes. Slice and serve immediately.', time: 2 }
        ],
        nutrition: {
            calories: 290,
            protein: 12,
            carbs: 38,
            fat: 10,
            fiber: 2,
            sodium: 520
        },
        dietary: ['Vegetarian']
    },
    {
        id: 6,
        title: 'Thai Green Curry',
        category: 'Main Course',
        cuisine: 'Thai',
        description: 'Spicy and aromatic curry with vegetables',
        prep_time: 15,
        cook_time: 20,
        serves: 3,
        difficulty: 'Medium',
        rating: 4.3,
        reviews: 22,
        ingredients: [
            { name: 'Coconut Milk', quantity: 400, unit: 'ml' },
            { name: 'Green Curry Paste', quantity: 3, unit: 'tbsp' }
        ],
        steps: [
            { number: 1, description: 'Heat 400ml coconut milk in a large pan over medium heat. Add 3 tablespoons green curry paste and stir until fragrant (about 2 minutes).', time: 2 },
            { number: 2, description: 'Add 1 tablespoon fish sauce, 1 tablespoon palm sugar, and 2 tablespoons lime juice. Stir well.', time: 1 },
            { number: 3, description: 'Add 300g mixed vegetables (bell peppers, eggplant, bamboo shoots, baby corn) and simmer for 5 minutes.', time: 5 },
            { number: 4, description: 'Add 200g protein (chicken, tofu, or shrimp) and cook for 8-10 minutes until done.', time: 10 },
            { number: 5, description: 'Add Thai basil leaves and adjust seasoning. Simmer for 2 more minutes.', time: 2 },
            { number: 6, description: 'Serve hot over jasmine rice, garnished with lime wedges and fresh basil.', time: 1 }
        ],
        nutrition: {
            calories: 310,
            protein: 14,
            carbs: 22,
            fat: 18,
            fiber: 3,
            sodium: 680
        },
        dietary: ['Vegan', 'Gluten-Free']
    },
    {
        id: 7,
        title: 'Chocolate Cake',
        category: 'Dessert',
        cuisine: 'Western',
        description: 'Rich and moist chocolate cake',
        prep_time: 20,
        cook_time: 35,
        serves: 8,
        difficulty: 'Medium',
        rating: 4.6,
        reviews: 35,
        ingredients: [
            { name: 'Flour', quantity: 200, unit: 'g' },
            { name: 'Chocolate', quantity: 200, unit: 'g' }
        ],
        steps: [
            { number: 1, description: 'Preheat oven to 180°C (350°F). Grease and flour two 8-inch round cake pans.', time: 5 },
            { number: 2, description: 'In a large bowl, sift together 200g flour, 200g sugar, 50g cocoa powder, 1 teaspoon baking soda, and ½ teaspoon salt.', time: 3 },
            { number: 3, description: 'In another bowl, combine 1 cup milk, ½ cup vegetable oil, 2 eggs, and 1 teaspoon vanilla extract. Beat well.', time: 2 },
            { number: 4, description: 'Pour wet ingredients into dry ingredients and mix until just combined. Don\'t overmix.', time: 2 },
            { number: 5, description: 'Divide batter equally between prepared pans. Bake for 30-35 minutes until toothpick inserted comes out clean.', time: 35 },
            { number: 6, description: 'Cool in pans for 10 minutes, then transfer to wire racks to cool completely.', time: 10 },
            { number: 7, description: 'Frost with chocolate buttercream or serve plain. Store in airtight container.', time: 5 }
        ],
        nutrition: {
            calories: 450,
            protein: 6,
            carbs: 58,
            fat: 22,
            fiber: 2,
            sodium: 180
        },
        dietary: ['Vegetarian']
    },
    {
        id: 8,
        title: 'Biryani',
        category: 'Main Course',
        cuisine: 'Indian',
        description: 'Fragrant rice dish with spices and meat',
        prep_time: 30,
        cook_time: 45,
        serves: 6,
        difficulty: 'Hard',
        rating: 4.9,
        reviews: 50,
        ingredients: [
            { name: 'Basmati Rice', quantity: 2, unit: 'cups' },
            { name: 'Meat', quantity: 500, unit: 'g' },
            { name: 'Spices', quantity: 4, unit: 'tbsp' }
        ],
        steps: [
            { number: 1, description: 'Rinse 1 cup of basmati rice thoroughly and soak in water for 30 minutes. Drain and set aside.', time: 30 },
            { number: 2, description: 'Heat 2 tablespoons of oil in a large pan. Add 1 teaspoon cumin seeds and let them splutter.', time: 1 },
            { number: 3, description: 'Add 1 finely chopped onion and sauté until translucent (about 3 minutes). Add 1 teaspoon ginger-garlic paste.', time: 3 },
            { number: 4, description: 'Add 500g meat (chicken/lamb/beef) pieces, 2 teaspoons red chili powder, 1 teaspoon turmeric, and salt. Cook until meat changes color.', time: 5 },
            { number: 5, description: 'Add 2 chopped tomatoes, 1 cup yogurt, and biryani masala. Cook until oil separates (about 10 minutes).', time: 10 },
            { number: 6, description: 'Add 2 cups water and soaked rice. Bring to boil, then simmer covered for 15 minutes until rice is cooked.', time: 15 },
            { number: 7, description: 'Layer with fried onions, boiled eggs, and saffron milk. Cook on low heat for 10 more minutes.', time: 10 },
            { number: 8, description: 'Let it rest for 5 minutes, then serve hot with raita and pickle.', time: 5 }
        ],
        nutrition: {
            calories: 380,
            protein: 22,
            carbs: 50,
            fat: 10,
            fiber: 3,
            sodium: 840
        },
        dietary: ['High-Protein']
    }
];

// Storage for current user, favorites, and reviews
let currentUser = null;
let userFavorites = loadFromStorage('userFavorites', []);
let userReviews = loadFromStorage('userReviews', {});
let currentRecipeId = null;
let currentRating = 0;

// ============================================
// UTILITIES
// ============================================

function loadFromStorage(key, defaultValue) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : defaultValue;
}

function saveToStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

// ============================================
// AUTHENTICATION
// ============================================

function loginUser() {
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const messageEl = document.getElementById('auth-message');

    if (!username || !email || !password) {
        messageEl.textContent = '❌ Please fill all fields';
        messageEl.className = 'message error';
        return;
    }

    if (!email.includes('@')) {
        messageEl.textContent = '❌ Please enter a valid email';
        messageEl.className = 'message error';
        return;
    }

    if (username.length < 3) {
        messageEl.textContent = '❌ Username must be at least 3 characters';
        messageEl.className = 'message error';
        return;
    }

    currentUser = {
        username: username,
        email: email,
        id: Date.now()
    };

    saveToStorage('currentUser', currentUser);
    messageEl.textContent = `✅ Welcome, ${username}!`;
    messageEl.className = 'message success';

    setTimeout(() => {
        showSection('recipes');
        loadRecipes();
    }, 1500);
}

// ============================================
// SECTION NAVIGATION
// ============================================

function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });

    // Show selected section
    const section = document.getElementById(sectionId);
    if (section) {
        section.style.display = 'block';
    }

    // Clear auth form when showing auth section
    if (sectionId === 'auth') {
        document.getElementById('username').value = '';
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
        document.getElementById('auth-message').textContent = '';
        setTimeout(() => {
            document.getElementById('username').focus();
        }, 100);
    }

    if (sectionId === 'recipes') {
        loadRecipes();
    } else if (sectionId === 'favorites') {
        loadFavorites();
    } else if (sectionId === 'add-recipe') {
        // Check if user is logged in
        if (!currentUser) {
            alert('Please login first to add a recipe!');
            showSection('auth');
            return;
        }
        // Form is already ready, no additional loading needed
    }
}

// ============================================
// LOAD AND DISPLAY RECIPES
// ============================================

function loadRecipes() {
    const grid = document.getElementById('recipesGrid');
    grid.innerHTML = '';

    // Load user recipes from localStorage and merge with default recipes
    const userRecipes = loadFromStorage('userRecipes', []);
    const allRecipes = [...recipesData, ...userRecipes];

    // Update global recipesData to include user recipes for filtering
    const filteredRecipes = getFilteredRecipes(allRecipes);

    if (filteredRecipes.length === 0) {
        grid.innerHTML = '<div class="empty-state"><p>😔 No recipes found matching your criteria</p></div>';
        return;
    }

    filteredRecipes.forEach(recipe => {
        const card = createRecipeCard(recipe);
        grid.appendChild(card);
    });
}

function createRecipeCard(recipe) {
    const card = document.createElement('div');
    card.className = 'recipe-card';
    
    const totalTime = recipe.prep_time + recipe.cook_time;
    const avgRating = getDietaryBadges(recipe);
    const foodEmoji = getFoodEmoji(recipe.title);
    const cardColor = getCardBackground(recipe.id);

    card.innerHTML = `
        <div class="recipe-card-image" style="background: ${cardColor}; display: flex; align-items: center; justify-content: center; font-size: 64px;">${foodEmoji}</div>
        <div class="recipe-card-content">
            <div class="recipe-card-title">${recipe.title}</div>
            <div class="recipe-card-meta">
                <span class="recipe-badge">${recipe.category}</span>
                <span class="recipe-badge">${recipe.cuisine}</span>
            </div>
            <div class="recipe-rating">
                ${'⭐'.repeat(Math.floor(recipe.rating))} (${recipe.reviews})
            </div>
            <div class="recipe-card-description">${recipe.description}</div>
            <div class="recipe-card-footer">
                <span class="recipe-time">⏱️ ${totalTime} min</span>
                <button class="view-btn" onclick="viewRecipe(${recipe.id})">View Recipe</button>
            </div>
        </div>
    `;

    return card;
}

// ============================================
// FILTERING AND SORTING
// ============================================

function getFilteredRecipes(recipesArray = null) {
    let filtered = recipesArray ? [...recipesArray] : [...recipesData];

    // Search filter
    const searchTerm = document.getElementById('search')?.value?.toLowerCase() || '';
    if (searchTerm) {
        filtered = filtered.filter(recipe =>
            recipe.title.toLowerCase().includes(searchTerm) ||
            recipe.ingredients.some(ing => ing.name.toLowerCase().includes(searchTerm))
        );
    }

    // Category filter
    const category = document.getElementById('categoryFilter')?.value || '';
    if (category) {
        filtered = filtered.filter(r => r.category === category);
    }

    // Cuisine filter
    const cuisine = document.getElementById('cuisineFilter')?.value || '';
    if (cuisine) {
        filtered = filtered.filter(r => r.cuisine === cuisine);
    }

    // Dietary filter
    const dietary = document.getElementById('dietaryFilter')?.value || '';
    if (dietary) {
        filtered = filtered.filter(r => r.dietary.includes(dietary));
    }

    // Cooking time filter
    const maxTime = document.getElementById('timeFilter')?.value || '';
    if (maxTime) {
        filtered = filtered.filter(r => (r.prep_time + r.cook_time) <= parseInt(maxTime));
    }

    // Difficulty filter
    const difficulty = document.getElementById('difficultyFilter')?.value || '';
    if (difficulty) {
        filtered = filtered.filter(r => r.difficulty === difficulty);
    }

    // Sort
    const sortBy = document.getElementById('sortSelect')?.value || 'name';
    if (sortBy === 'name') {
        filtered.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === 'rating') {
        filtered.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'time') {
        filtered.sort((a, b) => (a.prep_time + a.cook_time) - (b.prep_time + b.cook_time));
    }

    return filtered;
}

function applyFilters() {
    loadRecipes();
}

function resetFilters() {
    document.getElementById('search').value = '';
    document.getElementById('categoryFilter').value = '';
    document.getElementById('cuisineFilter').value = '';
    document.getElementById('dietaryFilter').value = '';
    document.getElementById('timeFilter').value = '';
    document.getElementById('difficultyFilter').value = '';
    document.getElementById('sortSelect').value = 'name';
    loadRecipes();
}

// ============================================
// RECIPE DETAIL VIEW
// ============================================

function viewRecipe(recipeId) {
    currentRecipeId = recipeId;
    
    // Look for recipe in both default and user recipes
    const userRecipes = loadFromStorage('userRecipes', []);
    const allRecipes = [...recipesData, ...userRecipes];
    const recipe = allRecipes.find(r => r.id === recipeId);

    if (!recipe) return;

    // Populate header
    document.getElementById('detailTitle').textContent = recipe.title;
    document.getElementById('detailEmoji').textContent = getFoodEmoji(recipe.title);
    document.getElementById('detailRating').textContent = '⭐'.repeat(Math.floor(recipe.rating));
    document.getElementById('detailReviewCount').textContent = `(${recipe.reviews} reviews)`;
    document.getElementById('detailPrepTime').textContent = `${recipe.prep_time} min`;
    document.getElementById('detailCookTime').textContent = `${recipe.cook_time} min`;
    document.getElementById('detailServes').textContent = `${recipe.serves} people`;
    document.getElementById('detailDifficulty').textContent = recipe.difficulty;

    // Populate ingredients
    document.getElementById('ingredientsList').innerHTML = recipe.ingredients
        .map(ing => `
            <div class="ingredient-item">
                <span class="ingredient-name">✓ ${ing.name}</span>
                <span class="ingredient-quantity">${ing.quantity} ${ing.unit}</span>
            </div>
        `).join('');

    // Populate steps
    document.getElementById('stepsList').innerHTML = recipe.steps
        .map(step => `
            <div class="step-item" data-step="${step.number}">
                <div class="step-number">${step.number}</div>
                <div class="step-content">
                    <div class="step-description">${step.description}</div>
                    <div class="step-time">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-4.5-4.5 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z"/>
                        </svg>
                        ${step.time} minutes
                    </div>
                </div>
            </div>
        `).join('');

    // Add click handlers for step completion
    const stepItems = document.querySelectorAll('#stepsList .step-item');
    stepItems.forEach(item => {
        item.addEventListener('click', function() {
            this.classList.toggle('completed');
            updateProgressIndicator();
        });
    });

    // Populate nutrition
    const nut = recipe.nutrition;
    document.getElementById('nutritionInfo').innerHTML = `
        <div class="nutrition-item">
            <div class="nutrition-label">Calories</div>
            <div class="nutrition-value">${nut.calories}</div>
        </div>
        <div class="nutrition-item">
            <div class="nutrition-label">Protein</div>
            <div class="nutrition-value">${nut.protein}g</div>
        </div>
        <div class="nutrition-item">
            <div class="nutrition-label">Carbs</div>
            <div class="nutrition-value">${nut.carbs}g</div>
        </div>
        <div class="nutrition-item">
            <div class="nutrition-label">Fat</div>
            <div class="nutrition-value">${nut.fat}g</div>
        </div>
        <div class="nutrition-item">
            <div class="nutrition-label">Fiber</div>
            <div class="nutrition-value">${nut.fiber}g</div>
        </div>
        <div class="nutrition-item">
            <div class="nutrition-label">Sodium</div>
            <div class="nutrition-value">${nut.sodium}mg</div>
        </div>
    `;

    // Dietary labels
    document.getElementById('dietaryLabels').innerHTML = recipe.dietary
        .map(diet => `<span class="dietary-badge">${diet}</span>`)
        .join('');

    // Load reviews
    loadReviews(recipeId);

    // Update favorite button
    updateFavoriteButton(recipeId);

    // Reset tabs
    switchTab('ingredients');

    // Initialize progress indicator
    updateProgressIndicator();

    // Show modal
    document.getElementById('recipeModal').classList.add('active');
}

// Update progress indicator for recipe steps
function updateProgressIndicator() {
    const steps = document.querySelectorAll('#stepsList .step-item');
    const completedSteps = document.querySelectorAll('#stepsList .step-item.completed');
    const progress = steps.length > 0 ? (completedSteps.length / steps.length) * 100 : 0;

    // Update or create progress bar
    let progressBar = document.querySelector('.recipe-progress');
    if (!progressBar) {
        progressBar = document.createElement('div');
        progressBar.className = 'recipe-progress';
        const stepsTab = document.getElementById('steps-tab');
        if (stepsTab) {
            const stepsHeader = stepsTab.querySelector('h3');
            if (stepsHeader) {
                stepsHeader.insertAdjacentElement('afterend', progressBar);
            }
        }
    }

    progressBar.innerHTML = `
        <div class="progress-container">
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${progress}%"></div>
            </div>
            <span class="progress-text">${completedSteps.length}/${steps.length} steps completed</span>
        </div>
    `;
}

function getDietaryBadges(recipe) {
    return recipe.dietary.slice(0, 2).map(d => `<span class="dietary-badge">${d}</span>`).join('');
}

function getFoodEmoji(recipeName) {
    const emojiMap = {
        'Paneer Butter Masala': '🍛',
        'Vegetable Fried Rice': '🍚',
        'Spaghetti Carbonara': '🍝',
        'Chicken Tikka Masala': '🍗',
        'Margherita Pizza': '🍕',
        'Thai Green Curry': '🌶️',
        'Chocolate Cake': '🍰',
        'Biryani': '🍲'
    };
    return emojiMap[recipeName] || '🍽️';
}

function getCardBackground(recipeId) {
    const backgrounds = [
        'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',      // Purple - Paneer
        'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',      // Pink - Rice
        'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',      // Orange-Yellow - Pasta
        'linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%)',      // Red - Chicken
        'linear-gradient(135deg, #f5576c 0%, #f093fb 100%)',      // Pink-Purple - Pizza
        'linear-gradient(135deg, #ff9a56 0%, #ff6a88 100%)',      // Orange-Red - Curry
        'linear-gradient(135deg, #8b4513 0%, #d2691e 100%)',      // Brown - Cake
        'linear-gradient(135deg, #feca57 0%, #ff9ff3 100%)'       // Yellow-Pink - Biryani
    ];
    return backgrounds[(recipeId - 1) % backgrounds.length];
}

function switchTab(tabName) {
    // Hide all tabs
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Show selected tab
    document.getElementById(`${tabName}-tab`).classList.add('active');
    event.target.classList.add('active');
}

function closeRecipeModal() {
    document.getElementById('recipeModal').classList.remove('active');
}

// ============================================
// FAVORITES
// ============================================

function toggleFavorite() {
    if (!currentUser) {
        alert('Please login first!');
        return;
    }

    const index = userFavorites.indexOf(currentRecipeId);
    if (index > -1) {
        userFavorites.splice(index, 1);
    } else {
        userFavorites.push(currentRecipeId);
    }

    saveToStorage('userFavorites', userFavorites);
    updateFavoriteButton(currentRecipeId);
}

function updateFavoriteButton(recipeId) {
    const btn = document.getElementById('favBtn');
    if (userFavorites.includes(recipeId)) {
        btn.style.backgroundColor = '#FF6B6B';
        btn.textContent = '❤️ Remove from Favorites';
    } else {
        btn.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
        btn.textContent = '❤️ Add to Favorites';
    }
}

function loadFavorites() {
    const grid = document.getElementById('favoritesList');
    grid.innerHTML = '';

    if (userFavorites.length === 0) {
        grid.innerHTML = '<div class="empty-state"><p>💔 No favorite recipes yet</p></div>';
        return;
    }

    // Load user recipes and merge with default recipes
    const userRecipes = loadFromStorage('userRecipes', []);
    const allRecipes = [...recipesData, ...userRecipes];
    
    const favRecipes = allRecipes.filter(r => userFavorites.includes(r.id));
    favRecipes.forEach(recipe => {
        grid.appendChild(createRecipeCard(recipe));
    });
}

// ============================================
// REVIEWS AND RATINGS
// ============================================

function setRating(rating) {
    currentRating = rating;
    document.querySelectorAll('.star').forEach((star, idx) => {
        if (idx < rating) {
            star.classList.add('highlighted');
        } else {
            star.classList.remove('highlighted');
        }
    });
}

function submitReview() {
    if (!currentUser) {
        alert('Please login first!');
        return;
    }

    if (currentRating === 0) {
        alert('Please select a rating!');
        return;
    }

    const comment = document.getElementById('reviewComment').value;

    if (!userReviews[currentRecipeId]) {
        userReviews[currentRecipeId] = [];
    }

    userReviews[currentRecipeId].push({
        user: currentUser.username,
        rating: currentRating,
        comment: comment,
        date: new Date().toLocaleDateString()
    });

    saveToStorage('userReviews', userReviews);

    // Clear form
    document.getElementById('reviewComment').value = '';
    setRating(0);

    alert('✅ Review submitted successfully!');
    loadReviews(currentRecipeId);
}

function loadReviews(recipeId) {
    const reviewsList = document.getElementById('reviewsList');
    const reviews = userReviews[recipeId] || [];

    if (reviews.length === 0) {
        reviewsList.innerHTML = '<p style="color: #999; text-align: center;">No reviews yet. Be the first to review!</p>';
        return;
    }

    reviewsList.innerHTML = reviews.map(review => `
        <div class="review-item">
            <div class="review-header">
                <span class="review-user">👤 ${review.user}</span>
                <span class="review-rating">${'⭐'.repeat(review.rating)}</span>
            </div>
            <p class="review-comment">${review.comment}</p>
            <small style="color: #999;">${review.date}</small>
        </div>
    `).join('');
}

// ============================================
// SEARCH LISTENER
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search');
    if (searchInput) {
        searchInput.addEventListener('keyup', applyFilters);
    }

    // Load saved user
    currentUser = loadFromStorage('currentUser', null);
    if (currentUser) {
        const usernameField = document.getElementById('username');
        const emailField = document.getElementById('email');
        if (usernameField) usernameField.value = currentUser.username;
        if (emailField) emailField.value = currentUser.email;
    }
    
    // Ensure all input fields are properly initialized
    const inputs = document.querySelectorAll('.form-input');
    inputs.forEach(input => {
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                loginUser();
            }
        });
    });
});

// ============================================
// ADD RECIPE FUNCTIONALITY
// ============================================

// Add Ingredient Row
function addIngredient() {
    const container = document.getElementById('ingredientsContainer');
    const ingredientRow = document.createElement('div');
    ingredientRow.className = 'ingredient-row';
    ingredientRow.innerHTML = `
        <input type="text" class="ingredient-name" placeholder="Ingredient name" required>
        <input type="number" class="ingredient-quantity" step="0.01" placeholder="Quantity" required>
        <input type="text" class="ingredient-unit" placeholder="Unit (g, ml, cups, etc.)" required>
        <button type="button" class="btn-remove" onclick="removeIngredient(this)">❌</button>
    `;
    container.appendChild(ingredientRow);
}

// Remove Ingredient Row
function removeIngredient(button) {
    const row = button.parentElement;
    if (document.querySelectorAll('.ingredient-row').length > 1) {
        row.remove();
    } else {
        alert('You must have at least one ingredient!');
    }
}

// Add Cooking Step
function addStep() {
    const container = document.getElementById('stepsContainer');
    const stepCount = container.children.length + 1;
    const stepRow = document.createElement('div');
    stepRow.className = 'step-row';
    stepRow.innerHTML = `
        <span class="step-number">${stepCount}.</span>
        <textarea class="step-description" placeholder="Describe this cooking step..." rows="2" required></textarea>
        <input type="number" class="step-time" placeholder="Time (min)" min="1">
        <button type="button" class="btn-remove" onclick="removeStep(this)">❌</button>
    `;
    container.appendChild(stepRow);
    updateStepNumbers();
}

// Remove Cooking Step
function removeStep(button) {
    const row = button.parentElement;
    if (document.querySelectorAll('.step-row').length > 1) {
        row.remove();
        updateStepNumbers();
    } else {
        alert('You must have at least one cooking step!');
    }
}

// Update Step Numbers
function updateStepNumbers() {
    const stepRows = document.querySelectorAll('.step-row');
    stepRows.forEach((row, index) => {
        row.querySelector('.step-number').textContent = `${index + 1}.`;
    });
}

// Reset Form
function resetForm() {
    document.getElementById('addRecipeForm').reset();
    
    // Reset ingredients to one row
    const ingredientsContainer = document.getElementById('ingredientsContainer');
    ingredientsContainer.innerHTML = `
        <div class="ingredient-row">
            <input type="text" class="ingredient-name" placeholder="Ingredient name" required>
            <input type="number" class="ingredient-quantity" step="0.01" placeholder="Quantity" required>
            <input type="text" class="ingredient-unit" placeholder="Unit (g, ml, cups, etc.)" required>
            <button type="button" class="btn-remove" onclick="removeIngredient(this)">❌</button>
        </div>
    `;
    
    // Reset steps to one row
    const stepsContainer = document.getElementById('stepsContainer');
    stepsContainer.innerHTML = `
        <div class="step-row">
            <span class="step-number">1.</span>
            <textarea class="step-description" placeholder="Describe this cooking step..." rows="2" required></textarea>
            <input type="number" class="step-time" placeholder="Time (min)" min="1">
            <button type="button" class="btn-remove" onclick="removeStep(this)">❌</button>
        </div>
    `;
}

// Handle Add Recipe Form Submission
document.getElementById('addRecipeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Check if user is logged in
    if (!currentUser) {
        alert('Please login first to add a recipe!');
        showSection('auth');
        return;
    }
    
    // Collect form data
    const recipeData = {
        id: Date.now(), // Simple ID generation
        title: document.getElementById('recipeTitle').value.trim(),
        category: document.getElementById('recipeCategory').value,
        cuisine: document.getElementById('recipeCuisine').value,
        description: document.getElementById('recipeDescription').value.trim(),
        prep_time: parseInt(document.getElementById('prepTime').value),
        cook_time: parseInt(document.getElementById('cookTime').value),
        serves: parseInt(document.getElementById('serves').value),
        difficulty: document.getElementById('recipeDifficulty').value,
        rating: 0,
        reviews: 0,
        created_by: currentUser.username,
        ingredients: [],
        steps: [],
        nutrition: {},
        dietary: []
    };
    
    // Collect ingredients
    const ingredientRows = document.querySelectorAll('.ingredient-row');
    ingredientRows.forEach(row => {
        const name = row.querySelector('.ingredient-name').value.trim();
        const quantity = parseFloat(row.querySelector('.ingredient-quantity').value);
        const unit = row.querySelector('.ingredient-unit').value.trim();
        
        if (name && quantity && unit) {
            recipeData.ingredients.push({
                name: name,
                quantity: quantity,
                unit: unit
            });
        }
    });
    
    // Collect cooking steps
    const stepRows = document.querySelectorAll('.step-row');
    stepRows.forEach((row, index) => {
        const description = row.querySelector('.step-description').value.trim();
        const time = parseInt(row.querySelector('.step-time').value) || 0;
        
        if (description) {
            recipeData.steps.push({
                number: index + 1,
                description: description,
                time: time
            });
        }
    });
    
    // Collect nutrition data (optional)
    const calories = document.getElementById('calories').value;
    const protein = document.getElementById('protein').value;
    const carbs = document.getElementById('carbs').value;
    const fat = document.getElementById('fat').value;
    const fiber = document.getElementById('fiber').value;
    const sodium = document.getElementById('sodium').value;
    
    if (calories || protein || carbs || fat || fiber || sodium) {
        recipeData.nutrition = {
            calories: calories ? parseInt(calories) : 0,
            protein: protein ? parseFloat(protein) : 0,
            carbs: carbs ? parseFloat(carbs) : 0,
            fat: fat ? parseFloat(fat) : 0,
            fiber: fiber ? parseFloat(fiber) : 0,
            sodium: sodium ? parseInt(sodium) : 0
        };
    }
    
    // Collect dietary information
    const dietaryCheckboxes = document.querySelectorAll('.dietary-checkboxes input[type="checkbox"]:checked');
    dietaryCheckboxes.forEach(checkbox => {
        recipeData.dietary.push(checkbox.value);
    });
    
    // Validate required fields
    if (!recipeData.title || !recipeData.category || !recipeData.cuisine || 
        !recipeData.description || recipeData.ingredients.length === 0 || 
        recipeData.steps.length === 0) {
        alert('Please fill in all required fields!');
        return;
    }
    
    // Add recipe to data
    recipesData.push(recipeData);
    
    // Save to localStorage
    saveToStorage('userRecipes', recipesData);
    
    // Show success message
    alert(`Recipe "${recipeData.title}" added successfully!`);
    
    // Reset form and go back to recipes
    resetForm();
    showSection('recipes');
});