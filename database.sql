CREATE DATABASE RecipeDB;
USE RecipeDB;

-- Users Table
CREATE TABLE Users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(100) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Recipes Table
CREATE TABLE Recipes (
    recipe_id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(200) NOT NULL,
    category VARCHAR(50) NOT NULL,
    cuisine VARCHAR(50),
    description TEXT,
    preparation_time INT,
    cooking_time INT,
    total_time INT,
    serves INT,
    difficulty_level ENUM('Easy', 'Medium', 'Hard'),
    created_by INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (created_by) REFERENCES Users(user_id)
);

-- Ingredients Table
CREATE TABLE Ingredients (
    ingredient_id INT PRIMARY KEY AUTO_INCREMENT,
    recipe_id INT NOT NULL,
    ingredient_name VARCHAR(150),
    quantity DECIMAL(10, 2),
    unit VARCHAR(50),
    FOREIGN KEY (recipe_id) REFERENCES Recipes(recipe_id) ON DELETE CASCADE
);

-- Cooking Steps Table
CREATE TABLE CookingSteps (
    step_id INT PRIMARY KEY AUTO_INCREMENT,
    recipe_id INT NOT NULL,
    step_number INT,
    description TEXT,
    time_required INT,
    FOREIGN KEY (recipe_id) REFERENCES Recipes(recipe_id) ON DELETE CASCADE
);

-- Nutrition Information Table
CREATE TABLE Nutrition (
    nutrition_id INT PRIMARY KEY AUTO_INCREMENT,
    recipe_id INT NOT NULL UNIQUE,
    calories DECIMAL(10, 2),
    protein_g DECIMAL(10, 2),
    carbs_g DECIMAL(10, 2),
    fat_g DECIMAL(10, 2),
    fiber_g DECIMAL(10, 2),
    sodium_mg DECIMAL(10, 2),
    per_serving VARCHAR(50),
    FOREIGN KEY (recipe_id) REFERENCES Recipes(recipe_id) ON DELETE CASCADE
);

-- Dietary Information Table
CREATE TABLE DietaryInfo (
    dietary_id INT PRIMARY KEY AUTO_INCREMENT,
    recipe_id INT NOT NULL,
    dietary_type VARCHAR(50),
    FOREIGN KEY (recipe_id) REFERENCES Recipes(recipe_id) ON DELETE CASCADE
);

