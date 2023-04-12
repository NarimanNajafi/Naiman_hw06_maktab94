let salaries = {
    "nariman": 1500,
    "farzad": 2500,
    "amirreza": 1200
};


const topSalary = function (a, b) {
    return salaries[a] > salaries[b] ? a : b // if salaray a bigger than b return a else return b
}

console.log(Object.keys(salaries).reduce(topSalary));



// reduce
// arr.reduce(callback, initialValue)
// function (accumulator, currentValue, index, array) {

// }