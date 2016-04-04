'use strict'

const assert = require('assert');
const V = require('../../lib/vector');

const v = new V(1, 2);
const w = new V(2, 4);
const x = new V(3, 6);

const numFriends = [100,49,41,40,25,21,21,19,19,18,18,16,15,15,15,15,14,14,13,13,13,13,12,12,11,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,8,8,8,8,8,8,8,8,8,8,8,8,8,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
const dailyMinutes = [1,68.77,51.25,52.08,38.36,44.54,57.13,51.4,41.42,31.22,34.76,54.01,38.79,47.59,49.1,27.66,41.03,36.73,48.65,28.12,46.62,35.57,32.98,35,26.07,23.77,39.73,40.57,31.65,31.21,36.32,20.45,21.93,26.02,27.34,23.49,46.94,30.5,33.8,24.23,21.4,27.94,32.24,40.57,25.07,19.42,22.39,18.42,46.96,23.72,26.41,26.97,36.76,40.32,35.02,29.47,30.2,31,38.11,38.18,36.31,21.03,30.86,36.07,28.66,29.08,37.28,15.28,24.17,22.31,30.17,25.53,19.85,35.37,44.6,17.23,13.47,26.33,35.02,32.09,24.81,19.33,28.77,24.26,31.98,25.73,24.86,16.28,34.51,15.23,39.72,40.8,26.06,35.76,34.76,16.13,44.04,18.03,19.65,32.62,35.59,39.43,14.18,35.24,40.13,41.82,35.45,36.07,43.67,24.61,20.9,21.9,18.79,27.61,27.21,26.61,29.77,20.59,27.53,13.82,33.2,25,33.1,36.65,18.63,14.87,22.2,36.81,25.53,24.62,26.25,18.21,28.08,19.42,29.79,32.8,35.99,28.32,27.79,35.88,29.06,36.28,14.1,36.63,37.49,26.9,18.58,38.48,24.48,18.95,33.55,14.24,29.04,32.51,25.63,22.22,19,32.73,15.16,13.9,27.2,32.01,29.27,33,13.74,20.42,27.32,18.23,35.35,28.48,9.08,24.62,20.12,35.26,19.92,31.02,16.49,12.16,30.7,31.22,34.65,13.13,27.51,33.2,31.57,14.1,33.42,17.44,10.12,24.42,9.82,23.39,30.93,15.03,21.67,31.09,33.29,22.61,26.89,23.48,8.38,27.81,32.35,23.84];

/* VECTORS */

/* correlation */
assert.strictEqual(V.correlation(numFriends, dailyMinutes), 0.24736957366478218);


/* covariance */
assert.strictEqual(V.covariance(numFriends, dailyMinutes), 22.425435139573064);

/* distance */
assert.strictEqual(V.distance([5, 6], [2, 2]), 5);
assert.strictEqual((new V(5, 6)).distance([2, 2]), 5);


/* dot product */

assert.strictEqual(V.dot([1, 2], [2, 4]), 10);
assert.strictEqual(V.dot(v, w), 10);


/* interquartileRange */
assert.strictEqual(V.interquartileRange(numFriends), 6);


/* magnitude */
assert.strictEqual(V.magnitude([3, 4]), 5);
assert.strictEqual((new V(3, 4)).magnitude(), 5);


/* mean */
assert.strictEqual(V.mean(numFriends), 22 / 3);


/* median */
assert.strictEqual(V.median(numFriends), 6);
assert.strictEqual(V.median([1, 2, 3, 4]), 2.5);


/* mode */
assert.deepStrictEqual(V.mode(numFriends), [1, 6]);


/* quantile */
assert.strictEqual(V.quantile(numFriends, 0.1), 1);
assert.strictEqual(V.quantile(numFriends, 0.25), 3);
assert.strictEqual(V.quantile(numFriends, 0.75), 9);
assert.strictEqual(V.quantile(numFriends, 0.9), 13);


/* range */
assert.strictEqual(V.range(numFriends), 99);


/* sumOfSquares */
assert.strictEqual(V.sumOfSquares([1, 2]), 5);

assert.strictEqual(V.sumOfSquares(v), 5);

assert.strictEqual(v.sumOfSquares(), 5);


/* scalarMultiply */
assert.deepStrictEqual(V.scalarMultiply(2, v), w);
assert.deepStrictEqual(v.scalarMultiply(2), w);


/* standardDeviation */
assert.strictEqual(V.standardDeviation(numFriends), 9.03014473623248);


/* variance */
assert.strictEqual(V.variance(numFriends), 81.54351395730716);


/* vectorAdd */

// static method works on arrays
assert.deepStrictEqual(V.vectorAdd([1, 2], [1, 2]), w);

// static method works on instances
assert.deepStrictEqual(V.vectorAdd(v, v), w);

// instance method works on instances
assert.deepStrictEqual(v.vectorAdd(v), w);

// instance method works on an array
assert.deepStrictEqual(v.vectorAdd([1, 2]), w);


/* vectorMean */

assert.deepStrictEqual(V.vectorMean([[1, 2], [2, 4], [3, 6]]), new V(2, 4));

assert.deepStrictEqual(V.vectorMean([v, w, x]), w);


/* vectorSubtract */

// static method works on arrays
assert.deepStrictEqual(V.vectorSubtract(w, v), v);

// static method works on instances
assert.deepStrictEqual(V.vectorSubtract([2, 4], [1, 2]), v);

// instance method works on instances
assert.deepStrictEqual(w.vectorSubtract(v), v);

// instance method works on an array
assert.deepStrictEqual(w.vectorSubtract([1, 2]), v);


/* vectorSum */

assert.deepStrictEqual(V.vectorSum([[1, 2], [1, 2], [1, 2]]), new V(3, 6));

assert.deepStrictEqual(V.vectorSum([v, v, v]), x);
