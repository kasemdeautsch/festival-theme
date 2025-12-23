// Simple search logic in JavaScript

// Available recipes with their categories and keywords
const availableRecipes = [
  { name: "gingerbread pancakes", category: "breakfast", keywords: ["gingerbread", "pancake", "pancakes", "breakfast", "spice", "spiced"] },
  { name: "cranberry orange baked oatmeal", category: "breakfast", keywords: ["cranberry", "orange", "oatmeal", "oats", "baked", "breakfast"] },
  { name: "eggnog french toast", category: "breakfast", keywords: ["eggnog", "french", "toast", "breakfast", "bread"] },
  { name: "festive herb-roasted turkey", category: "lunch", keywords: ["turkey", "roasted", "roast", "herb", "festive", "lunch", "holiday"] },
  { name: "chocolate cake", category: "dessert", keywords: ["chocolate", "cake", "dessert", "sweet"] },
  { name: "berry cheesecake", category: "dessert", keywords: ["berry", "cheesecake", "cheese", "cake", "dessert", "sweet"] },
  { name: "festive cookies", category: "dessert", keywords: ["cookies", "cookie", "festive", "dessert", "sweet", "baked"] }
];

const searchForm = document.getElementById("recipeSearchForm");
const searchInput = document.getElementById("recipeSearchInput");

if (searchForm && searchInput) {
  searchForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const query = searchInput.value.trim().toLowerCase();

    if (!query) {
      alert("Please enter a recipe name to search.");
      return;
    }

    // Search by name or keywords
    const match = availableRecipes.find((recipe) =>
      recipe.name.toLowerCase().includes(query) ||
      recipe.keywords.some(keyword => keyword.toLowerCase().includes(query) || query.includes(keyword.toLowerCase()))
    );

    if (!match) {
      alert("Sorry, recipe not found. Try: pancakes, oatmeal, french toast, turkey, cake, cheesecake, or cookies.");
      return;
    }

    // Redirect to the recipe page with the appropriate category
    const targetUrl = "recipe.html#" + match.category;
    window.location.href = targetUrl;
    
    // If already on recipe.html, trigger the category switch
    if (window.location.pathname.includes('recipe.html') && typeof switchCategory === 'function') {
      setTimeout(() => switchCategory(match.category), 100);
    }
  });
}

