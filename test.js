'use strict';

const assert = require('assert');

const LinAlg = require('./index');

const M = LinAlg.M;
const V = LinAlg.V;

const v = new V(1, 2);
const w = new V(2, 4);
const x = new V(3, 6);

const A = new M([1, 2],
                [3, 4]);

function isDiagonal(i, j) {
  return Number(i === j);
}

/* MATRICES */
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

/* VECTORS */
/* add */

// static method works on arrays
assert.deepStrictEqual(V.add([1, 2], [1, 2]), w);

// static method works on instances
assert.deepStrictEqual(V.add(v, v), w);

// instance method works on instances
assert.deepStrictEqual(v.add(v), w);

// instance method works on an array
assert.deepStrictEqual(v.add([1, 2]), w);


/* distance */

assert.strictEqual(V.distance([5, 6], [2, 2]), 5);
assert.strictEqual((new V(5, 6)).distance([2, 2]), 5);


/* dot product */

assert.strictEqual(V.dot([1, 2], [2, 4]), 10);
assert.strictEqual(V.dot(v, w), 10);


/* magnitude */

assert.strictEqual(V.magnitude([3, 4]), 5);
assert.strictEqual((new V(3, 4)).magnitude(), 5);


/* mean */

assert.deepStrictEqual(V.mean([[1, 2], [2, 4], [3, 6]]), new V(2, 4));

assert.deepStrictEqual(V.mean([v, w, x]), w);


/* subtract */

// static method works on arrays
assert.deepStrictEqual(V.subtract(w, v), v);

// static method works on instances
assert.deepStrictEqual(V.subtract([2, 4], [1, 2]), v);

// instance method works on instances
assert.deepStrictEqual(w.subtract(v), v);

// instance method works on an array
assert.deepStrictEqual(w.subtract([1, 2]), v);


/* sum */

assert.deepStrictEqual(V.sum([[1, 2], [1, 2], [1, 2]]), new V(3, 6));

assert.deepStrictEqual(V.sum([v, v, v]), x);


/* sumOfSquares */
assert.strictEqual(V.sumOfSquares([1, 2]), 5);

assert.strictEqual(V.sumOfSquares(v), 5);

assert.strictEqual(v.sumOfSquares(), 5);


/* scalarMultiply */

assert.deepStrictEqual(V.scalarMultiply(2, v), w);
assert.deepStrictEqual(v.scalarMultiply(2), w);
