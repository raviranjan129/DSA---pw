class TreeNode {
    constructor(data) {
        this.data = data;
        this.right = null;
        this.left = null;
    }
}

class LinkedListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null; // head of the linked list
        this.tail = null; // tail of the linked list
    }

    isEmpty() {
        return this.head === null;
    }

    getHead() {
        return this.head ? this.head.data : undefined;
    }

    getTail() {
        return this.tail ? this.tail.data : undefined;
    }

    removeAtHead() {
        if (this.head === null) {
            return null; // linked list is empty
        }

        const node = this.head;
        this.head = this.head.next; // allocate the new head

        // if head becomes null after removal of the node, it means the linked list is empty now
        if (this.head === null) {
            this.tail = null;
        }
        
        return node.data; // return the node
    }

    addAtTail(data) {
        const newNode = new LinkedListNode(data);
        if (this.head === null) { // linked list is empty
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode; // attach the new node after the previous tail
            this.tail = newNode; // update the tail property
        }
    }
}

class CustomQueue {
    constructor() {
        this.ll = new LinkedList(); // create a brand new empty list
    }

    enqueue(data) {
        this.ll.addAtTail(data);
    }

    dequeue() {
        return this.ll.removeAtHead();
    }

    isEmpty() {
        return this.ll.isEmpty();
    }

    front() {
        return this.ll.getHead();
    }

    back() {
        return this.ll.getTail();
    }
}

const bottomLeft = function(root){
    if(root == null){
        return null;
    }
    const qu = new CustomQueue();
    qu.enqueue(root);
    
    let temp = null;

    while(!qu.isEmpty()){
        temp=qu.dequeue();

        if(temp.right){
            qu.enqueue(temp.right);
        }
        if(temp.left){
            qu.enqueue(temp.left);
        }
    }
    return temp.data;
}

const root = new TreeNode(2);
root.left=new TreeNode(1);
root.right=new TreeNode(3);

console.log(bottomLeft(root));