$(document).ready(function() {
	$.ajax({
		"url": "_view/recipes",
		"dataType": "json",
		"success": function(data) {
			$.each(data.rows, function(index, recipe){
				var recipeName = recipe.value.recipeName;
				var category = recipe.value.category;
				var ingredient1 = recipe.value.ingredient1;
				var measurement1 = recipe.value.measurement1;
				var ingredient2 = recipe.value.ingredient2;
				var measurement2 = recipe.value.measurement2;
				var addToFav = recipe.value.addToFav;
				var prepTime = recipe.value.prepTime;
				var dateAdded = recipe.value.dateAdded;
				var instructions = recipe.value.instructions;
				$('#recipeList').append(
					$('<li>').append(
						$('<a>').attr("href", "#")
						.text(recipeName)
					)
				);
			});
			$('#recipeList').listview('refresh');	
		}
	});
});
