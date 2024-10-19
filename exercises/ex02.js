// Create a function called removeBetween that removes all elements between two unique elements
// Make sure to implement the Stack principle (LIFO)

const Stack = require('../lib/Stack');

function removeBetween(a, b) {
  // your code here
  const tempStack = new Stack
  const check = []

  while (!fruits.isEmpty()) {
    let curr = fruits.pop()

    if (curr === b) {
      tempStack.push(curr)
      check.push(curr)
    }

    if (curr === a) {
      tempStack.push(curr)
      check.push(curr)
    }

    if (curr !== a && curr !== b && check.includes(a) && check.includes(b)) {
      tempStack.push(curr)
    }
  }

  while (!tempStack.isEmpty()) {
    fruits.push(tempStack.pop())
  }

}

const fruits = new Stack();
fruits.push("Apple");
fruits.push("Banana");
fruits.push("Cherry");
fruits.push("Date");
fruits.push("Elderberry");

removeBetween("Banana", "Elderberry");
console.log(fruits.printStack()); // Apple Banana Elderberry