-- Reviews and Ratings Table
CREATE TABLE Reviews (
    review_id INT PRIMARY KEY AUTO_INCREMENT,
    recipe_id INT NOT NULL,
    user_id INT NOT NULL,
    rating INT CHECK (rating >= 1 AND rating <= 5),
    comment TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (recipe_id) REFERENCES Recipes(recipe_id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE
);

-- Favorites Table
CREATE TABLE Favorites (
    favorite_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    recipe_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (recipe_id) REFERENCES Recipes(recipe_id) ON DELETE CASCADE,
    UNIQUE KEY unique_favorite (user_id, recipe_id)
);

-- Sample Data
INSERT INTO Users (username, email, password_hash) VALUES
('chef_john', 'john@example.com', 'hash1'),
('home_cook', 'cook@example.com', 'hash2');

INSERT INTO Recipes (title, category, cuisine, description, preparation_time, cooking_time, serves, difficulty_level, created_by) VALUES
('Paneer Butter Masala', 'Main Course', 'Indian', 'Creamy tomato-based curry with soft paneer cubes', 15, 30, 4, 'Medium', 1),
('Vegetable Fried Rice', 'Main Course', 'Asian', 'Quick and delicious fried rice with mixed vegetables', 10, 15, 2, 'Easy', 1),
('Spaghetti Carbonara', 'Main Course', 'Italian', 'Classic Italian pasta with creamy sauce', 10, 20, 2, 'Easy', 2),
('Chicken Tikka Masala', 'Main Course', 'Indian', 'Tender chicken pieces in aromatic spiced sauce', 20, 40, 4, 'Medium', 1),
('Margherita Pizza', 'Main Course', 'Italian', 'Classic pizza with fresh mozzarella and basil', 15, 20, 4, 'Medium', 2),
('Thai Green Curry', 'Main Course', 'Thai', 'Spicy and aromatic curry with vegetables', 15, 20, 3, 'Medium', 1),
('Chocolate Cake', 'Dessert', 'Western', 'Rich and moist chocolate cake', 20, 35, 8, 'Medium', 2),
('Biryani', 'Main Course', 'Indian', 'Fragrant rice dish with spices and meat', 30, 45, 6, 'Hard', 1);

INSERT INTO Ingredients (recipe_id, ingredient_name, quantity, unit) VALUES
(1, 'Paneer', 250, 'g'),
(1, 'Butter', 50, 'g'),
(1, 'Tomato', 400, 'g'),
(1, 'Cream', 100, 'ml'),
(2, 'Rice', 2, 'cups'),
(2, 'Vegetables', 300, 'g'),
(2, 'Soy Sauce', 3, 'tbsp'),
(3, 'Spaghetti', 200, 'g'),
(3, 'Eggs', 3, 'pieces'),
(3, 'Bacon', 100, 'g'),
(4, 'Chicken', 800, 'g'),
(4, 'Yogurt', 200, 'ml'),
(4, 'Tomato Sauce', 400, 'ml'),
(5, 'Pizza Dough', 500, 'g'),
(5, 'Mozzarella', 250, 'g'),
(5, 'Tomato Sauce', 200, 'ml'),
(6, 'Coconut Milk', 400, 'ml'),
(6, 'Green Curry Paste', 3, 'tbsp'),
(7, 'Flour', 200, 'g'),
(7, 'Chocolate', 200, 'g'),
(8, 'Basmati Rice', 2, 'cups'),
(8, 'Meat', 500, 'g'),
(8, 'Spices', 4, 'tbsp');

INSERT INTO CookingSteps (recipe_id, step_number, description, time_required) VALUES
(1, 1, 'Heat butter in a pan and add onions', 3),
(1, 2, 'Add tomato puree and cook until oil separates', 8),
(1, 3, 'Add paneer and cream, simmer for 5 minutes', 5),
(2, 1, 'Heat oil in a wok', 2),
(2, 2, 'Add vegetables and fry until tender-crisp', 5),
(2, 3, 'Add cooked rice and soy sauce, mix well', 8),
(3, 1, 'Boil water and cook spaghetti', 10),
(3, 2, 'Fry bacon until crispy', 5),
(3, 3, 'Mix eggs with cream and combine with pasta', 5),
(4, 1, 'Marinate chicken in yogurt and spices', 15),
(4, 2, 'Cook in oven at 200°C', 20),
(4, 3, 'Prepare sauce and combine', 20),
(5, 1, 'Spread pizza dough in pan', 5),
(5, 2, 'Add sauce and mozzarella', 5),
(5, 3, 'Bake at 220°C until golden', 15),
(6, 1, 'Heat coconut milk and curry paste', 3),
(6, 2, 'Add vegetables and simmer', 15),
(7, 1, 'Mix dry ingredients', 5),
(7, 2, 'Prepare chocolate mixture', 10),
(7, 3, 'Bake at 180°C for 35 minutes', 35),
(8, 1, 'Soak rice for 30 minutes', 30),
(8, 2, 'Cook meat with spices', 20),
(8, 3, 'Layer rice and meat, cook together', 25);

INSERT INTO Nutrition (recipe_id, calories, protein_g, carbs_g, fat_g, fiber_g, sodium_mg, per_serving) VALUES
(1, 350, 15, 25, 22, 2, 650, 'per serving'),
(2, 280, 8, 45, 6, 4, 450, 'per serving'),
(3, 420, 16, 48, 18, 2, 380, 'per serving'),
(4, 380, 35, 15, 20, 1, 720, 'per serving'),
(5, 290, 12, 38, 10, 2, 520, 'per slice'),
(6, 310, 14, 22, 18, 3, 680, 'per serving'),
(7, 450, 6, 58, 22, 2, 180, 'per slice'),
(8, 380, 22, 50, 10, 3, 840, 'per serving');

INSERT INTO DietaryInfo (recipe_id, dietary_type) VALUES
(1, 'Vegetarian'),
(1, 'Gluten-Free'),
(2, 'Vegan'),
(2, 'Gluten-Free'),
(3, 'Vegetarian'),
(4, 'High-Protein'),
(5, 'Vegetarian'),
(6, 'Vegan'),
(6, 'Gluten-Free'),
(7, 'Vegetarian'),
(8, 'High-Protein');

INSERT INTO Reviews (recipe_id, user_id, rating, comment) VALUES
(1, 1, 5, 'Amazing paneer butter masala! Just like a restaurant.'),
(1, 2, 4, 'Great recipe, a bit creamy but delicious'),
(2, 1, 5, 'Quick and tasty, perfect for weeknight dinner'),
(3, 2, 5, 'Authentic carbonara recipe, loved it!'),
(4, 2, 4, 'The chicken tikka masala was fantastic'),
(5, 1, 4, 'Great homemade pizza, crispy and delicious');
