let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];

let unique = function () {
    return [...new Set(values)]
};

console.log(unique(values));