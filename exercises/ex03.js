// Create a function called insertAfterTarget that inserts a new element after a target element
// Make sure to implement the Stack principle (LIFO)

const Queue = require('../lib/Queue');
const Stack = require('../lib/Stack');

function insertAfterTarget(target, newElement) {
  // your code here
  const tempStack = new Stack

  while (!stack.isEmpty()) {
    let curr = stack.pop()

    tempStack.push(curr)
    if (stack.peek() === target) {
      tempStack.push(newElement)
    }
  }
  while (!tempStack.isEmpty()) {
    stack.push(tempStack.pop())
  }
}

const stack = new Stack();
stack.push("A");
stack.push("B");
stack.push("C");
stack.push("D");

insertAfterTarget("B", "X");
console.log(stack.printStack()); // A B X C D