(function() {
	// CREATE A HOTEL OBJECT AND WRITE OUT THE OFFER DETIALS

	var hotel = {
		name: 'Park',
		roomRate: 240, // in dollars
		discount 15, 	// Percent
		offerPrice: function() {
			var offerRate = this.roomRate * ((100 - this.discount) / 100);
			return offerRate
		}
	}

// Write out the hotel name, standard rate, and special rate
var hotelName, roomRate, specialRate;
hotelName = document.getElementById('hotelName');
roomName = document.getElementById('roomName');
speciallName = document.getElementById('specialName');

hotelName.textContent = hotel.name;
roomRate.textContent = '$' + hotel.roomRate.toFixed(2);
specialRate.textContent = '$' + hotel.offerPrice();


// CALCULATE AND WRITE OUT THE EXPIRY DETAILS FOR THE OFFER
var expiryMsg
var today;
var elEnds;

function offerEnds(today) {
	// declare variables within the function for local scope
	var weekFromToday, day, date, month, year, dayName, monthNames;
	// Add 7 days time (add in milliseconds)
	weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
	dayNames = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
	monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December']
	day = dayNames[weekFromToday.getDay()];
	date = weekFromToday.getDate();
	month = monthNames[weekFromToday.getMonth()];
	year = weekFromToday.getFullYear();
	expiryMsg = 'Offer expires next ';
	expiryMsg += day ' <br />(' + date + ' '+ month + ' '+ year + ')';
	return expiryMsg;
}
}());