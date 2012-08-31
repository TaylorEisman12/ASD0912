// Taylor Eisman
// ASD 09/12
// Project 1

// comments function   add comments for recipes
// groceryList function set up pop-up list with checkbox populated with ingrediants to add only needed ingrediants
// Username and password function needed

$('#home').on('pageinit', function(){
	//code needed for home page goes here
});	
		
$('#addItem').on('pageinit', function(){

		var myForm = $('#formId');
		    myForm.validate({
			invalidHandler: function(form, validator) {
			},
			submitHandler: function() {
		var data = myForm.serializeArray();
			storeData(data);
		}
	});
	
	//any other code needed for addItem page goes here
	
});

//The functions below can go inside or outside the pageinit function for the page in which it is needed.

var autofillData = function (){
	 .each(var n in json){
			var id = Math.floor(Math.random()*100000001);
			localStorage.setItem(id, JSON.stringify(json[n]));
		}
};

var getData = function(){
	$("#addRecipeForm").empty();
		toggleControls("on");
		if(localStorage.length === 0){
			alert("There is no Local Storage so default data was added.");
			autoFillData();
		}
		var makeDiv = $('<div>');
		makeDiv.attr("id", "items");
		var makeList = $('<ul>');
		makeDiv.append(makeList);
		document.body.appendChild(makeDiv);
		$('#recipes').append(makeDiv);
		$('#items').show();
		for(var i=0, len=localStorage.length; i<len;i++){
			var makeli = $('<li>');
			var linksLi = $('<li>');
			makeList.append(makeli);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			var obj = JSON.parse(value);
			var makeSubList = $('<ul>');
			makeli.append(makeSubList);
			getImage(obj.category[1], makeSubList);
			for(var n in obj){
				var makeSubli = $('<li>');
				makeSubList.append(makeSubli);
				var optSubText = obj[n][0]+" "+obj[n][1];
				makeSubli.text(optSubText);
				makeSubList.append(linksLi);
			}
			makeItemLinks(localStorage.key(i), linksLi);
		}

};

var storeData = function(data){
	if(!key){
			var id			= Math.floor(Math.random()*100000001);
		}else{
			id = key;
		}
		getSelectedRadio();
		getCheckboxValue();
		
		var item					= {};
			item.recipeName			= ["Recipe Name: ", $('#recipeName').val()];
			item.category			= ["Category: ", $('#categories').val()];
			item.ingrediant1		= ["Ingrediant: ", $('#ingrediant1').val()];
			// function to add more ingrediants if user adds
			item.measurement1		= ["Measurement: ", $('#measurement1').val()];
			// function to add more measurements if user adds
			item.addToFav			= ["Favorite: ", addToFavValue];
			item.prepTime			= ["Time to prep: ", $('#prepTime').value];
			item.dateAdded			= ["Date Added: ", $('#dateAddded').value];
			item.instructions		= ["Instructions: ", $('#instructions').val()];
		
		localStorage.setItem(id, JSON.stringify(item));
		alert("Recipe Saved!");
		save.off("click");
		save.on("click", storeData);
		window.location.reload();
	
	};
	
	var getSelectedRadio = function(){
	var radios = function (){
		$('input:radio[name="addToFav"]:checked').val();
		return($('input:radio[name="addToFav"]:checked').val());

};

}; 

var	deleteItem = function (){
	var ask = confirm("Are you sure you want to delete this recipe?");
		if(ask){
			localStorage.removeItem(this.key);
			alert("Recipe was deleted.");
			window.location.reload();
		}else{
			alert("Recipe was not deleted.");
		}		
};
					
var clearLocal = function(){
	if(localStorage.length === 0){
			alert("No data to clear.");
		}else{
			localStorage.clear();
			alert("All Bills are deleted");
			window.location.reload();
			return false;
		}
	}
	
	var addToFavValue,
		addToFavValue = "No",
		errMsg = ge('errors');
	
	makeCats();

	var clearLink = ge('clear');
	clearLink.addEventListener("click", clearLocal);
	var save = ge('submit');
	save.addEventListener("click", validate);

};