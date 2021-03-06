/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n, startingPos) {
  var solution = [];
  var row = [];
  rookPosition = startingPos || 0;
  for( var j = 0; j < n; j++ ){
    row = [];
    for( var i = 0; i < n; i++ ){
      if( i === rookPosition % n ){
        row.push(1);
      }else{
        row.push(0);
      }
    }
    rookPosition++;
    solution.push(row);
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards 'that' exist, with n rooks

// placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;

  //make new empty board
  var board = new Board({n:n});

  var makePlacement = function(row) {
    if(row === n){
      return solutionCount++;
    }
    // iterate through the row
    for(var i = 0; i < n; i++){
      // place a queen
      board.togglePiece(row, i);

      // check if valid
      if(!board.hasAnyRooksConflicts()){
        // if no -> return to previous
        makePlacement(row + 1);
      }
      // remove placement
      board.togglePiece(row, i);
    }
  };
  makePlacement(0);


  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};


// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = [];
  var board = new Board({'n':n});

  for( var i = 0; i < n; i++ ){
    for( var j = 0; j < n; j++ ){
      board.togglePiece(i, j);
      if(board.hasAnyQueensConflicts()){
        board.togglePiece(i, j);
      }else{
        break;
      }
    }
  }
  for( var i = 0; i < n; i++ ){
    solution.push(board.attributes[i]);
  }
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0;
  var board = new Board({n:n});

  var makePlacement = function(row) {
    if(row === n){
      return solutionCount++;
    }
    // iterate through the row
    for(var i = 0; i < n; i++){
      // place a queen
      board.togglePiece(row, i);

      // check if valid
      if(!board.hasAnyQueensConflicts()){
        // if no -> return to previous
        makePlacement(row + 1);
      }
      // remove placement
      board.togglePiece(row, i);
    }
  };
  makePlacement(0);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
