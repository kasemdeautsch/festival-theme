// Simple search logic in JavaScript

// Available recipes with their categories
const availableRecipes = [
  { name: "gingerbread pancakes", category: "breakfast" },
  { name: "pancakes", category: "breakfast" },
  { name: "cranberry orange baked oatmeal", category: "breakfast" },
  { name: "cranberry oatmeal", category: "breakfast" },
  { name: "oatmeal", category: "breakfast" },
  { name: "eggnog french toast", category: "breakfast" },
  { name: "french toast", category: "breakfast" },
  { name: "festive herb-roasted turkey", category: "lunch" },
  { name: "turkey", category: "lunch" },
  { name: "roasted turkey", category: "lunch" },
  { name: "chocolate cake", category: "dessert" },
  { name: "cake", category: "dessert" },
  { name: "berry cheesecake", category: "dessert" },
  { name: "cheesecake", category: "dessert" },
  { name: "festive cookies", category: "dessert" },
  { name: "cookies", category: "dessert" }
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

    const match = availableRecipes.find((recipe) =>
      recipe.name.includes(query)
    );

    if (!match) {
      alert("Sorry, recipe not found. Try: pancakes, oatmeal, french toast, turkey, cake, cheesecake, or cookies.");
      return;
    }

    // Redirect to the recipe page with the appropriate category
    window.location.href = "recipe.html#" + match.category;
  });
}
