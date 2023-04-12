let num = [[1, 2], [3, 4], [5, 6]];

let flatten = num.reduce((acc, arr) => {
    return acc.concat(arr)

}, []);

flatten.sort(function (a, b) {
    return b - a
});

console.log(flatten);