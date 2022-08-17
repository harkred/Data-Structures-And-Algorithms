//Queue implementation using arrays

class Queue {
    constructor() {
        this.queue = [];
    }

    isEmpty() {
        //Checks whether the queue is empty or not
        return this.queue.length === 0;
    }

    enqueue(element) {
        //Adds an element to the end of the queue
        this.queue.push(element);
    }

    dequeue() {
        //Removes an element from the start of the queue
        if (this.isEmpty()) {
            return;
        }
        return this.queue.shift();
    }
    
    display() {
        //Displays the contents of the queue
        console.log(`${this.queue[0]} <- Top`);

        for (let i = 1; i < this.size; i++) {
            console.log(`${this.queue[i]}`);
        }
    }

    get size() {
        //Returns the size of the queue
        return this.queue.length;
    }
}

const queue = new Queue();

queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

queue.dequeue();

console.log(queue.size);
queue.display();