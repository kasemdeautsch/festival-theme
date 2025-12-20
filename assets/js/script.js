// Simple search logic in JavaScript

// Example recipe names (in a real project, this would come from your backend)
const availableRecipes = [
"fluffy berry pancakes",
"rainbow salad",
"creamy garlic pasta"
];

const searchForm = document.getElementById("recipeSearchForm");
const searchInput = document.getElementById("recipeSearchInput");

searchForm.addEventListener("submit", function (event) {
event.preventDefault();

const query = searchInput.value.trim().toLowerCase();

if (!query) {
alert("Please enter a recipe name to search.");
return;
}

const match = availableRecipes.find((name) =>
name.includes(query)
);

if (!match) {
// Error when entry is not available
alert("Sorry, this recipe is not available. Please try another name.");
return;
}

// In a real app, redirect to the recipe page
// For now just show a friendly message
alert("Great choice! Opening recipe: " + match);
// Example: window.location.href = "/recipes/" + match.replaceAll(" ", "-");
});
