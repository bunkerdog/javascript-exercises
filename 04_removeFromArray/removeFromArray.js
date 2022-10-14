const removeFromArray = function([nums], num) {
    let indexNum = nums.indexOf(num);
    if (indexNum > -1){
        nums.splice(indexNum, 1);
    }
    
};

// Do not edit below this line
module.exports = removeFromArray;
