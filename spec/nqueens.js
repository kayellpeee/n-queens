/* global nqueens, describe, it, expect, should */

describe('nqueens()', function () {
  'use strict';

  it('exists', function () {
    expect(findNQueensSolution).to.be.a('function');

  });

  it('should find solution for board size 0', function () {
    expect(findNQueensSolution(0)).to.equal(1);
  });

  it('should not find solution for board size 1', function () {
    expect(findNQueensSolution(1)).to.equal(1);
  });

  it('should not find solution for board size 2', function () {
    expect(findNQueensSolution(2)).to.equal(0);
  });

  it('should not find solution for board size 3', function () {
    expect(findNQueensSolution(3)).to.equal(0);
  });

  it('should not find solution for board size 4', function () {
    expect(findNQueensSolution(4)).to.equal(2);
  });

  it('should not find solution for board size 5', function () {
    expect(findNQueensSolution(5)).to.equal(10);
  });

  it('should not find solution for board size 6', function () {
    expect(findNQueensSolution(6)).to.equal(4);
  });

  it('should not find solution for board size 7', function () {
    expect(findNQueensSolution(7)).to.equal(40);
  });

  it('should not find solution for board size 8', function () {
    expect(findNQueensSolution(8)).to.equal(92);
  });

  // Add more assertions here
});
