const removeFromArray = function (array, ...num) {
    let i = 0;
    firstArray:
    while (i < array.length) {
        for (item of num) {
            if (array[i] === item) { array.splice(i, 1); continue firstArray }
        }
        i++;
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
