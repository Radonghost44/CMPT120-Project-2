	function ycngtwMsg(){
		updateDisplay("You can not go that way.");
	}
             
        function apartmentMsg(){
		updateDisplay(apartment.description);
	}

        function alleyMsg(){
		updateDisplay(alley.description);
	}

        function bookstoreMsg(){
		updateDisplay(bookstore.description);
	}

        function subwayMsg(){
		updateDisplay(subway.description);
	}

        function billybobsMsg(){
                if (pistolHome) 
		   updateDisplay(billybobs.description);
                else {
                   billybobs.description = "You are at Billie Bob's Biker Bar and Bar-B-Q.";
		   updateDisplay(billybobs.description);
                   }
                   }

        function constructionMsg(){
		updateDisplay(construction.description);
	}

        function airportMsg(){
                if (ticketHome)
		   updateDisplay(airport.description);
                else {
                   airport.description = "You are stuck at an airport terminal.  Your flight is in 12 hours."
                   updateDisplay(airport.description);
                     }
	}


        function robsMsg(){
                if (carkeysHome)
		   updateDisplay(robs.description);
                else {
                   robs.description = "You are standing next to Robs's Rent-A-Car.  There are several cars available, some with their windows open.";
                   updateDisplay(robs.description);
                }
	}

        function streetMsg(){
                if (clothesHome)
		   updateDisplay(street.description);
                else {
		   street.description = "You are 361 St.  It is a charming street, filled with shops and gift stores.";
                   updateDisplay(street.description);
                }
	}

        function sinsoMsg(){
		updateDisplay(sinso.description);
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