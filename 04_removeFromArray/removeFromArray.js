const removeFromArray = function(arr, ...args) {
   let x = arr;
   let y = args;
   let z = x.filter(args => !y.includes(args));
   return z

    
};

// Do not edit below this line
module.exports = removeFromArray;
