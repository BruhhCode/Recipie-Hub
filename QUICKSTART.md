# 🚀 Quick Start Guide - RecipeHub

## Getting Started in 2 Minutes

### Step 1: Open the Website
Simply double-click `index.html` or drag it into your web browser. That's it!

### Step 2: Create Account
1. Click "Account" in the navigation
2. Enter:
   - Username: (any name you want)
   - Email: (any email format)
   - Password: (any password)
3. Click "Login"
4. You're logged in! 🎉

### Step 3: Explore Recipes
1. Click "Explore Recipes" or click "Recipes" in navbar
2. You'll see 8 sample recipes in card format:
   - 🍲 Paneer Butter Masala
   - 🍚 Vegetable Fried Rice
   - 🍝 Spaghetti Carbonara
   - 🍛 Chicken Tikka Masala
   - 🍕 Margherita Pizza
   - 🌶️ Thai Green Curry
   - 🍫 Chocolate Cake
   - 🍚 Biryani

### Step 4: Search & Filter
Use the search box at the top to find recipes by:
- Recipe name (e.g., "Paneer")
- Ingredient (e.g., "Chicken")

Use filter dropdowns to narrow by:
- **Category**: Main Course, Dessert
- **Cuisine**: Indian, Italian, Asian, Thai, Western
- **Diet**: Vegetarian, Vegan, Gluten-Free, High-Protein
- **Time**: Under 15/30/60 minutes
- **Difficulty**: Easy, Medium, Hard

### Step 5: View Recipe Details
Click "View Recipe" on any card to see:
- ✅ **Ingredients** - Complete ingredient list with quantities
- 👨‍🍳 **Steps** - Step-by-step cooking instructions with time
- 🥗 **Nutrition** - Calories, protein, carbs, fat, fiber, sodium
- ⭐ **Reviews** - User ratings and comments

### Step 6: Rate & Review
1. Go to "Reviews" tab
2. Click on stars (1-5) to rate
3. Write your comment (optional)
4. Click "Submit Review"
5. Your review appears immediately!

### Step 7: Save Favorites
1. Click "Add to Favorites" button in recipe details
2. Access all favorites from "❤️ Favorites" in navbar
3. Click button again to remove from favorites

## Features You Have

| Feature | Status | How to Use |
|---------|--------|-----------|
| Search Recipes | ✅ Ready | Use search bar for recipe name or ingredient |
| Filter Recipes | ✅ Ready | Use dropdown filters on left side |
| View Details | ✅ Ready | Click "View Recipe" button |
| Rate Recipes | ✅ Ready | Click stars in Reviews tab |
| Add Reviews | ✅ Ready | Write comment and submit |
| Save Favorites | ✅ Ready | Click heart button |
| User Account | ✅ Ready | Login section in Account tab |
| Nutrition Info | ✅ Ready | View in Nutrition tab |

## Sample Data Included

Pre-loaded recipes with:
- ✅ Ingredients with quantities
- ✅ Cooking steps
- ✅ Complete nutrition facts
- ✅ Dietary labels
- ✅ User reviews
- ✅ Ratings

## Data Storage

Your data is saved automatically in your browser:
- 📦 Login information
- ❤️ Favorite recipes
- ⭐ Your reviews and ratings

**Note**: Data is stored locally. It won't sync across devices or persist if you clear browser data.

## Keyboard Shortcuts

Quick tips:
- Click "Reset Filters" to clear all filters at once
- Sort results: Name | Rating | Cooking Time
- Use recipe cards to quickly compare recipes
- Modal closes automatically when you click ❌

## Troubleshooting

### Issue: Reviews not showing
✅ Solution: Make sure you're logged in before submitting

### Issue: Filters not working
✅ Solution: Check that search box is empty, then apply filters

### Issue: Website looks broken
✅ Solution: Clear browser cache (Ctrl+Shift+Delete) and refresh

### Issue: Lost my favorite recipes
✅ Solution: Sign in with the same account on the same browser

## Next Steps

### To Add More Recipes:
Edit `script.js`, find `recipesData` array, and add new recipe objects

### To Deploy on Server:
1. Set up MySQL database
2. Import `database.sql`
3. Configure `php-backend.php` with database credentials
4. Upload all files to web server
5. Modify `script.js` to call PHP API instead of using localStorage

### To Customize Colors:
Edit `style.css`:
```css
:root {
    --primary-color: #FF6B6B;      /* Red - main color */
    --secondary-color: #4ECDC4;    /* Teal - accent color */
    --accent-color: #FFE66D;       /* Yellow - highlights */
}
```

## Browser Requirements

Works best on:
- ✅ Chrome/Edge (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Mobile browsers

## File Descriptions

- **index.html** - Complete website structure
- **style.css** - Beautiful responsive styling
- **script.js** - All functionality (search, filter, auth, reviews)
- **database.sql** - Database schema for server deployment
- **php-backend.php** - Optional PHP API for server
- **readme.md** - Detailed technical documentation

## Tips for Best Experience

1. **Use Chrome** - Best performance and compatibility
2. **Try Different Cuisines** - Filter by Indian, Italian, Thai, etc.
3. **Read Reviews** - See what other users thought
4. **Check Nutrition** - Important health information
5. **Save Favorites** - Build your personal cookbook

## Support

If something isn't working:
1. Open browser console (F12)
2. Check for red error messages
3. Refresh the page
4. Try incognito/private mode
5. Clear localStorage and try again

---

## 🎉 You're All Set!

Start exploring and enjoy discovering amazing recipes! Share your reviews and build your favorite collection. Happy cooking! 👨‍🍳🍽️
