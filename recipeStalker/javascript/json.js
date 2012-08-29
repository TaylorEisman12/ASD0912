// Taylor Eisman
// ASD 09/12
// Project 1

var json = {
	"recipe1": {
        "recipeName": ["Recipe Name:", "Bacon Wraps"],
		"category": ["Category:", "Appetizers"],
		"ingredient1": ["Ingrediant:", "Cocktail sausages"],
		"measurement1": ["1", "packages"],
        "ingredient2": ["Ingrediant", "Bacon"],
        "measurement2": ["1", "pounds"],
        "ingrediant3": ["Ingrediant", "Brown sugar"],
        "measurement3": ["1", "Cups"],
        "addToFav": ["Favorite:", "No"],
        "prepTime": ["15", "Minutes"],
        "dateAdded": ["Date Added:", "08/28/2012"],
        "instructions": ["Instructions:", "Cut slab of bacon into quarters. Wrap one piece of quartered bacon slice around each sausage weenie. Place on foil lined cookie sheet. Sprinkle brown sugar on top of each wrapped sausage. Bake at 400 degrees for 30-40 minutes"]
	},
    "recipe2": {
        "recipeName": ["Recipe Name:", "Rock N Roll Crackers"],
        "category": ["Category:", "Appetizers"],
        "ingredient1": ["Ingrediant:", "Ranch salad dressing seasoning mix"],
        "measurement1": ["1", "Packages"],
        "ingredient2": ["Ingrediant", "Crushed red pepper"],
        "measurement2": ["1 1/2", "Tablespoons"],
        "ingrediant3": ["Ingrediant", "Garlic powder"],
        "measurement3": ["1", "Teaspoons"],
        "ingrediant4": ["Ingrediant", "Saltine crackers"],
        "measurement4": ["1", "Packages"],
        "ingrediant5": ["Ingrediant", "Canola oil"],
        "measurement5": ["1 1/2", "Cups"],
        "addToFav": ["Favorite:", "No"],
        "prepTime": ["20", "Minutes"],
        "dateAdded": ["Date Added:", "08/28/2012"],
        "instructions": ["Instructions:", "In a small bowl mix together salad seasoning mix, red pepper flakes, and garlic powder. Set aside. Place crackers in a large gallon sized sealable container, drizzle with canola oil. Add dry ingredients and seal container. Gently roll container to coat crackers with seasonings. Gently roll crackers every 30 minutes for 4 hours for best results."]
    },
    "recipe3": {
        "recipeName": ["Recipe Name:", "Sausage Cheese Balls"],
        "category": ["Category:", "Appetizers"],
        "ingredient1": ["Ingrediant:", "Pan sausage"],
        "measurement1": ["1", "Pounds"],
        "ingredient2": ["Ingrediant", "Bisquick"],
        "measurement2": ["2", "Cups"],
        "ingrediant3": ["Ingrediant", "Grated cheddar cheese"],
        "measurement3": ["8", "Ounces"],
        "addToFav": ["Favorite:", "Yes"],
        "prepTime": ["15", "Minutes"],
        "dateAdded": ["Date Added:", "08/28/2012"],
        "instructions": ["Instructions:", "Mix all ingredients well and form into walnut sized balls. Place on cookie sheet sprayed with Pam or non stick spray. Bake at 370 degrees for 15-20 minutes depending on the size of balls. Can be frozen and heated before serving."]
    },
    "recipe4": {
        "recipeName": ["Recipe Name:", "Popeye's Biscuits"],
        "category": ["Category:", "Breads"],
        "ingredient1": ["Ingrediant:", "Bisquick"],
        "measurement1": ["4", "Cups"],
        "ingredient2": ["Ingrediant", "7-Up"],
        "measurement2": ["3/4", "Cups"],
        "ingrediant3": ["Ingrediant", "Sour cream"],
        "measurement3": ["8", "Ounces"],
        "ingrediant4": ["Ingrediant", "Butter stick"],
        "measurement4": ["1", "Sticks"],
        "addToFav": ["Favorite:", "Yes"],
        "prepTime": ["5", "Minutes"],
        "dateAdded": ["Date Added:", "08/28/2012"],
        "instructions": ["Instructions:", "Combine bisquick, 7-up, and sour cream. Stir until lumps are gone. Cut stick of butter in half. Melt 1/2 stick of butter in 9x13 or 9x9 pan. Drop biscuits by tablespoon into pan. Bake at 350 degrees for 10-12 minutes or until brown. Melt remainder of butter and baste the tops of each biscuit. Let stand for about 15 minutes and then serve."]
    },
    "recipe5": {
        "recipeName": ["Recipe Name:", "Bull's-eyes"],
        "category": ["Category:", "Breakfast"],
        "ingredient1": ["Ingrediant:", "Bread"],
        "measurement1": ["1", "Slices"],
        "ingredient2": ["Ingrediant", "Egg"],
        "measurement2": ["1", "Number of Ingrediant"],
        "ingrediant3": ["Ingrediant", "Butter"],
        "measurement3": ["1", "Teaspoons"],
        "ingrediant4": ["Ingrediant", "Salt"],
        "measurement4": ["1", "Pinch"],
        "ingrediant5": ["Ingrediant", "Pepper"],
        "measurement5": ["1", "Pinch"],
        "addToFav": ["Favorite:", "Yes"],
        "prepTime": ["5", "Minutes"],
        "dateAdded": ["Date Added:", "08/28/2012"],
        "instructions": ["Instructions:", "Use the opening of a small glass or jar to cut the center out of a slice of bread. Keep the cut out center. Butter a skillet or pan. Using medium heat on the stove place the circle cut out and the bread slice onto the buttered pan. Crack the egg in the center of the bread, season with salt and pepper. Flip till egg is cooked and cut out toasted. Cut out is great for soaking up the runny yolk if not cooked through out."]
    },
    "recipe6": {
        "recipeName": ["Recipe Name:", "French Toast"],
        "category": ["Category:", "Breakfast"],
        "ingredient1": ["Ingrediant:", "Bread"],
        "measurement1": ["1", "Slices"],
        "ingredient2": ["Ingrediant", "Egg"],
        "measurement2": ["3", "Number of Ingrediant"],
        "ingrediant3": ["Ingrediant", "Butter"],
        "measurement3": ["1", "Teaspoons"],
        "ingrediant4": ["Ingrediant", "Milk"],
        "measurement4": ["1/2", "Cups"],
        "ingrediant5": ["Ingrediant", "Vanilla"],
        "measurement5": ["1", "Teaspoons"],
        "ingrediant6": ["Ingrediant", "Cinnamon"],
        "measurement6": ["1 1/2", "Teaspoons"],
        "ingrediant7": ["Ingrediant", "Sugar"],
        "measurement7": ["1 1/2", "Teaspoons"],
        "addToFav": ["Favorite:", "No"],
        "prepTime": ["15", "Minutes"],
        "dateAdded": ["Date Added:", "08/28/2012"],
        "instructions": ["Instructions:", "In a bowl mix the 4 eggs, 1/2 cup of milk, and the teaspoon of vanilla. Mix well and sprinkle in the cinnamon and sugar. Heat a large skillet on medium to high heat and melt butter in pan. Dredge a piece of bread through the mixture and place in pan. (repeat as desired) Brown both sides of bread. Sprinkle a little powder sugar if desired when served."]
    },
    "recipe7": {
        "recipeName": ["Recipe Name:", "Pinch Me Cake"],
        "category": ["Category:", "Breakfast"],
        "ingredient1": ["Ingrediant:", "Biscuits"],
        "measurement1": ["3", "Packages"],
        "ingredient2": ["Ingrediant", "Cinnamon"],
        "measurement2": ["2", "Teaspoons"],
        "ingrediant3": ["Ingrediant", "Sugar"],
        "measurement3": ["3/4", "Cups"],
        "ingrediant4": ["Ingrediant", "Butter"],
        "measurement4": ["1", "Sticks"],
        "ingrediant5": ["Ingrediant", "Vanilla"],
        "measurement5": ["2", "Teaspoons"],
        "ingrediant6": ["Ingrediant", "Sugar"],
        "measurement6": ["1", "Cups"],
        "addToFav": ["Favorite:", "Yes"],
        "prepTime": ["40", "Minutes"],
        "dateAdded": ["Date Added:", "08/28/2012"],
        "instructions": ["Instructions:", "Pre heat oven at 350 degrees."]
    },
    "recipe8": {
        "recipeName": ["Recipe Name:", "Crawfish Etouffe"],
        "category": ["Category:", "Dinner"],
        "ingredient1": ["Ingrediant:", "Crawfish"],
        "measurement1": ["2", "Pounds"],
        "ingredient2": ["Ingrediant", "Butter"],
        "measurement2": ["2", "Sticks"],
        "ingrediant3": ["Ingrediant", "Water"],
        "measurement3": ["1", "Cups"],
        "ingrediant4": ["Ingrediant", "Cayenne pepper"],
        "measurement4": ["1/4", "Teaspoons"],
        "ingrediant5": ["Ingrediant", "Bell pepper"],
        "measurement5": ["1", "Number of ingrediant"],
        "ingrediant6": ["Ingrediant", "Celery"],
        "measurement6": ["1", "Package"],
        "addToFav": ["Favorite:", "Yes"],
        "prepTime": ["25", "Minutes"],
        "dateAdded": ["Date Added:", "08/28/2012"],
        "instructions": ["Instructions:", "Cook on low heat."]
    },
    "recipe9": {
        "recipeName": ["Recipe Name:", "Chicken & Sausage or Seafood Gumbo"],
        "category": ["Category:", "Dinner"],
        "ingredient1": ["Ingrediant:", "Olive oil"],
        "measurement1": ["1/2", "Cups"],
        "ingredient2": ["Ingrediant", "Cayenne pepper"],
        "measurement2": ["1", "Teaspoon"],
        "ingrediant3": ["Ingrediant", "Water"],
        "measurement3": ["5", "Cups"],
        "ingrediant4": ["Ingrediant", "Onion"],
        "measurement4": ["1", "Pounds"],
        "ingrediant5": ["Ingrediant", "Fil'e"],
        "measurement5": ["1", "Tablespoons"],
        "ingrediant6": ["Ingrediant", "Celery"],
        "measurement6": ["1", "Package"],
        "addToFav": ["Favorite:", "Yes"],
        "prepTime": ["45", "Minutes"],
        "dateAdded": ["Date Added:", "08/28/2012"],
        "instructions": ["Instructions:", "Cook on low heat."]
    },
    "recipe10": {
        "recipeName": ["Recipe Name:", "Cajun Roast"],
        "category": ["Category:", "Dinner"],
        "ingredient1": ["Ingrediant:", "Roast Pork or Beef"],
        "measurement1": ["1", "Number of Ingrediant"],
        "ingredient2": ["Ingrediant", "Cayenne pepper"],
        "measurement2": ["1 1/2", "Tablespoons"],
        "ingrediant3": ["Ingrediant", "Onion"],
        "measurement3": ["1", "Number of Ingrediant"],
        "addToFav": ["Favorite:", "Yes"],
        "prepTime": ["45", "Minutes"],
        "dateAdded": ["Date Added:", "08/28/2012"],
        "instructions": ["Instructions:", "Cook in cast iron pot."]
    },
    "recipe11": {
        "recipeName": ["Recipe Name:", "Eggplant Dressing"],
        "category": ["Category:", "Appetizers"],
        "ingredient1": ["Ingrediant:", "Lean ground meat"],
        "measurement1": ["1 1/2", "Pounds"],
        "ingredient2": ["Ingrediant", "Cayenne pepper"],
        "measurement2": ["1/4", "Teaspoons"],
        "ingrediant3": ["Ingrediant", "Roux"],
        "measurement3": ["2", "Tablespoons"],
        "addToFav": ["Favorite:", "No"],
        "prepTime": ["30", "Minutes"],
        "dateAdded": ["Date Added:", "08/28/2012"],
        "instructions": ["Instructions:", "Cook on medium heat stirring frequently to prevent scorching."]
    },
    "recipe12": {
        "recipeName": ["Recipe Name:", "Armaretto Cake or Rum Cake"],
        "category": ["Category:", "Dessert"],
        "ingredient1": ["Ingrediant:", "Sugar"],
        "measurement1": ["1", "Cups"],
        "ingredient2": ["Ingrediant", "Butter"],
        "measurement2": ["1", "Stick"],
        "ingrediant3": ["Ingrediant", "Water"],
        "measurement3": ["1/2", "Cups"],
        "addToFav": ["Favorite:", "Yes"],
        "prepTime": ["15", "Minutes"],
        "dateAdded": ["Date Added:", "08/28/2012"],
        "instructions": ["Instructions:", "Grease and flour a bundt pan."]
    },
    "recipe13": {
        "recipeName": ["Recipe Name:", "Bacardi Rum Cake"],
        "category": ["Category:", "Dessert"],
        "ingredient1": ["Ingrediant:", "Sugar"],
        "measurement1": ["1", "Cups"],
        "ingredient2": ["Ingrediant", "Butter"],
        "measurement2": ["1", "Stick"],
        "ingrediant3": ["Ingrediant", "Water"],
        "measurement3": ["1/4", "Cups"],
        "addToFav": ["Favorite:", "Yes"],
        "prepTime": ["15", "Minutes"],
        "dateAdded": ["Date Added:", "08/28/2012"],
        "instructions": ["Instructions:", "Preheat oven at 325 degrees."]
    },
}