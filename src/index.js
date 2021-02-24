
exports.min = function min (array) {
  if(array === undefined || array.length === 0) return 0;
  array.sort(function (a, b) {return b - a});
  return array[array.length - 1];
}

exports.max = function max (array) {
  if(array === undefined || array.length === 0) return 0;
  let max;
  array.sort(function (a, b) {return b - a})
  return array[0];
}

exports.avg = function avg (array) {
  if(array === undefined || array.length === 0) return 0;
  let sum = 0;
  let res;
  for(let i = 0; i < array.length; i++) {
    sum += array[i];
}
  return res = sum / array.length;
}
