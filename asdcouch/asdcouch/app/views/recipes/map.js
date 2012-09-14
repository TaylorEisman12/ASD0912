function (doc){
	if (doc._id.substring(0 ,7) != "design/"){
	}emit(doc._id, {
	"recipeName": doc.recipeName,
	"category": doc.category,
	"ingredient1": doc.ingredient1,
	"measurement1": doc.measurement1,
	"ingredient2": doc.ingredient2,
	"measurement2": doc.measurement2,
	"addToFav": doc.addToFav,
	"prepTime": doc.prepTime,
	"dateAdded": doc.dateAdded,
	"instructions": doc.instructions
	});
};