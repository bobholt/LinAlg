"use strict"

const Counter = require('./counter');

function compareNumbers(a, b) {
  return a - b;
}

class V extends Array {

  distance(v) {
    return V.distance(this, v);
  }

  dot(v) {
    return V.dot(this, v);
  }

  magnitude() {
    return V.magnitude(this);
  }

  mean() {
    return V.mean(this);
  }

  median() {
    return V.median(this);
  }

  scalarMultiply(c) {
    return V.scalarMultiply(c, this);
  }

  sum() {
    return V.sum(this);
  }

  sumOfSquares() {
    return V.sumOfSquares(this);
  }

  vectorAdd(v) {
    return V.vectorAdd(this, v);
  }

  vectorSubtract(v) {
    return V.vectorSubtract(this, v);
  }

}

V.correlation = (v1, v2) => {
  const stdevV1 = V.standardDeviation(v1);
  const stdevV2 = V.standardDeviation(v2);

  if (stdevV1 > 0 && stdevV2 > 0) {
    return V.covariance(v1, v2) / stdevV1 / stdevV2;
  }

  return 0;
}

V.covariance = (v1, v2) => V.dot(V.deMean(v1), V.deMean(v2)) / (v1.length - 1);

V.deMean = (v) => {
  const vBar = V.mean(v);
  return Array.from(v, (_, i) => v[i] - vBar);
}

V.distance = (v, w) => {
  return V.magnitude(V.vectorSubtract(v, w));
};

V.dot = (v, w) => {
  return V.from(v, (_, i) => v[i] * w[i]).reduce((p, c) => p + c);
};

V.interquartileRange = (v) => V.quantile(v, 0.75) - V.quantile(v, 0.25);

V.magnitude = v => {
  return Math.sqrt(V.sumOfSquares(v));
};

V.mean = v => {
  return V.sum(v) / v.length;
};

V.median = v => {
  const n = v.length;
  const sortedV = Array.from(v).sort(compareNumbers);
  const midpoint = parseInt(n / 2, 10);

  if (n % 2 === 1) {
    return sortedV[midpoint];
  }

  const lo = midpoint - 1;
  const hi = midpoint;

  return (sortedV[lo] + sortedV[hi]) / 2;
}

V.mode = v => {
  const counts = new Counter(v);
  const max_count = counts.max();

  const modesKeys = [];

  for (const key in counts) {
    if (counts[key] === max_count) {
      modesKeys.push(Number(key))
    }
  }

  return modesKeys;
}

V.quantile = (v, p) => {
  const p_index = parseInt(p * v.length, 10);
  return Array.from(v).sort(compareNumbers)[p_index];
}

V.range = (v) => {
  return Math.max.apply(null, v) - Math.min.apply(null, v);
}

V.scalarMultiply = (c, v) => {
  return V.from(v, vI => c * vI);
};

V.standardDeviation = (v) => Math.sqrt(V.variance(v));

V.sum = (v) => {
  return v.reduce((p, c) => p + c);
};

V.sumOfSquares = v => {
  return V.dot(v, v);
};

V.variance = (v) => {
  const n = v.length;
  const deviations = V.deMean(v);
  return V.sumOfSquares(deviations) / (n - 1);
}

V.vectorAdd = (v, w) => {
  if (v.length !== w.length) {
    throw new Error('Vectors must be of equal length');
  }
  return V.from(v, (_, i) => v[i] + w[i]);
};

V.vectorMean = vectors => {
  return V.scalarMultiply(1 / vectors.length, V.vectorSum(vectors));
};

V.vectorSubtract = (v, w) => {
  if (v.length !== w.length) {
    throw new Error('Vectors must be of equal length');
  }
  return V.from(v, (_, i) => v[i] - w[i]);
};

V.vectorSum = vectors => {
  return vectors.reduce(V.vectorAdd);
};

module.exports = V;
