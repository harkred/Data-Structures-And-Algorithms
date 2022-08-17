//Stack implementation using linked list

class Node {
    constructor(data, next= null) {
        this.data = data;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    isEmpty() {
        //Checks if the stack is empty
        return this.top === null;
    }

    push(element) {
        //Adds an element to the top
        //Time complexity: O(1)

        this.top = new Node(element, this.top);
    }

    pop() {
        //Removes an element from the top
        //Time complexity: O(1)

        if (this.isEmpty()) {
            return;
        }
        this.top = this.top.next;
    }

    display() {
        //Displays the contents of the stack
        if (this.isEmpty()) {
            return;
        }
        let currNode = this.top;

        while(currNode !== null) {
            if (currNode === this.top) {
                console.log(`${currNode.data} <- Top`);
            } else {
                console.log(`${currNode.data}`);
            }
            currNode = currNode.next;
        }
    }

    get size() {
        //Gets the size of the stack

        let size = 0;
        let currNode = this.top;

        while (currNode !== null) {
            size++;
            currNode = currNode.next;
        }
        return size;
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