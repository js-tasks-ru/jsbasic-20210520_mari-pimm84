function getMinMax(str) {
  const regex = /[+-]?\d+(?:\.\d+)?/g;
  const array = str.match(regex);
  return {
    min: Math.min(...array),
    max: Math.max(...array)
  }
}

