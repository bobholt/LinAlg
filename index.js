'use strict';

class M extends Array {

  getColumn(j) {
    return M.getColumn(this, j);
  }

  getRow(i) {
    return M.getRow(this, i);
  }

  shape() {
    return M.shape(this);
  }
}

M.shape = A => {
  const num_rows = A.length;
  const num_cols = A[0] ? A[0].length : 0;
  return new V(num_rows, num_cols);
}

M.getRow = (A, i) => V.from(A[i]);

M.getColumn = (A, j) => V.from(A, AI => AI[j]);

M.make = (rows, cols, entry) => M.from(new V(rows), (_, i) =>
  V.from(new V(cols), (_, j) => entry(i, j))
);

class V extends M {

  add(v) {
    return V.add(this, v);
  }

  distance(v) {
    return V.distance(this, v);
  }

  dot(v) {
    return V.dot(this, v);
  }

  magnitude() {
    return V.magnitude(this);
  }

  scalarMultiply(c) {
    return V.scalarMultiply(c, this);
  }

  subtract(v) {
    return V.subtract(this, v);
  }

  sumOfSquares() {
    return V.sumOfSquares(this);
  }

}

V.add = (v, w) => {
  if (v.length !== w.length) {
    throw new Error('Vectors must be of equal length');
  }
  return V.from(v, (_, i) => v[i] + w[i]);
};

V.distance = (v, w) => {
  return V.magnitude(V.subtract(v, w));
}

V.dot = (v, w) => {
  return V.from(v, (_, i) => v[i] * w[i]).reduce((p, c) => p + c);
}

V.magnitude = v => {
  return Math.sqrt(V.sumOfSquares(v));
}

V.scalarMultiply = (c, v) => {
  return V.from(v, vI => c * vI);
}

V.subtract = (v, w) => {
  if (v.length !== w.length) {
    throw new Error('Vectors must be of equal length');
  }
  return V.from(v, (_, i) => v[i] - w[i]);
};

V.sum = vectors => {
  return vectors.reduce(V.add);
}

V.sumOfSquares = v => {
  return V.dot(v, v);
}

V.mean = vectors => {
  return V.scalarMultiply(1 / vectors.length, V.sum(vectors));
}

exports.M = M;
exports.V = V;
