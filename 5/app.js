




// let map = new Map();
// map.set("name", "John");
// let keys = map.keys();
// // Error: keys.push is not a function
// // keys.push("more");
// const names=[...keys]
// console.log(names,keys);


//////////////////////////////////////////
let map = new Map();
map.set("name", "John");
let keys = map.keys();
map.set("more",true);
keys = map.keys();
console.log(keys);