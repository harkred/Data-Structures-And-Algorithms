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

const mergeSortedLinkedList = (head1, head2) => {
    //Time Complexity: O(n1 + n2)
    //Space Complexity: O(n1 + n2)

    if (head1 == null) {
        return head2;
    }
    if (head2 == null) {
        return head1;
    }

    if (head1.value < head2.value) {
        head1.nextNode = mergeSortedLinkedList(head1.nextNode, head2);
        return head1;
    } else {
        head2.nextNode = mergeSortedLinkedList(head1, head2.nextNode);
        return head2;
    }
}

//Testing
const list1 = new LinkedList();

list1.append(1);
list1.append(8);
list1.append(22);
list1.append(40);

const list2 = new LinkedList();

list2.append(4);
list2.append(11);
list2.append(16);
list2.append(20);

const mergedList = new LinkedList();

mergedList.head = mergeSortedLinkedList(list1.head, list2.head);
console.log(mergedList.display);