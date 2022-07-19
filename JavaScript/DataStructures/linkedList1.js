//Singly Linked List Implementation
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
    }

    append(data) {
        //Append node at the end of the list
        //Time Complexity O(n)

        if (this.head === null) {
            this.head = new Node(data);
        } else {
            let currNode = this.head;

            while (currNode.next !== null) {
                currNode = currNode.next;
            }
            currNode.next = new Node(data);
        }
    }

    prepend(data) {
        //Append node at the beginning of the list
        //Time Complexity O(1)

        if (this.head === null) {
            this.head = new Node(data);
        } else {
            this.head = new Node(data, this.head);
        } 
    }

    insert(data, index) {
        //Inserts node at the provided index of the linked list
        //Time Complexity O(n)

        if (index <=0) {
            this.prepend(data);
        } else if (index >= this.size) {
            this.append(data);
        } else {
            let pos = 0;
            let currNode = this.head;

            while (pos < index - 1) {
                currNode = currNode.next;
                pos++;
            }
            let nextNode = currNode.next;
            currNode.next = new Node(data, nextNode);
        }
    }

    remove(data) {
        //Removes the provided node from the linked list
        //Time Complexity: O(n)

        let currNode = this.head;

        if (this.head.data === data)  {
            this.head = this.head.next;
            return;
        }
        while (currNode !== null) {
            if (currNode.next.data == data) {
                currNode.next = currNode.next.next;
                break;
            }
            currNode = currNode.next;
        }
    }

    removeAtIndex(index) {
        //Removes the node from the linked list
        //Time Complexity: O(n)

        let pos = 0;
        if (index >= this.size) {
            index = this.size - 1;
        }
        if (index <= pos) {
            this.head = this.head.next;
        } else {
            let currNode = this.head;

            while (pos < index - 1) {
                currNode= currNode.next;
                pos++;
            }
            currNode.next = currNode.next.next;
        }
    }

    display() {
        //Displays the contents of the linked list

        const list = [];
        let currNode = this.head;

        while (currNode !== null) {
            if (currNode == this.head) {
                list.push(`[Head: ${currNode.data}]`);
            } else if (currNode.next === null) {
                list.push(`[Tail: ${currNode.data}]`);
            } else {
                list.push(`[${currNode.data}]`);
            }
            currNode = currNode.next;
        }
        console.log(list.join(' -> '));
    }

    get size() {
        //Gives the size of the list
        
        let len = 0;
        let currNode = this.head;

        while (currNode !== null) {
            len++;
            currNode = currNode.next;
        }
        return len;
    }
}

const linkedList = new SinglyLinkedList();

linkedList.append(1);
linkedList.append(3);

linkedList.prepend(0);

linkedList.insert(-1, 0);
linkedList.insert(2, 3);
linkedList.insert(4, 5);
linkedList.insert(5, linkedList.size + 1);

linkedList.removeAtIndex(linkedList.size + 1);

linkedList.remove(-1);

linkedList.display();

console.log(linkedList.size);