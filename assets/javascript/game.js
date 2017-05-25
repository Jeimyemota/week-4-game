
//this code below creates the function.
$(document).ready(function(){
	//this code below sets up the number randomization. It's creating a variable called random that generates a random number
	//the asterisk is indicating that the math will be random WITHIN the numbers stated. 
	var random = Math.floor(Math.random()*101+19);
	//the code below will print the above variable to the console.
	console.log(random);
	//the code below is pulling from the variable random and putting it in the html
	$("#gemNum").text(random);


		//number array and printing the wins and losses
		var numberGenerated = [];
		var total = 0;
		var win = 0;
		var loss = 0;

				//printing the above
				$("#numberWins").text(win);
				//these codes are pulling from the above arrays.
				$("#numberLoss").text(loss);

						//Below we begin to set up the random numbers for the jewels.

						function randomNumbers (){
							for ( var i = 0; i < 4; i++){
								//this variable below generates the random numbers up to 12. 
								var numero = Math.floor(Math.random()*11+1);
								//the code below pushes it
								numberGenerated.push(numero);
						}
							console.log(numberGenerated);
						}
						randomNumbers();



							//click fuction for jewels.
												$("#gem1").on("click", function(){
													total = total + numberGenerated[0];
													console.log("new total =" + total);
													$("#combination").text(total);

															if (total == random){
																youWin();																
															}
															else if ( total > random){
																youLose();
															}
												})

												$("#gem2").on("click", function(){
													total = total + numberGenerated[1];
													console.log("new total =" + total);
													$("#combination").text(total);

															if (total == random){
																youWin();																
															}
															else if ( total > random){
																youLose();
															}
												})

												$("#gem3").on("click", function(){
													total = total + numberGenerated[2];
													console.log("new total =" + total);
													$("#combination").text(total);

															if (total == random){
																youWin();																
															}
															else if ( total > random){
																youLose();
															}
												})

												$("#gem4").on("click", function(){
													total = total + numberGenerated[3];
													console.log("new total =" + total);
													$("#combination").text(total);

															if (total == random){
																youWin();																
															}
															else if ( total > random){
																youLose();
															}
												});


	//Code to Reset the game begins below.
	function reset() {
	random = Math.floor(Math.random()*101 + 19);
		console.log(random)
		$("#gemNum").text(random);
		numberGenerated = [];
		randomNumbers();
		total = 0;
		$("#combination").text(total);
	}

			//adding loss to total
			function youLose(){
				//code below generates pop up that display loss
				alert("EARTH IS DOOMED! YOU LOST, CRYSTAL CLODS!");
				loss++;
				$("#numberLoss").text(loss);
				reset();

			} 

				//addind win
				function youWin(){
					alert("EARTH IS SAVED! THANK YOU CRYSTAL GEMS!");
					win++;
					$("#numberWins").text(win);
					reset();
				}
});

