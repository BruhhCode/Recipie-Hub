<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Set headers
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Database configuration
define('DB_HOST', 'localhost');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', '');
define('DB_NAME', 'RecipeDB');

// Create connection
$conn = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME);

// Check connection
if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(['error' => 'Database connection failed']);
    exit();
}

// Set charset
$conn->set_charset('utf8');

// Route handler
$request_method = $_SERVER['REQUEST_METHOD'];
$request_uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$request_parts = array_filter(explode('/', $request_uri));

// Simple routing
$action = end($request_parts);

switch ($action) {
    case 'recipes':
        handleRecipes($conn, $request_method);
        break;
    case 'recipe':
        handleSingleRecipe($conn, $request_method);
        break;
    case 'search':
        handleSearch($conn);
        break;
    case 'reviews':
        handleReviews($conn, $request_method);
        break;
    case 'users':
        handleUsers($conn, $request_method);
        break;
    case 'login':
        handleLogin($conn);
        break;
    case 'filter':
        handleFilter($conn);
        break;
    default:
        http_response_code(404);
        echo json_encode(['error' => 'Endpoint not found']);
}

$conn->close();

// ============================================
// RECIPE HANDLERS
// ============================================

function handleRecipes($conn, $method) {
    if ($method === 'GET') {
        // Get all recipes
        $sql = "SELECT r.*, 
                COUNT(DISTINCT rev.review_id) as review_count,
                AVG(rev.rating) as avg_rating
                FROM Recipes r
                LEFT JOIN Reviews rev ON r.recipe_id = rev.recipe_id
                GROUP BY r.recipe_id
                ORDER BY r.created_at DESC";
        
        $result = $conn->query($sql);
        
        if ($result) {
            $recipes = [];
            while ($row = $result->fetch_assoc()) {
                $recipes[] = enrichRecipe($conn, $row);
            }
            echo json_encode($recipes);
        } else {
            http_response_code(500);
            echo json_encode(['error' => $conn->error]);
        }
    } elseif ($method === 'POST') {
        // Add new recipe (admin only)
        $data = json_decode(file_get_contents('php://input'), true);
        
        if (validateRecipeData($data)) {
            $title = $conn->real_escape_string($data['title']);
            $category = $conn->real_escape_string($data['category']);
            $cuisine = $conn->real_escape_string($data['cuisine']);
            $description = $conn->real_escape_string($data['description']);
            $prep_time = (int)$data['prep_time'];
            $cook_time = (int)$data['cook_time'];
            $serves = (int)$data['serves'];
            $difficulty = $conn->real_escape_string($data['difficulty']);
            $created_by = (int)$data['created_by'];
            
            $sql = "INSERT INTO Recipes 
                    (title, category, cuisine, description, preparation_time, 
                     cooking_time, serves, difficulty_level, created_by) 
                    VALUES ('$title', '$category', '$cuisine', '$description', 
                            $prep_time, $cook_time, $serves, '$difficulty', $created_by)";
            
            if ($conn->query($sql)) {
                $recipe_id = $conn->insert_id;
                addIngredients($conn, $recipe_id, $data['ingredients']);
                addSteps($conn, $recipe_id, $data['steps']);
                addNutrition($conn, $recipe_id, $data['nutrition']);
                
                http_response_code(201);
                echo json_encode(['success' => true, 'recipe_id' => $recipe_id]);
            } else {
                http_response_code(500);
                echo json_encode(['error' => $conn->error]);
            }
        } else {
            http_response_code(400);
            echo json_encode(['error' => 'Invalid recipe data']);
        }
    }
}

