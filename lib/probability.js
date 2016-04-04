'use strict';

class Probability {

  constructor(arr) {
  }

}

Probability.uniformPDF = (x) => Number(x >= 0 && x < 1);

Probability.uniformCDF = (x) => {
  if (x < 0) {
    return 0;
  }

  if (x < 1) {
    return x;
  }

  return 1;
}

Probability.normalPDF = (x, mu, sigma) => {
  mu = mu || 0;
  sigma = sigma || 1;

  const sqrt2PI = Math.sqrt(2 * Math.PI);
  return (Math.exp(-Math.pow((x - mu), 2) / 2 / Math.pow(sigma, 2)) / (sqrt2PI * sigma))
}

module.exports = Probability;
