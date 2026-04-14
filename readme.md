# 🍲 RecipeHub - Cooking Recipe Database

A comprehensive, fully-functional cooking recipe database website with advanced search, filtering, user authentication, ratings, and nutritional information.

## 📋 Features

### 1. **Complete Recipe Database**
- 8 pre-loaded recipes with detailed information
- Recipes organized by category, cuisine, and difficulty level
- Each recipe includes:
  - Preparation and cooking times
  - Ingredient lists with quantities
  - Step-by-step cooking instructions
  - Complete nutritional information
  - Serving suggestions
  - Dietary labels

### 2. **Advanced Search & Filtering**
- **Search**: Find recipes by name or ingredient
- **Filter by**:
  - Category (Main Course, Dessert, etc.)
  - Cuisine (Indian, Italian, Asian, Thai, Western)
  - Dietary Preference (Vegetarian, Vegan, Gluten-Free, High-Protein)
  - Cooking Time (Quick, Medium, Slow)
  - Difficulty Level (Easy, Medium, Hard)
- **Sort Options**:
  - By Recipe Name
  - By Rating
  - By Cooking Time

### 3. **User Authentication System**
- Simple login/registration system
- User profile management
- Session persistence using localStorage
- User-specific favorites and reviews

### 4. **Review System**
- 5-star rating system
- Text comments on recipes
- View all reviews for each recipe
- Track reviewer names and dates
- Reviews stored per user

### 5. **Favorites Management**
- Add/remove recipes to personal favorites
- Dedicated favorites section
- Quick access to most-loved recipes

### 6. **Nutritional Information Display**
For each recipe, displays:
- Calories per serving
- Protein (g)
- Carbohydrates (g)
- Fat (g)
- Fiber (g)
- Sodium (mg)
- Dietary labels and allergen information

## 🎯 How to Use

### Getting Started
1. Open `index.html` in a web browser
2. Navigate to "Account" section to login
3. Enter any username, email, and password (they're stored locally)
4. Click "Explore Recipes" to browse

### Browsing Recipes
1. Use the search bar to find recipes by name or ingredient
2. Apply multiple filters at once (e.g., "Vegetarian + Under 30 min")
3. Sort results by name, rating, or cooking time
4. Click "View Recipe" on any card to see full details

### Viewing Recipe Details
The recipe modal displays:
- **Ingredients Tab**: All ingredients with quantities
- **Steps Tab**: Numbered cooking steps with time estimates
- **Nutrition Tab**: Complete nutritional breakdown
- **Reviews Tab**: User ratings and comments

### Adding Reviews
1. Open any recipe
2. Go to "Reviews" tab
3. Click stars to rate (1-5)
4. Write your comment
5. Click "Submit Review"

### Managing Favorites
1. Click "Add to Favorites" button in recipe details
2. Access all favorites from "Favorites" section in navigation
3. Remove by clicking the heart button again

## 📊 Database Schema

### Tables (SQL)
1. **Users** - User accounts and authentication
2. **Recipes** - Recipe information
3. **Ingredients** - Recipe ingredients
4. **CookingSteps** - Step-by-step instructions
5. **Nutrition** - Nutritional information
6. **DietaryInfo** - Dietary labels and restrictions
7. **Reviews** - User ratings and comments
8. **Favorites** - User's favorite recipes

## 🏗️ Project Structure

```
DBMS Project/
├── index.html          # Main HTML file with all sections
├── style.css           # Complete styling (responsive design)
├── script.js           # All JavaScript functionality
├── database.sql        # Complete SQL schema with sample data
├── readme.md           # This file
└── php-backend.php     # Optional PHP backend (for server deployment)
```

## 🎨 Technologies Used

- **Frontend**:
  - HTML5 (Semantic markup)
  - CSS3 (Grid, Flexbox, Gradients, Animations)
  - JavaScript (ES6+, LocalStorage API)

- **Backend** (Optional):
  - PHP (for server deployment)
  - MySQL Database

## 🚀 Deployment

### Local Development
Simply open `index.html` in any modern web browser. No server required for basic functionality.

### Server Deployment
For a full-featured deployment with a real database:

1. **Setup Database**:
   ```sql
   CREATE DATABASE RecipeDB;
   -- Run database.sql to create all tables and insert sample data
   ```

2. **Configure PHP**:
   - Update database credentials in `php-backend.php`
   - Upload files to your web server

3. **Connect Frontend**:
   - Modify `script.js` to make API calls to PHP backend instead of using localStorage

## 🔒 Security Features

- Form validation on all inputs
- Safe local storage for sensitive data
- SQL prepared statements (in PHP backend)
- CSRF protection ready (in PHP backend)

## 📱 Responsive Design

- Fully responsive on desktop, tablet, and mobile
- Adaptive grid layout
- Touch-friendly buttons and controls
- Optimized images and lazy loading ready

## 🎯 Key Functionalities Implemented

✅ **Recipe Management**
- Store diverse recipe collection
- Track ingredients, preparation steps, cooking times
- Maintain dietary information
- Display nutritional data per recipe

✅ **User Interaction**
- User authentication and login
- Leave reviews and ratings
- Comment on recipes
- Browse other user reviews

✅ **Search & Discovery**
- Search by recipe name
- Search by ingredient
- Filter by multiple criteria
- Sort by rating, time, name

✅ **Nutritional Information**
- Complete macro/micronutrient breakdown
- Calorie counts per serving
- Dietary labels
- Allergen information

## 📝 Sample Recipes Included

1. **Paneer Butter Masala** - Indian, Medium difficulty
2. **Vegetable Fried Rice** - Asian, Easy
3. **Spaghetti Carbonara** - Italian, Easy
4. **Chicken Tikka Masala** - Indian, Medium
5. **Margherita Pizza** - Italian, Medium
6. **Thai Green Curry** - Thai, Medium
7. **Chocolate Cake** - Western, Medium
8. **Biryani** - Indian, Hard

## 🔧 Customization

### Adding New Recipes
Edit `script.js` and add to `recipesData` array:
```javascript
{
    id: 9,
    title: 'Recipe Name',
    category: 'Main Course',
    cuisine: 'Cuisine Name',
    description: 'Description',
    prep_time: 15,
    cook_time: 30,
    serves: 4,
    difficulty: 'Easy',
    rating: 4.5,
    reviews: 0,
    ingredients: [...],
    steps: [...],
    nutrition: {...},
    dietary: [...]
}
```

### Styling
Modify CSS variables in `style.css`:
```css
:root {
    --primary-color: #FF6B6B;
    --secondary-color: #4ECDC4;
    --accent-color: #FFE66D;
    /* ... more colors ... */
}
```

## 🐛 Troubleshooting

**Reviews not saving?**
- Check browser's localStorage is enabled
- Try incognito/private mode

**Filters not working?**
- Clear browser cache
- Ensure all recipe data is loaded
- Check browser console for errors

**Styling looks off?**
- Update browser (CSS Grid requires modern browser)
- Check for conflicting extensions

## 📧 Support

For issues or feature requests, please check:
1. Browser console for errors (F12)
2. localStorage content (DevTools > Application > LocalStorage)
3. Recipe data in script.js

## 📄 License

This project is open source and available for educational purposes.

## 🎓 Learning Outcomes

This project demonstrates:
- Full-stack web development concepts
- Database design and normalization
- User interface design best practices
- Responsive web design
- JavaScript ES6+ features
- LocalStorage and sessions
- Search and filter algorithms
- Rating and review systems

---

**Happy Cooking! 🍽️👨‍🍳** 

Enjoy exploring delicious recipes and sharing your culinary experiences!
