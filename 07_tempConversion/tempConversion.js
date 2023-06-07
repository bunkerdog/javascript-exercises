
//farenheit 32 = celsius 0
//celsius 0 = farenheit 32
//round the temperature to one decimal place

const ftoc = function(temp) {
  return parseFloat((temp-32)/1.8)



};

const ctof = function(temp) {
  return parseFloat((temp*1.8)+32)

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
