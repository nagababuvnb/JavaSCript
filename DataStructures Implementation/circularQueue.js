class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.front = -1;
    this.rear = -1;
    this.capacity = capacity;
    this.currentlength = 0;
  }

  isFull() {
    return this.capacity === this.currentlength;
  }

  isEmpty() {
    return this.currentlength === 0;
  }

  enqueue(element) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = element;
      this.currentlength += 1;
      if (this.front === -1) {
        this.front = this.rear;
      }
    }
  }

  dequeue() {
    if (!this.isEmpty()) {
      const item = this.items[this.front]
      this.items[this.front] = null;
      this.front = (this.front + 1) % this.capacity;
      this.currentlength -= 1;
      return item
    }
    if (this.isEmpty()) {
      this.front = -1;
      this.rear = -1;
      return null;
    }
    
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[this.front];
    }
  }

  print() {
    if (this.isEmpty()) {
      return "queue is empty";
    } else {
      let str = "";
      let i;
      for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
        str += this.items[i] + " ";
      }
      str += this.items[i];
      return str;
    }
  }
}

const myqueue = new CircularQueue(5);
console.log(myqueue.isEmpty());
console.log(myqueue.enqueue(10));
console.log(myqueue.enqueue(20));
console.log(myqueue.enqueue(30));
console.log(myqueue.enqueue(40));
console.log(myqueue.enqueue(40));
console.log(myqueue.isFull());
console.log(myqueue.print());
console.log(myqueue.currentlength);
console.log(myqueue.dequeue());
console.log(myqueue.print());
console.log(myqueue.peek());
