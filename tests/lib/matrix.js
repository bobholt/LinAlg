"use strict"

const assert = require('assert');
const M = require('../../lib/matrix');
const V = require('../../lib/vector');

const A = new M([1, 2],
                [3, 4]);

function isDiagonal(i, j) {
  return Number(i === j);
}

assert.deepStrictEqual(M.shape(A), new V(2, 2));
assert.deepStrictEqual(A.shape(), new V(2, 2));

assert.deepStrictEqual(M.getRow(A, 0), new V(1, 2));
assert.deepStrictEqual(A.getRow(0), new V(1, 2));

assert.deepStrictEqual(M.getColumn(A, 0), new V(1, 3));
assert.deepStrictEqual(A.getColumn(0), new V(1, 3));

assert.deepStrictEqual(M.make(5, 5, isDiagonal), new M(new V(1, 0, 0, 0, 0),
                                                       new V(0, 1, 0, 0, 0),
                                                       new V(0, 0, 1, 0, 0),
                                                       new V(0, 0, 0, 1, 0),
                                                       new V(0, 0, 0, 0, 1)));

assert.deepStrictEqual(M.identity(5), new M(new V(1, 0, 0, 0, 0),
                                            new V(0, 1, 0, 0, 0),
                                            new V(0, 0, 1, 0, 0),
                                            new V(0, 0, 0, 1, 0),
                                            new V(0, 0, 0, 0, 1)));
