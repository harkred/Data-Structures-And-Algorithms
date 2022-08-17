//Queue implementation using linked list

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class Queue {
    constructor() {
        this.queue = null
    }

    isEmpty() {
        return this.queue === null;
    }

    enqueue(element) {
        if (this.isEmpty()) {
            this.queue = new Node(element);
        } else {
            let currNode = this.queue;

            while (currNode.next !== null) {
                currNode = currNode.next;
            }
            currNode.next = new Node(element);
        }
    }

    dequeue() {
        if (this.isEmpty()) {
            return;
        }
        const removedNode = this.queue;
        this.queue = this.queue.next;
        return removedNode;
    }

    display() {
        let currNode = this.queue;

        while (currNode !== null) {
            if(currNode === this.queue) {
                console.log(`${currNode.data} <- Top`);
            } else {
                console.log(`${currNode.data}`);
            }
            currNode = currNode.next;
        }
    }

    get size() {
        let len = 0;
        let currNode = this.queue;

        while (currNode !== null) {
            len++;
            currNode = currNode.next;
        }
        return len;
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