//initialize function called when the script loads
function initialize(){
	cities();
};

//function to create a table with cities and their populations
function cities(){
	//define two arrays for cities and population
	var cityPop = [
		{
			city: 'Madison',
			population: 233209
		},
		{
			city: 'Milwaukee',
			population: 594833
		},
		{
			city: 'Green Bay',
			population: 104057
		},
		{
			city: 'Superior',
			population: 27244
		}
	];

	//append the table element to the div
	$("#mydiv").append("<table>");

	//append a header row to the table
	$("table").append("<tr>");

	//add the "City" and "Population" columns to the header row
	$("tr").append("<th>City</th><th>Population</th>");

	//loop to add a new row for each city
    for (var i = 0; i < cityPop.length; i++){
        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        //add the row's html string to the table
        $("table").append(rowHtml);
    };

    addColumns(cityPop);
    addEvents();
};

//function to add a city size column to the table
function addColumns(cityPop){
    //for each row, add a new column with the city size category
    $('tr').each(function(i){
    	//if the header row
    	if (i == 0){
    		//add a header for City Size
    		$(this).append('<th>City Size</th>');
    	} else {
    		//if not the header row, add a category
    		var citySize;
    		//if the city population is smaller than 100K, it's a small city
    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';
    		//if the city population is between 100K and 500K, medium city
    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium';
    		//if city population is above 500K, large city
    		} else {
    			citySize = 'Large';
    		};
    		//append the cell to the row
    		$(this).append('<td>' + citySize + '</td>');
    	};
    });
};

//function to add event listeners to the table
function addEvents(){
	//when the user mouses over the table, change the text color to a random color
	$('table').mouseover(function(){
		//start of a CSS rgb() value
		var color = "rgb(";
		//loop creates r, g, and b values
		for (var i=0; i<3; i++){
			//random integer between 0 and 255
			var random = Math.round(Math.random() * 255);
			//add the value
			color += random;
			//commas to separate values
			if (i<2){
				color += ",";
			//end of rgb() value
			} else {
				color += ")";
			};
		};
		//assign the text color
		$(this).css('color', color);
	});
	//click listener handler function
	function clickme(){
		//fire an alert when the table is clicked
		alert('Hey, you clicked me!');
	};
	//add click listener to table element
	$('table').on('click', clickme);
};

// //jQuery.get() method...Example 2.5 line 3
// $.get("data/megacities.json", callback, "json");
//
// //jQuery.getJSON() method...Example 2.5 line 3
// $.getJSON("data/megacities.json", callback);

//define AJAX function
function jQueryAjax(){
	//define a variable to hold the data
	 var mydata;

	     //basic jQuery ajax method
	     $.ajax("data/megacities.json", {
	         dataType: "json",
	         success: function(response){
	             mydata = response;
							 //check the data
							console.log(mydata);


	         }
	     });
			 //check the data
	 console.log(mydata);
	 };

//define callback function
function callback(response, status, jqXHRobject){

    //TASKS USING THE DATA GO HERE
    console.log(response);

};

$(document).ready(jQueryAjax);

function jsAjax(){
    // Step 1: Create the request
    var ajaxRequest = new XMLHttpRequest();

		//Step 2: Create an event handler to send received data to a callback function
ajaxRequest.onreadystatechange = function(){
		if (ajaxRequest.readyState === 4){
				callback(ajaxRequest.response);
		};
};
	//Step 3: Open the server connection
	 ajaxRequest.open('GET', 'data/megacities.json', true);

	 //Step 4: Set the response data type
	 ajaxRequest.responseType = "json";

	 //Step 5: Send the request
	 ajaxRequest.send();
};

//define callback function
function callback(response){
//tasks using the data go here
 	console.log(response);
	console.log(JSON.stringify(response));
};

window.onload = jsAjax();



//define AJAX function
function jQueryAjax(){
	//define a variable to hold the data
	var mydata;
    //basic jQuery ajax method
    $.ajax("data/megacities.json", {
        dataType: "json",
        success: function(response){
					mydata = response;

					//check the data
					//console.log(mydata);
				}
    });
		//check the data
		console.log(mydata);
		console.log("hello")
};

//define callback function
function callback(response, status, jqXHRobject){

    //TASKS USING THE DATA GO HERE
    console.log(response);

};

$(document).ready(jQueryAjax);

//start debug

//creats a callback function so it can be done asynchronously and we dont have to wait for it
function Callback(response){
//sets the varible as mydata
		var mydata;
		//retrives the div and a inserts content after element with the append
		$(mydiv).append('<br>GeoJSON data:<br>' );
		//$("#mydiv").append('GeoJSON data: ' + JSON.stringify(status));
		//inserts the stringify verison of the resonse after the div element
		$(mydiv).append(JSON.stringify(response));
		//+ JSON.stringify(mydata)
		//'GeoJSON data: ' +
};
//preforms the ajax request task asynchronously
function jQueryAjax(){
//retrievs the data and deines the type of data
	$.ajax("data/megacities.json", {
		dataType: "json",
		// runs the fucntion if the request suceeds 
		success: function(response){
//preforms the callback
			Callback(response)
		}
	});
//console.log("hello")

};




//end debug


//call the initialize function when the document has loaded
$(document).ready(initialize);
