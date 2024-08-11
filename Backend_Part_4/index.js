const lib = require("./lib.js")

const fs = require("fs")

const t1 = performance.now();
fs.readFileSync("demo.txt", "utf-8", (err, txt) => {
    console.log(txt);
});



const t2 = performance.now();
console.log(lib.diff(43, 41), lib.sum(43, 2));

console.log(t2 - t2);


// console.log(txt);