function handleSingleRecipe($conn, $method) {
    $recipe_id = (int)$_GET['id'] ?? 0;
    
    if ($method === 'GET' && $recipe_id > 0) {
        $sql = "SELECT r.*, 
                COUNT(DISTINCT rev.review_id) as review_count,
                AVG(rev.rating) as avg_rating
                FROM Recipes r
                LEFT JOIN Reviews rev ON r.recipe_id = rev.recipe_id
                WHERE r.recipe_id = $recipe_id
                GROUP BY r.recipe_id";
        
        $result = $conn->query($sql);
        
        if ($result && $result->num_rows > 0) {
            $recipe = $result->fetch_assoc();
            $recipe = enrichRecipe($conn, $recipe);
            echo json_encode($recipe);
        } else {
            http_response_code(404);
            echo json_encode(['error' => 'Recipe not found']);
        }
    } elseif ($method === 'PUT' && $recipe_id > 0) {
        // Update recipe
        $data = json_decode(file_get_contents('php://input'), true);
        
        $title = $conn->real_escape_string($data['title'] ?? '');
        $description = $conn->real_escape_string($data['description'] ?? '');
        $cook_time = (int)($data['cook_time'] ?? 0);
        
        $sql = "UPDATE Recipes 
                SET title = '$title', description = '$description', 
                    cooking_time = $cook_time 
                WHERE recipe_id = $recipe_id";
        
        if ($conn->query($sql)) {
            echo json_encode(['success' => true]);
        } else {
            http_response_code(500);
            echo json_encode(['error' => $conn->error]);
        }
    } elseif ($method === 'DELETE' && $recipe_id > 0) {
        // Delete recipe
        $sql = "DELETE FROM Recipes WHERE recipe_id = $recipe_id";
        
        if ($conn->query($sql)) {
            echo json_encode(['success' => true]);
        } else {
            http_response_code(500);
            echo json_encode(['error' => $conn->error]);
        }
    }
}

// ============================================
// SEARCH & FILTER
// ============================================

function handleSearch($conn) {
    $query = $conn->real_escape_string($_GET['q'] ?? '');
    
    if (strlen($query) < 2) {
        echo json_encode(['error' => 'Search query too short']);
        return;
    }
    
    $sql = "SELECT r.*, 
            COUNT(DISTINCT rev.review_id) as review_count,
            AVG(rev.rating) as avg_rating
            FROM Recipes r
            LEFT JOIN Reviews rev ON r.recipe_id = rev.recipe_id
            LEFT JOIN Ingredients ing ON r.recipe_id = ing.recipe_id
            WHERE r.title LIKE '%$query%' 
            OR r.description LIKE '%$query%'
            OR ing.ingredient_name LIKE '%$query%'
            GROUP BY r.recipe_id
            LIMIT 20";
    
    $result = $conn->query($sql);
    
    if ($result) {
        $recipes = [];
        while ($row = $result->fetch_assoc()) {
            $recipes[] = enrichRecipe($conn, $row);
        }
        echo json_encode($recipes);
    }
}

function handleFilter($conn) {
    $filters = [
        'category' => $_GET['category'] ?? '',
        'cuisine' => $_GET['cuisine'] ?? '',
        'dietary' => $_GET['dietary'] ?? '',
        'max_time' => (int)($_GET['max_time'] ?? 0),
        'difficulty' => $_GET['difficulty'] ?? ''
    ];
    
    $sql = "SELECT r.*, 
            COUNT(DISTINCT rev.review_id) as review_count,
            AVG(rev.rating) as avg_rating
            FROM Recipes r
            LEFT JOIN Reviews rev ON r.recipe_id = rev.recipe_id
            LEFT JOIN DietaryInfo di ON r.recipe_id = di.recipe_id
            WHERE 1=1";
    
    if (!empty($filters['category'])) {
        $category = $conn->real_escape_string($filters['category']);
        $sql .= " AND r.category = '$category'";
    }
    
    if (!empty($filters['cuisine'])) {
        $cuisine = $conn->real_escape_string($filters['cuisine']);
        $sql .= " AND r.cuisine = '$cuisine'";
    }
    
    if (!empty($filters['dietary'])) {
        $dietary = $conn->real_escape_string($filters['dietary']);
        $sql .= " AND di.dietary_type = '$dietary'";
    }
    
    if ($filters['max_time'] > 0) {
        $sql .= " AND (r.preparation_time + r.cooking_time) <= {$filters['max_time']}";
    }
    
    if (!empty($filters['difficulty'])) {
        $difficulty = $conn->real_escape_string($filters['difficulty']);
        $sql .= " AND r.difficulty_level = '$difficulty'";
    }
    
    $sql .= " GROUP BY r.recipe_id ORDER BY r.title";
    
    $result = $conn->query($sql);
    
    if ($result) {
        $recipes = [];
        while ($row = $result->fetch_assoc()) {
            $recipes[] = enrichRecipe($conn, $row);
        }
        echo json_encode($recipes);
    }
}

