	function ycngtwMsg(){
		updateDisplay("You can not go that way.");
	}
             
        function moveMsg(){
		updateDisplay(arrayLocation[locationIndex] + arrayItem[locationIndex]);
	}


        function takeMsg(){
		updateDisplay("You took the " + arrayItem[locationIndex].name);
	}

        
        function nothingtotakeMsg(){
		updateDisplay("There is nothing here to take");
	}