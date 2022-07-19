class Node {
    constructor(value, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        //Adds value to the tail of the linked list
        //Time Complexity: O(n)
        //Space Complexity: O(1)

        if (this.head == null) {
            this.head = new Node(value);
        } else {
            let current = this.head;

            while(current.nextNode) {
                current = current.nextNode;
            }
            current.nextNode = new Node(value);
        }
    }

    get display() {
        //Displays the linked list
        //Time Complexity: O(n)
        //Space Complexity: O(1)

        let current = this.head;
        const arr = [];

        while (current) {
            if (arr.length == 0) {
                arr.push(`Head: ${current.value}`);
            } else if (current.nextNode == null) {
                arr.push(`Tail: ${current.value}`);
            } else {
                arr.push(`${current.value}`);
            }
            current = current.nextNode;
        }
        return arr.join(" -> ")
    }
}

const reverseLinkedList = (head) => {
    //Time Complexity: O(n)
    //Space Complexity: O(n)

    if (head.nextNode == null) {
        return head;
    }
    const newNode = reverseLinkedList(head.nextNode);
    head.nextNode.nextNode = head;
    head.nextNode = null;
    
    return newNode;
}

//Testing
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);

//Linked List before reversal
console.log(list.display);

const reversedList = new LinkedList();
reversedList.head = reverseLinkedList(list.head);

//Linked List after reversal
console.log(reversedList.display);