// os module from documentation.
// documentation section for os: https://nodejs.org/docs/latest/api/os.html
const os = require('os');

console.log(`os.availableParallelism() = ${os.availableParallelism()}`);
console.log(`os.EOL =  ${os.EOL}`);
console.log(`os.arch() = ${os.arch()}`);
console.log(`os.type() = ${os.type()}`);
console.log(`os.machine() = ${os.machine()}`);
console.log(`os.platform = ${os.platform}`);


/* output

os.availableParallelism() = 8
os.EOL =  

os.arch() = x64
os.type() = Linux
os.machine() = x86_64
os.platform = linux

*/