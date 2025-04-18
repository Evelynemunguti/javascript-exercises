const sumAll = function(a , b) {
  if (typeof a !== 'number' || typeof b !== 'number' || a < 0 || b < 0 ||!Number.isInteger(a) || 
  !Number.isInteger(b) ) {
    return 'ERROR';
  }
  
  let sum = 0;
  const start = Math.min(a, b);
  const end = Math.max(a, b);
  
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  
  return sum;

};

// Do not edit below this line
module.exports = sumAll;
