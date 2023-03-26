class Queue {
  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
    this.size = 0;
  }

  enqueue(element) {
    this.items[this.rear]=element;
    this.rear++;
    this.size++;
  }

  dequeue() {
    delete this.items[this.front];
    this.front++
    this.size--;

    return this.items[this.front];
  }

  isEmpty() {
    return this.rear-this.front === 0;
  }

  peek() {
    return this.items[this.front];
  }

//   has(element) {
//     return this.items.includes(element);
//   }

  print() {
    return this.items;
  }
}

const myqueue = new Queue();
console.log(myqueue.isEmpty());
console.log(myqueue.enqueue(10));
console.log(myqueue.enqueue(20));
console.log(myqueue.enqueue(30));
console.log(myqueue.enqueue(40));
console.log(myqueue.print());
console.log(myqueue.size);
console.log(myqueue.dequeue());
console.log(myqueue.print());
console.log(myqueue.size);