// ============================================
// REVIEWS
// ============================================

function handleReviews($conn, $method) {
    if ($method === 'GET') {
        $recipe_id = (int)($_GET['recipe_id'] ?? 0);
        
        if ($recipe_id > 0) {
            $sql = "SELECT rev.*, u.username
                    FROM Reviews rev
                    JOIN Users u ON rev.user_id = u.user_id
                    WHERE rev.recipe_id = $recipe_id
                    ORDER BY rev.created_at DESC";
            
            $result = $conn->query($sql);
            $reviews = [];
            
            while ($row = $result->fetch_assoc()) {
                $reviews[] = $row;
            }
            
            echo json_encode($reviews);
        }
    } elseif ($method === 'POST') {
        $data = json_decode(file_get_contents('php://input'), true);
        
        $recipe_id = (int)$data['recipe_id'];
        $user_id = (int)$data['user_id'];
        $rating = (int)$data['rating'];
        $comment = $conn->real_escape_string($data['comment']);
        
        if ($rating >= 1 && $rating <= 5) {
            $sql = "INSERT INTO Reviews (recipe_id, user_id, rating, comment)
                    VALUES ($recipe_id, $user_id, $rating, '$comment')";
            
            if ($conn->query($sql)) {
                http_response_code(201);
                echo json_encode(['success' => true, 'review_id' => $conn->insert_id]);
            } else {
                http_response_code(500);
                echo json_encode(['error' => $conn->error]);
            }
        } else {
            http_response_code(400);
            echo json_encode(['error' => 'Invalid rating']);
        }
    }
}

// ============================================
// USER AUTHENTICATION
// ============================================

function handleUsers($conn, $method) {
    if ($method === 'POST') {
        $data = json_decode(file_get_contents('php://input'), true);
        
        $username = $conn->real_escape_string($data['username'] ?? '');
        $email = $conn->real_escape_string($data['email'] ?? '');
        
        if (strlen($username) < 3 || strlen($email) < 5) {
            http_response_code(400);
            echo json_encode(['error' => 'Invalid input']);
            return;
        }
        
        // Check if user exists
        $check_sql = "SELECT user_id FROM Users WHERE email = '$email'";
        $check_result = $conn->query($check_sql);
        
        if ($check_result->num_rows > 0) {
            http_response_code(409);
            echo json_encode(['error' => 'User already exists']);
        } else {
            $password_hash = password_hash($data['password'] ?? '', PASSWORD_DEFAULT);
            $sql = "INSERT INTO Users (username, email, password_hash)
                    VALUES ('$username', '$email', '$password_hash')";
            
            if ($conn->query($sql)) {
                http_response_code(201);
                echo json_encode(['success' => true, 'user_id' => $conn->insert_id]);
            } else {
                http_response_code(500);
                echo json_encode(['error' => $conn->error]);
            }
        }
    }
}

