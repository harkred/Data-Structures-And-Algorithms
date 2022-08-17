//Stack implementation using Array

class Stack {
    constructor() {
        this.stack = [];
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    push(element) {
        this.stack.unshift(element);
    }

    pop() {
        if (this.isEmpty()) {
            return;
        }
        this.stack.shift();
    }

    display() {
        if (this.isEmpty()) {
            return;
        }
        console.log(`${this.stack[0]} <- Top`);

        for (let i = 1; i < this.size; i++) {
            console.log(`${this.stack[i]}`);
        }
    }

    get size() {
        return this.stack.length;
    }
}

const stack = new Stack();

stack.push(3);
stack.push(2);
stack.push(1);
stack.push(0);

stack.pop();

console.log(stack.size);
stack.display();