var findNQueensSolution = function(n){
	var queens = [];
	var solutionCount = 0;
	var tempSolution = [];
	var conflicts = false;

	// get array of numbers 0 to n-1
	for( var i = 0; i < n; i++ ){
		queens.push(i);
	}
	var makePlacement = function(){

		// check if at base case
		if( tempSolution.length === n ){
			console.log(tempSolution);
			return solutionCount++;
		}

		// loop through possible placements
		for( var i = 0; i < queens.length; i++ ){

			conflicts = false;

			// if place not already made, place queen
			if( tempSolution.indexOf(i) === -1 ){
				tempSolution.push(i);

				// see if placement was valid
				for( var j = 0; j < tempSolution.length - 1; j++ ){
					if( (Math.abs(tempSolution[j] - i) === Math.abs(j - tempSolution.indexOf(i))) && tempSolution.length !== 1 ){
						conflicts = true;
						break;
					}
						conflicts = false;
				}

				// if placement was valid, make next placement
				if( conflicts === false ){
					var result = makePlacement();
				}

				tempSolution.pop();
			}
		}
	}
	makePlacement();
	return solutionCount;
}
