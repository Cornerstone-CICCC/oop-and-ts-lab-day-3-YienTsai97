// Create a function called storeCatalog that returns an object with 3 properties:
// - products (object with product names as keys and no. of instances of the product)
// - totalPrice
// - mostExpensive
// Make sure to implement the Queue principle (FIFO)

const Queue = require('../lib/Queue');

function storeCatalog(queue) {
  // your code here
  const tempQueue = new Queue
  let products = {}
  let totalPrice = 0
  let max = {}


  while (!queue.isEmpty()) {
    let curr = queue.dequeue()

    //products
    let productAmount = 1
    for (let items in products) {
      if (items === curr.product) {
        productAmount++
      }
    }
    products[curr.product] = productAmount

    //total price
    totalPrice += curr.price

    //mostExpensive
    if (Object.keys(max).length === 0) {
      max = curr
    }
    if (max.price < curr.price) {
      max = {}
      max = curr
    }

    //queue to tempQueue
    tempQueue.enqueue(curr)
  }


  while (!tempQueue.isEmpty()) {
    queue.enqueue(tempQueue.dequeue())
  }


  return { products, totalPrice, mostExpensive: max.product }
}

const store = new Queue();
store.enqueue({ product: 'Milk', price: 10 })
store.enqueue({ product: 'Soap', price: 5 })
store.enqueue({ product: 'Cereal', price: 12 })
store.enqueue({ product: 'Milk', price: 10 })
store.enqueue({ product: 'Shampoo', price: 7 })
store.enqueue({ product: 'Broom', price: 25 })
store.enqueue({ product: 'Cereal', price: 9 })

const result = storeCatalog(store)
console.log(result)
// {
//   products: {
//     "Milk": 2,
//     "Soap": 1,
//     "Cereal": 2,
//     "Shampoo": 1,
//     "Broom": 1
//   },
//   totalPrice: 78,
//   mostExpensive: "Broom"
// }