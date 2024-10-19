// Create a function called deleteAllNodesWithValue that removes all nodes with a specific value from the DLL
// Make sure to update the size of the list as well

const DLL = require('../lib/DLL');

function deleteAllNodesWithValue(list, value) {
  // your code here
  let runner = list.head

  if (list.isEmpty()) {
    return false
  }

  if (runner.data === value) {
    runner = runner.next
    runner.prev = null
    list.size--
  }

  if (list.tail.data === value) {
    list.tail === list.tail.prev
    list.tail.next = null
    list.size--
  }

  while (runner.next !== null) {
    if (runner.next.data === value) {
      runner.next = runner.next.next
      runner.next.prev = runner
      this.size--
    }

    runner = runner.next
  }
  return list
}




const list = new DLL();
list.insertAtBack(1);
list.insertAtBack(2);
list.insertAtBack(3);
list.insertAtBack(2);
list.insertAtBack(5);

deleteAllNodesWithValue(list, 2);
console.log(list.print()); // Output: 1 <-> 3 <-> 5