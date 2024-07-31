// How to use command line arguments in Node JS

// const myArguments = process.argv.slice(2);
// console.log(` using command line arguments in Node JS ${myArguments}`);


/*----------- Like node index.js 3 2 - how can I get 3 and 2 to be used in my programs-----------*/

// Access the cammand line arguments
const anotherArguements = process.argv.slice(2);/*
When you run a Node.js script like this:
node index.js 3 2

The 
process.argv[0] might be something like /usr/local/bin/node
process.argv[1] will be the path to index.js, such as /path/to/your/script/index.js
process.argv[2] will be 3
process.argv[3] will be 2

so to avoid first 2 we have used slice(2)
*/

// convert the arguments from string to numbers
const num1 = Number(anotherArguements[0]);
const num2 = Number(anotherArguements[1]);


const sum = num1 + num2;

console.log(`The sum of arguments is ${sum}`);

