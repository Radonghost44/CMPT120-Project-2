	function ycngtwMsg(){
		updateDisplay("You can not go that way.");
	}
             
        function apartmentMsg(){
		updateDisplay(apartment);
	}

        function alleyMsg(){
		updateDisplay(alley);
	}

        function bookstoreMsg(){
		updateDisplay(bookstore);
	}

        function subwayMsg(){
		updateDisplay(subway);
	}

        function billybobsMsg(){
                if (pistolHome) 
		   updateDisplay(billybobs);
                else {
                   billybobs.description = "You are at Billie Bob's Biker Bar and Bar-B-Q.";
		   updateDisplay(billybobs);
                   }
                   }

        function constructionMsg(){
		updateDisplay(construction);
	}

        function airportMsg(){
                if (ticketHome)
		   updateDisplay(airport);
                else {
                   airport.description = "You are stuck at an airport terminal.  Your flight is in 12 hours."
                   updateDisplay(airport);
                     }
	}


        function robsMsg(){
                if (carkeysHome)
		   updateDisplay(robs);
                else {
                   robs.description = "You are standing next to Robs's Rent-A-Car.  There are several cars available, some with their windows open.";
                   updateDisplay(robs);
                }
	}

        function streetMsg(){
                if (clothesHome)
		   updateDisplay(street);
                else {
		   street.description = "You are 361 St.  It is a charming street, filled with shops and gift stores.";
                   updateDisplay(street);
                }
	}

        function sinsoMsg(){
		updateDisplay(sinso);
	}

        function ticketMsg(){
		updateDisplay("You took the ticket");
	}

        function carkeysMsg(){
		updateDisplay("You took the car keys");
	}
 
        function pistolMsg(){
		updateDisplay("You took the pistol");
	}
 
        function clothesMsg(){
		updateDisplay("You took the clothes");
	}
        function nothingtotakeMsg(){
		updateDisplay("There is nothing here to take");
	}