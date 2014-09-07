// beginning of document function
// add a start button to the homepage
$('#startPlay').append("<button id='start'>lets play</button>")
    // to hide the form created
    $('#guessForm').hide();
    $('#options').hide();
    $("#guessProgress").hide();

    var hiderGuess;
	var highestNumber;
	var previousGuess;
	var previousDistance;

    //activate guess form
    $('#startPlay').click(function () {

        //select random number
        hiderGuess = Math.ceil(Math.random() * 100);
        previousDistance = 101;
        
 

        // uses the range to perform calculations
        var rangePercent;
        console.log(hiderGuess);

        //to show the input form and progress bar and status of the game
        $("#instruction").hide();
        $("#options").show();
        $("#guessProgress").show();
        $("#status").show();
        $("#guessForm").show();
        $(this).hide();
    });

 // creates the introduction heading hot or cold
    $('#options').append("<p><span class='hot'>Hot </span> or <span class='cold'> Cold</span>... Hmmm let's find out</p>");

//guessProgress function 
function guessProgress(percent, $element) {
	var guessProgressWidth = percent * $element.width() / 100;
	$element.find('div').animate({ width: guessProgressWidth }, 500).html(percent + "%&nbsp;");
}
    	
    // function that does the comparison
    var compare = function(findme){

        currentGuess = findme;

               // find the current distance/range
        currentDist = Math.abs(hiderGuess - currentGuess);

// previous distance
       // previousDistance = Math.abs(hiderGuess - previousGuess); 

// To calculate the range percent
        rangePercent = Math.ceil(((previousDistance / (currentDist + previousDistance)) * 100));

        if (currentGuess != hiderGuess) {

             if (currentDist < previousDistance) {
                // alert("You are Hot");
				$("#meter").removeClass().addClass("meter_hot");
				guessProgress(rangePercent, $('#guessProgress'));
				$("#status").removeClass().addClass("hot").text("You are Hot");

             } 


            if (currentDist > previousDistance) {

                $("#meter").removeClass().addClass("meter_cold");
				guessProgress(rangePercent, $('#guessProgress'));
			// alert("You are Cold");
				$("#status").removeClass().addClass("cold").text("You are Cold");
             }


            else if(currentDist === previousDistance) {

                $("#meter").removeClass().addClass("meter_cold");
				guessProgress(cur_dist, $('#guessProgress'));
				// alert("You are Cold");
				$("#status").removeClass().addClass("cold").text("You are Cold");

             }

             previousDistance = currentDist;
        //end of parent IF
         } 

         else{
				$("#status").removeClass().addClass("hot").text("Congratulation's you won");
				$('#meter').removeClass().addClass("meter_hot");
				guessProgress(100, $('#guessProgress'));
		}

// end of function
        } 

     



        // perform comparison on sumbmitting user input
    $('#guessForm').on('submit', function(event) {

        //prevent the page from refreshing
        event.preventDefault();


        // set my guess to value from input
        userChoice = parseInt($('#guess').val());

        if (isNaN(userChoice) || (userChoice > 100) || (userChoice < 0))
         {
            alert("Oops! You can't find me..Try again!!!");
        } 
        else {
        	// alert(userChoice)

            // test the function to see if the value is greater or smaller
             compare(userChoice);
        	console.log(userChoice)             
        }

        $('#guess').val('');

    });

    $('#startOver').click(function(event) {
        event.preventDefault();
        location.reload();
    });


//end of  document function 
