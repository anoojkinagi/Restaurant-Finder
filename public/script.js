window.onload = function(){
	var state = document.getElementById("state");
	if(state){
		state.value = "";
	}
}

function selectCity(state,city){
    var state = document.getElementById(state);
    var city = document.getElementById(city);

    city.innerHTML = "Select City";

    if(state.value == "New York"){
		var optionArray = ["|","New York City|New York City","Buffalo|Buffalo","Syracuse|Syracuse"];
	} else if(state.value == "New Jersey"){
		var optionArray = ["|","Hoboken|Hoboken","New Brunswick|New Brunswick","Jersey city|Jersey city"];
	}
    
    for(var option in optionArray){
		var pair = optionArray[option].split("|");
		var newOption = document.createElement("option");
		//console.log(pair);
		newOption.value = pair[0];
		newOption.innerHTML = pair[1];
		city.options.add(newOption);
	}

}
function gohere(){
	var statee = document.getElementById("state");
	var citt = document.getElementById("city");
	if(statee.value == "" && citt.value == ""){
		statee.style.boxShadow = "1px 1px 11px #FF0000";
		citt.style.boxShadow = "1px 1px 11px #FF0000";
	}

	else if(statee.value == ""){
		statee.style.boxShadow = "1px 1px 11px #FF0000";
	}

	else if(citt.value == ""){
		citt.style.boxShadow = "1px 1px 11px #FF0000";
	}
}
function searchRestaurant(state, city, cuisine){

}