function handleLogin($conn) {
    $data = json_decode(file_get_contents('php://input'), true);
    
    $email = $conn->real_escape_string($data['email'] ?? '');
    
    $sql = "SELECT * FROM Users WHERE email = '$email'";
    $result = $conn->query($sql);
    
    if ($result && $result->num_rows > 0) {
        $user = $result->fetch_assoc();
        
        if (password_verify($data['password'] ?? '', $user['password_hash'])) {
            echo json_encode([
                'success' => true,
                'user_id' => $user['user_id'],
                'username' => $user['username'],
                'email' => $user['email']
            ]);
        } else {
            http_response_code(401);
            echo json_encode(['error' => 'Invalid credentials']);
        }
    } else {
        http_response_code(401);
        echo json_encode(['error' => 'User not found']);
    }
}

// ============================================
// HELPER FUNCTIONS
// ============================================

function enrichRecipe($conn, $recipe) {
    $recipe_id = $recipe['recipe_id'];
    
    // Get ingredients
    $ingredients = [];
    $ing_result = $conn->query("SELECT * FROM Ingredients WHERE recipe_id = $recipe_id");
    while ($row = $ing_result->fetch_assoc()) {
        $ingredients[] = $row;
    }
    $recipe['ingredients'] = $ingredients;
    
    // Get steps
    $steps = [];
    $steps_result = $conn->query("SELECT * FROM CookingSteps WHERE recipe_id = $recipe_id ORDER BY step_number");
    while ($row = $steps_result->fetch_assoc()) {
        $steps[] = $row;
    }
    $recipe['steps'] = $steps;
    
    // Get nutrition
    $nutrition_result = $conn->query("SELECT * FROM Nutrition WHERE recipe_id = $recipe_id");
    if ($nutrition_result && $nutrition_result->num_rows > 0) {
        $recipe['nutrition'] = $nutrition_result->fetch_assoc();
    }
    
    // Get dietary info
    $dietary = [];
    $dietary_result = $conn->query("SELECT dietary_type FROM DietaryInfo WHERE recipe_id = $recipe_id");
    while ($row = $dietary_result->fetch_assoc()) {
        $dietary[] = $row['dietary_type'];
    }
    $recipe['dietary'] = $dietary;
    
    return $recipe;
}

function addIngredients($conn, $recipe_id, $ingredients) {
    foreach ($ingredients as $ingredient) {
        $name = $conn->real_escape_string($ingredient['name']);
        $quantity = (float)$ingredient['quantity'];
        $unit = $conn->real_escape_string($ingredient['unit']);
        
        $sql = "INSERT INTO Ingredients (recipe_id, ingredient_name, quantity, unit)
                VALUES ($recipe_id, '$name', $quantity, '$unit')";
        $conn->query($sql);
    }
}

function addSteps($conn, $recipe_id, $steps) {
    foreach ($steps as $index => $step) {
        $description = $conn->real_escape_string($step['description']);
        $time = (int)$step['time'];
        $step_num = $index + 1;
        
        $sql = "INSERT INTO CookingSteps (recipe_id, step_number, description, time_required)
                VALUES ($recipe_id, $step_num, '$description', $time)";
        $conn->query($sql);
    }
}

function addNutrition($conn, $recipe_id, $nutrition) {
    $calories = (float)$nutrition['calories'];
    $protein = (float)$nutrition['protein'];
    $carbs = (float)$nutrition['carbs'];
    $fat = (float)$nutrition['fat'];
    $fiber = (float)$nutrition['fiber'];
    $sodium = (float)$nutrition['sodium'];
    
    $sql = "INSERT INTO Nutrition (recipe_id, calories, protein_g, carbs_g, fat_g, fiber_g, sodium_mg)
            VALUES ($recipe_id, $calories, $protein, $carbs, $fat, $fiber, $sodium)";
    $conn->query($sql);
}

function validateRecipeData($data) {
    return isset($data['title']) && 
           isset($data['category']) && 
           isset($data['ingredients']) && 
           isset($data['steps']) &&
           isset($data['nutrition']);
}

?>
