// Taylor Eisman
// ASD 09/12
// Project 2

// comments function   add comments for recipes
// groceryList function set up pop-up list with checkbox populated with ingrediants to add only needed ingrediants
// Username and password function needed

$('#home').on('pageinit', function(){
	//code needed for home page goes here
});
    //<name>
    //<category>
    //<ingredient1>
    //<measurement1>
    //<ingredient2>
    //<measurement2>
    //<ingredient3>
    //<measurement3>
    //<favorite>
    //<prep>
    //<date>
    //<instructions>
$('#dataXML').on('pageinit', function(){
    var xmlData = function () {
        $.ajax({
            type: "GET",
            url: "xhr/data.xml",
            dataType: "xml",
            success: function (dataXML) {
                $(dataXML).find('item').each(function() {
                        var name = $(this).find('name').text();
                        var category = $(this).find('category').text();
                        var ingredient1 = $(this).find('ingredient1').text();
                        var measurement1 = $(this).find('measurement1').text();
                        var ingredient2 = $(this).find('ingredient2').text();
                        var measurement2 = $(this).find('measurement2').text();
                        var ingredient3 = $(this).find('ingredient3').text();
                        var measurement3 = $(this).find('measurement3').text();
                        var favorite = $(this).find('favorite').text();
                        var prep = $(this).find('prep').text();
                        var date = $(this).find('date').text();
                        var instructions = $(this).find('instructions').text();
                        $(' '+
                            '<div class="contentXML">' +
                                '<ul>' +
                                    '<li> Recipe: ' + name + '</li>' +
                                    '<li> Category: ' + category + '</li>' +
                                    '<li> Ingredient1: ' + ingredient1 + '</li>' +
                                    '<li> Measurement1: ' + measurement1 + '</li>' +
                                    '<li> Ingredient2: ' + ingredient2 + '</li>' +
                                    '<li> Measurement2: ' + measurement2 + '</li>' +
                                    '<li> Ingredient3: ' + ingredient3 + '</li>' +
                                    '<li> Measurement3: ' + measurement3 + '</li>' +
                                    '<li> Favorite: ' + favorite + '</li>' +
                                    '<li> Prep: ' + prep + '</li>' +
                                    '<li> Date: ' + date + '</li>' +
                                    '<li> Instructions: ' + instructions + '</li>' +
                                    '</ul>' +
                            '</div>'
                        ).appendTo("#dataXML");
                    }
                )}
    });

$('#dataJSON').on('pageinit', function(){
    var jsonData = function () {
        $.ajax({
            type: "GET",
            url: "xhr/data.json",
            dataType: "json",
            success: function (result) {

                for ( var i = 0, len = result.recipes.length; i < len; i++ ) {
                    var item = result.recipes[i];

                    $( ' ' +
                        '<div class="contentJSON">' +
                        '<ul>' +
                        '<li>' + item.name[0]  + " " + item.name[1] + '</li>' +
                        '<li>' + item.category[0] + " " + item.category[1] + '</li>' +
                        '<li>' + item.ingredient1[0] + " " + item.ingredient1[1] + '</li>' +
                        '<li>' + item.measurement1[0] + " " + item.measurement1[1] + '</li>' +
                        '<li>' + item.ingredient[0] + " " + item.ingredient2[1] + '</li>' +
                        '<li>' + item.measurement2[0] + " " + item.measurement2[1] + '</li>' +
                        '<li>' + item.ingredient3[0] +  " " + item.ingredient3[1] + '</li>' +
                        '<li>' + item.measurement3[0] + " " + item.measurement3[1] + '</li>' +
                        '<li>' + item.favorite[0] + " " + item.favorite[1] + '</li>' +
                        '<li>' + item.prep[0] + " " + item.prep[1] + '</li>' +
                        '<li>' + item.date[0] + " " + item.date[1] + '</li>' +
                        '<li>' + item.instructions[0] + " " + item.instructions[1] + '</li>' +
                        '</ul>' +
                        '<hr />' +
                        '</div>'
                    ).appendTo("#dataJSON");
                }
            }

        });
    }

$('#dataCSV').on('pageinit', function(){
    var csvData = function () {
        $.ajax({
            type: "GET",
            url: "xhr/data.csv",
            dataType: "text",
            success: function (result) {
                var lines = result.split("\n");
                var rowCSV = line[0];
                var colCSV = rowCSV.split(",");
                for(var lineNum = 1; lineNum < lines.length; lineNum++){
                    var row = lines[lineNum];
                    var columns = row.split(",");
                    $(' '+
                        '<div class="contentCSV">' +
                        '<ul>' +
                        '<li>' + colCSV[0] + " " + columns[0] + '</li>' +
                        '<li>' + colCSV[1] + " " + columns[1] + '</li>' +
                        '<li>' + colCSV[2] + " " + columns[2] + '</li>' +
                        '<li>' + colCSV[3] + " " + columns[3] + '</li>' +
                        '<li>' + colCSV[4] + " " + columns[4] + '</li>' +
                        '<li>' + colCSV[5] + " " + columns[5] + '</li>' +
                        '<li>' + colCSV[6] + " " + columns[6] + '</li>' +
                        '</ul>' +
                        '</div>'
                    ).appendTo("#dataCSV");

                }

            }

        });
    }

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