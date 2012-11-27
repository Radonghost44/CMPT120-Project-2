	function ycngtwMsg(){
		updateDisplay("You can not go that way.");
	}
             
        function apartmentMsg(){
		updateDisplay(arrayLocation[0]);
	}

        function alleyMsg(){
		updateDisplay(arrayLocation[2]);
	}

        function bookstoreMsg(){
		updateDisplay(arrayLocation[3]);
	}

        function subwayMsg(){
		updateDisplay(arrayLocation[5]);
	}

        function billybobsMsg(){
                if (pistolHome) 
		   updateDisplay(arrayLocation[9]);
                else {
                   arrayLocation[9].description = "You are at Billie Bob's Biker Bar and Bar-B-Q.";
		   updateDisplay(arrayLocation[9]);
                   }
                   }

        function constructionMsg(){
		updateDisplay(arrayLocation[7]);
	}

        function airportMsg(){
                if (ticketHome)
		   updateDisplay(arrayLocation[1]);
                else {
                   arrayLocation[1].description = "You are stuck at an airport terminal.  Your flight is in 12 hours.";
                   updateDisplay(arrayLocation[1]);
                     }
	}


        function robsMsg(){
                if (carkeysHome)
		   updateDisplay(arrayLocation[4]);
                else {
                   arrayLocation[4].description = "You are standing next to Robs's Rent-A-Car.  There are several cars available, some with their windows open.";
                   updateDisplay(arrayLocation[4]);
                }
	}

        function streetMsg(){
                if (clothesHome)
		   updateDisplay(arrayLocation[6]);
                else {
		   arrayLocation[6].description = "You are 361 St.  It is a charming street, filled with shops and gift stores.";
                   updateDisplay(arrayLocation[6]);
                }
	}

        function sinsoMsg(){
		updateDisplay(arrayLocation[8]);
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