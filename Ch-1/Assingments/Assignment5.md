# Can you run a system command from Node JS javascript file e.g. ls dir commands ? and can you store its output in a text file ?

### Yes, we can run system commands from a Node.js JavaScript file and store the output in a text file. This can be done using the child_process module in Node.js. Here's an example of how to achieve this:

1. **Create a file named `hello.js`:**

```javascript
const { exec } = require("child_process");
const fs = require("fs");

// Run the 'ls' command (or 'dir' on Windows)
exec("ls", (error, stdout) => {
  fs.writeFileSync("output.txt", stdout);
  console.log("Hello, World! Command output has been saved to output.txt");
});
```

2. **Run the script:**

Open your terminal and navigate to the directory where `hello.js` is located. Then, run the script using Node.js:

```bash
node hello.js
```

This version of the script:

- Runs the `ls` command.
- Writes the command output to a file named `output.txt`.
- Prints "Hello, World! Command output has been saved to output.txt" to the console.

This is indeed the simplest way to run a system command and store its output in a text file with minimal code.
