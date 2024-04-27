class node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class linkedList {
    constructor() {
        this.head = null; // maintain the head of the ll;
        this.tail = null; // maintain the tail of the ll;
    }
    isEmpty() {
        return this.head = null;
    }
    getHead() {
        if (this.head == null) {
            return undefined;
        } else {
            return this.head.data;
        }

    }
    getTail() {
        if (this.tail == null) {
            return undefined;
        } else {
            return this.tail.data;
        }
    }

    removeAtHead() {
         if(this.head == null) {
            return;        // ll is empty;
        }

        const newHead = this.head.next; //we will store the new head;
        this.head.next=null;  // disconnect the old head from the ll
        this.head=newHead;  //allocating the brand new head

        // if head becomes null after removal of the node means ll is empty now;

        if (this.head == null) {
            this.tail = null;    // if there is only single node then we should do tail also null;
        }
    }

    addAttail(data) {
        if (this.head == null) {
            // ll is empty;
            const newNode = new node(data);

            this.head = newNode;     // if ll is empty then the first node will be head as well as tail of the ll;
            this.tail = newNode;
            return;
        } else {
            const newNode = new node(data);
            this.tail.next = newNode;   // we are attaching the new node after the prev tail;
            this.tail = newNode;  // we are updated the tail;
        }
    }
}

class queue {
    constructor(){
        this.ll=new linkedList(); // we will create a brand new empty list;
    }
    enqueue(data){
        this.ll.addAttail(data);
    }
    dequeue(){
        this.ll.removeAtHead();
    }
    isEmpty(){
        return this.ll.isEmpty();
    }
    front(){
        return this.ll.getHead();
    }
    back(){
        return this.ll.getTail();
    }
}

const qu = new queue();

qu.enqueue(10);
qu.enqueue(20);
qu.enqueue(30);
qu.enqueue(40);

console.log(qu.front(),qu.back());

qu.dequeue();

console.log(qu.front(),qu.back());