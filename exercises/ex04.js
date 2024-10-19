// Create a function called isPalindrome that checks if the elements in the queue form a palindrome
// A palindrome reads the same forwards and backwards (e.g., 1 2 3 2 1)
// Make sure to implement the Queue principle (FIFO)

const Queue = require('../lib/Queue');

function isPalindrome(queue) {
  // your code here
  const tempQueue = new Queue
  const main = []
  const compare = []

  while (!queue.isEmpty()) {
    let curr = queue.dequeue()
    tempQueue.enqueue(curr)
    compare.push(curr)
  }

  while (!tempQueue.isEmpty()) {
    let curr = tempQueue.dequeue()
    queue.enqueue(curr)
    main.push(curr)
  }


  if (main.toString() === compare.toString()) {
    return true
  }
  return false
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(2);
queue.enqueue(1);

console.log(isPalindrome(queue)); // true