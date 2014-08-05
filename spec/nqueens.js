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

  it('should not find solution for board size 9', function () {
    expect(findNQueensSolution(9)).to.equal(352);
  });

  it('should not find solution for board size 10', function () {
    expect(findNQueensSolution(10)).to.equal(724);
  });

  it('should not find solution for board size 11', function () {
    expect(findNQueensSolution(11)).to.equal(2680);
  });

  it('should not find solution for board size 12', function () {
    expect(findNQueensSolution(12)).to.equal(14200);
  });

  it('should not find solution for board size 13', function () {
    expect(findNQueensSolution(13)).to.equal(73712);
  });

  it('should not find solution for board size 14', function () {
    expect(findNQueensSolution(14)).to.equal(365596);
  });

  it('should not find solution for board size 15', function () {
    expect(findNQueensSolution(15)).to.equal(2279184);
  });

  it('should not find solution for board size 16', function () {
    expect(findNQueensSolution(16)).to.equal(14772512);
  });

  // Add more assertions here
});
