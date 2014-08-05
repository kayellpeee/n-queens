var permute = function(arr){
	var permutation = [];
	var permutations = [];
	var board = new Board({'n':n});
	
	for all permutations
		permutations[j]
		for the length of given permutation
			permutations[j][k]
			look at element in permutation
			toggle piece at row k, col (permutations)

			ex:
	perm =[2, 3, 4, 1]
	for(k < perm.length)
		l = perm[k]
		board . toggle piece(row k, col l)

	var makePermutation = function(arr){
		for( var i = 0; i < arr.length; i++ ){
			if( permutation.indexOf(arr[i]) === -1 ){
				permutation.push(arr[i]);
			}
		}
	}


};

//	 [1, 2, 3, 4]
//  ——— ——— ——— ———
//   1	 2   3   4
// [ 2   3   4   1 ]
//   3   4   1   2
//  ——— ——— ——— ———
// 

//  ——— ——— ——— ———
//  |4|	|1| |2| |3|
// [|1| |2| |3| |4|]
//  |2| |3| |4| |1|
//  ——— ——— ——— ———
// 				VV
//  ——— ——— ——— ———
//  |4|	|1| |3| |2|
// [|1| |2| |4| |3|]
//  |2| |3| |1| |4|
//  ——— ——— ——— ———
// 				VV
//  ——— ——— ——— ———
//  |4|	|2| |1| |3|
// [|1| |3| |2| |4|]
//  |2| |4| |3| |1|
//  ——— ——— ——— ———
// 				VV
//  ——— ——— ——— ———
//  |4|	|2| |3| |1|
// [|1| |3| |4| |2|]
//  |2| |4| |1| |3|
//  ——— ——— ——— ———