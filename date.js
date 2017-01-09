
var date = new Date();

var current_hour = date.getHours();
var current_min = date.getMinutes()
var current_day = date.getDay();
var current_date = date.getDate();
var current_month = date.getMonth();
var current_year = date.getFullYear();


window.onload = function(){
	var day;
	var zone = "AM";

	if (current_hour > 12){
		current_hour = current_hour - 12;
		zone = "PM";
	}
	if (current_min < 10){
		current_min = "0"+current_min;
	}
	document.getElementById("placeTime").innerHTML = current_hour + ":" + current_min + " " +zone;
	
	switch(current_day) {
	    case 1:
	        day = "Monday";
	        break;
	    case 2:
	        day = "Tuesday";
	        break;
		case 3:
	        day = "Wednesday";
	        break;
	    case 4:
	        day = "Thursday";
	        break;
	    case 5:
	        day = "Fridays";
	        break;
	    case 6:
	        day = "Saturday";
	        break;
		case 0:
	        day = "Sunday";
	        break;
	    default:
	        day = "Sunday";
	}


	document.getElementById("placeDay").innerHTML = day;

	var month;
	current_month = current_month + 1;
	switch(current_month) {
	    case 1:
	        month = "January";
	        break;
	    case 2:
	        month = "February ";
	        break;
		case 3:
	        day = "March";
	        break;
	    case 4:
	        month = "April";
	        break;
	    case 5:
	        month = "May";
	        break;
	    case 6:
	        month = "June";
	        break;
		case 7:
	        month = "July";
	        break;
	    case 8:
	        month = "August";
	        break;
	    case 9:
	        month = "September";
	        break;
		case 10:
	        month = "October";
	        break;
	    case 11:
	        month = "November";
	        break;
	    case 12:
	        month = "December";
	        break;
	    default:
	        month = "January";
	}

	document.getElementById("placeDate").innerHTML = current_date + " " + month  ;

}












