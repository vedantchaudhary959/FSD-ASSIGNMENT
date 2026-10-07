console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

console.log("C");


//explanation of why it prints A, C, B instead of A, B, C, use these simple terms:   Synchronous Code First: JavaScript reads and executes code line-by-line from top to bottom. console.log("A") and console.log("C") are synchronous, so they execute immediately and are placed onto the Call Stack.   Handling setTimeout: When JavaScript hits setTimeout, it recognizes it as an asynchronous task. It hands it over to the Node.js API environment and schedules the callback to wait.   The Role of the Event Loop: The Event Loop has one main job: it watches the Call Stack. It will never let waiting callbacks run until the Call Stack is completely empty. 
//Because A and C are running synchronously, they finish first. Only after the stack is empty does the Event Loop push B from the queue to be printed. 