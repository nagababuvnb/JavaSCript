class Stack{
    constructor(){
        this.items=[];
        this.size =0
    }

    push(element){
       this.items.push(element);
       this.size++
    }

    pop(){
        let item;
        
            item = this.items.pop(this.items.length-1)
            this.size--;
        
        return item;
    }

    isEmpty(){
      return this.items.length === 0
    }

    peek(){
        return this.items[this.items.length-1];
    }

    has(element){
        return this.items.includes(element)
    }

    print(){
        return this.items.toString()
    }

}

const mystack = new Stack();
console.log(mystack.isEmpty())
console.log(mystack.push(10))
console.log(mystack.push(20))
console.log(mystack.push(30))
console.log(mystack.push(40))
console.log(mystack.pop(20))
console.log(mystack.print())
console.log(mystack.size)


