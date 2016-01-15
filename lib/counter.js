'use strict';

class Counter {

  constructor(arr) {
    return arr.reduce((p, c) => {
      if (!p[c]) {
        p[c] = 0;
      }
      p[c]++;
      return p;
    }, this);
  }

  max() {
    return Math.max.apply(null, this.values());
  }

  values() {
    const vals = [];
    for (const key in this) {
      if (this.propertyIsEnumerable(key)) {
        vals.push(this[key]);
      }
    }
    return vals;
  }

}

module.exports = Counter;
