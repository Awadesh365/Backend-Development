// ----------- for (type: module) to use Es6 style of node.js---------------------
// import { sum, diff } from "./lib.js"
const { log } = require("console");
const lib = require("./lib.js");
const fs = require("fs");

let p1 = performance.now();

// console.log(fs.readFileSync("demo.txt", "utf-8"));

fs.readFile("demo.txt", "utf-8", (err, txt) => {
    console.log(txt, err);
});



let p2 = performance.now();

console.log(lib.sum(10, 2), lib.diff(22, 2));

console.log(p2 - p1);
