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
})