	function ycngtwMsg(){
		updateDisplay("You can not go that way.");
	}
             
        function apartmentMsg(){
		updateDisplay("You are at your apartment building.");
	}

        function alleyMsg(){
		updateDisplay("You are in a back alley. You fish out a ratty town map from your storm grey suit pocket and look up Sinso Publishing.");
	}

        function bookstoreMsg(){
		updateDisplay("You are back at the bookstore.");
	}

        function subwayMsg(){
		updateDisplay("You have entered a subway station.");
	}

        function billybobsMsg(){
                if (pistolHome) 
		   updateDisplay("You are at Billie Bob's Biker Bar and Bar-B-Q.  There is a pistol on the bar.");
                else
		   updateDisplay("You are at Billie Bob's Biker Bar and Bar-B-Q.");
	}

        function constructionMsg(){
		updateDisplay("You are wandering around an abandoned construction site.");
	}

        function airportMsg(){
                if (ticketHome)
		   updateDisplay("You are stuck at an airport terminal.  Your flight is in 12 hours.  There is an airplane ticket here.");
                else
                   updateDisplay("You are stuck at an airport terminal.  Your flight is in 12 hours.");
	}

        function robsMsg(){
                if (carkeysHome)
		   updateDisplay("You are standing next to Robs's Rent-A-Car.  There are several cars available, some with their windows open.  There are car keys on the ground");
                else
                   updateDisplay("You are standing next to Robs's Rent-A-Car.  There are several cars available, some with their windows open.");

	}

        function streetMsg(){
                if (clothesHome)
		   updateDisplay("You are 361 St.  It is a charming street, filled with shops and gift stores.  There is a pile of clothes, just your size, lying here");
                else
		   updateDisplay("You are 361 St.  It is a charming street, filled with shops and gift stores.");
	}

        function sinsoMsg(){
		updateDisplay("You have arrived at Sinso Publishing");
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