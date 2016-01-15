"use strict"

const V = require('./vector');

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

M.identity = (size) => M.make(size, size, (i, j) => {
  return Number(i === j);
});

module.exports = M;
