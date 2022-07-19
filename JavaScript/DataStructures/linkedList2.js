//Doubly Linked List Implementation

class Node {
    constructor(data, prev = null, next = null) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
    }

    append(data) {
        if (this.head === null) {
            this.head = new Node(data);
        } else {
            let currNode = this.head;

            while (currNode.next !== null) {
                currNode = currNode.next;
            }
            currNode.next = new Node(data);
            currNode.next.prev = currNode;
        }
    }

    prepend(data) {
        if (this.head === null) {
            this.head = new Node(data);
        } else {
            let topNode = this.head;
            this.head = new Node(data);
            this.head.next = topNode;
        }
    }

    insert(data, index) {
        let pos = 0;
        let currNode = this.head;

        if (index <= pos) {
            this.prepend(data);
        } else if (index >= this.size) {
            this.append(data);
        } else {
            while (pos < index - 1) {
                currNode = currNode.next;
            }
            let nextNode = currNode.next;
            currNode.next = new Node(data);
            currNode.next.prev = currNode;
            currNode.next.next = nextNode;
            currNode.next.next.prev = currNode.next;
        }
    }

    remove(data) {
        if (this.head.data === data) {
            this.head = this.head.next;
            this.head.prev = null;
        } else {
            let currNode = this.head;

            while (currNode !== null) {
                if (currNode.next.data === data) {
                    let removedNode = currNode.next;
                    if (removedNode.next === null) {
                        currNode.next = null;
                    } else {
                        currNode.next = removedNode.next;
                        currNode.next.prev = currNode;
                    }        
                    break;
                }
                currNode = currNode.next;
            }
        }
    }

    removeAtIndex(index) {
        if (index >= this.size) {
            index = this.size - 1;
        }
        if (index <= 0) {
            this.remove(this.head.data);
        } else {
            let pos = 0;
            let currNode = this.head;

            while (pos < index - 1) {
                currNode = currNode.next;   
                pos++;
            }
            if (index == this.size - 1) {
                console.log(1)
                currNode.next = null;
            } else {
                let removedNode = currNode.next;
                currNode.next = removedNode.next;
                currNode.next.prev = currNode;
            }    
        } 
    }

    display() {
        const list = [];
        let currNode = this.head;

        while (currNode !== null) {
            if (currNode === this.head) {
                list.push(`[Head: ${currNode.data}]`);
            } else if (currNode.next === null) {
                list.push(`[Tail: ${currNode.data}]`);
            } else {
                list.push(`[${currNode.data}]`);
            }
            currNode = currNode.next;
        }
        console.log(list.join(" <-> "))
    }

    get size() {
        let len = 0;
        let currNode = this.head;

        while (currNode !== null) {
            currNode = currNode.next;
            len++;
        }
        return len;
    }
}

let linkedList = new DoublyLinkedList();

linkedList.append(2);
linkedList.append(3);

linkedList.prepend(0);

linkedList.insert(1, 1);
linkedList.insert(4, 4);

linkedList.remove(0);

linkedList.removeAtIndex(6);

// console.log(linkedList.head);
// console.log(linkedList.head.next);
// console.log(linkedList.head.next.next);
console.log(linkedList.size);
linkedList.display();