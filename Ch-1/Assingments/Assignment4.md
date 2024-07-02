# Explore about Asynchronous nature of JS as a single threaded language and how it is achieved using Event Loop

JavaScript is often described as a single-threaded language, meaning it has a single call stack and can do one thing at a time. However, JavaScript's asynchronous nature allows it to handle tasks like I/O operations, network requests, and timers without blocking the execution of other code. This is achieved through the event loop, which is a fundamental part of JavaScript's runtime environment, especially in browsers and Node.js. Here's how it works:

### JavaScript's Single Thread

1. **Call Stack**: JavaScript has a call stack that keeps track of the execution context. When a function is called, it's added to the stack. When the function completes, it's removed from the stack.

### Asynchronous Programming

Asynchronous programming in JavaScript is handled using:

1. **Callbacks**: Functions that are passed as arguments to other functions and are executed after some operation is completed.
2. **Promises**: Objects representing the eventual completion or failure of an asynchronous operation.
3. **Async/Await**: Syntax to write asynchronous code that looks synchronous, built on top of promises.

### The Event Loop

The event loop is what enables JavaScript to perform non-blocking operations, despite being single-threaded. Here's a simplified view of how it works:

1. **Call Stack**: Executes functions and keeps track of the current execution context.
2. **Heap**: Memory allocation for objects.
3. **Queue**: A task queue (or message queue) holds messages (callbacks, promises, etc.) that need to be processed.

### Process Flow

1. **Executing Code**: JavaScript starts executing code from the top of the call stack.
2. **Async Operations**: When an asynchronous operation is encountered (e.g., `setTimeout`, `fetch`, I/O operations), it's offloaded to the Web APIs (browser environment) or Node APIs.
3. **Task Queue**: Once the async operation is complete, the callback or promise is placed in the task queue.
4. **Event Loop**: Constantly checks if the call stack is empty. If the call stack is empty, the event loop pushes the first task from the queue to the call stack for execution.
5. **Microtask Queue**: Promises and other microtasks have their own queue and are given priority over the task queue. The event loop first processes all tasks in the microtask queue before moving to the task queue.

### Example

Here's a simple example to illustrate:

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Timeout callback");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise callback");
});

console.log("End");
```

**Output Explanation**:

1. **Call Stack**: `console.log('Start')` is executed and removed from the stack.
2. **Timeout**: `setTimeout` callback is sent to the Web API, and the call stack continues.
3. **Promise**: `Promise.resolve().then` callback is placed in the microtask queue.
4. **Call Stack**: `console.log('End')` is executed and removed from the stack.
5. **Microtask Queue**: `Promise` callback is executed and removed from the microtask queue.
6. **Task Queue**: `setTimeout` callback is executed and removed from the task queue.

**Output**:

```
Start
End
Promise callback
Timeout callback
```

This demonstrates how JavaScript can handle asynchronous tasks efficiently using the event loop, ensuring the main thread remains non-blocking.
