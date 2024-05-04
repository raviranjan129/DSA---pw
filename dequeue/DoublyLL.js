class node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublylinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    isEmpty() {
        return this.head == null;
    }
    addAtHead(data) {
        // 1> is the LL is empty, create a new node and assign it as head and tail both;

        if (this.isEmpty()) {
            //create a new node;
            const newNode = new node(data);
            //assign this node as the head;
            this.head = newNode;
            //assign the same node as tail;
            this.tail = newNode;
        } else {
            //2. if the list is not empty , then create a new node and attach it behind the old head;

            //a. create a new node;
            const newNode = new node(data);
            //attach behind the old head by makeing next of newnode equal to old head;
            newNode.next = this.head;

            //connect the prev of the old head to the newNode;
            this.head.prev = newNode;
            //c. make the newNode as the head of the list;
            this.head = newNode;
        }
    }
    addAtTail(data) {
        if (this.isEmpty()) {
            //if the ll is empty then adding at head is same as adding at tail;
            this.addAtHead(data);
        } else {
            //ll is not empty;

            //create a new node;
            const newNode = new node(data);
            //setup the conn;
            this.tail.next = newNode;
            newNode.prev = this.tail;

            // reassign the tail as the new node;
            this.tail = newNode;
        }
    }
    removeAtHead() {
        if (this.isEmpty()) {
            //if the ll is empty ,we can't do anything ;
            return
        } else if (this.head.next == null) {
            //you have a single node,just destroy the node;

            this.head = null;
            this.tail = null;
        } else {
            //ll has size more than one;
            const newHead = this.head.next;    //this will assign head as the next of old head;
            //break the conn;
            this.head.next = null;    // this is old head,to break the connection;
            newHead.prev = null;

            //assign the new head as the head;
            this.head = newHead;
        }
    }
    removeAtTail() {
        if (this.isEmpty()) {
            // if the ll is empty, we can't do anything;
            return;
        } else if (this.head.next == null) {
            // if ll is of size 1, then remove the single node;

            this.head = null;
            this.tail = null;

        } else {
            // ll with more than 1 size;

            // remember the newTail
            const newTail = this.tail.prev;
            //break the conn;
            newTail.next = null;
            this.tail.prev = null;

            //reassign the tail;
            this.tail = newTail;
        }
    }
    display(){
        //head to tail;
        let temp = this.head;

        while(temp!=null){
            console.log(temp.data);
            temp = temp.next;
        }


        console.log("*********"); //seperator;
        //tail to head

        temp = this.tail;
        while(temp != null){
            console.log(temp.data);
            temp=temp.prev;
        }
    }
}

const Dll = new DoublylinkedList();

Dll.addAtHead(10);
Dll.addAtHead(9);
Dll.addAtHead(8);


Dll.removeAtHead();
Dll.removeAtHead();


Dll.addAtTail(11);
Dll.addAtTail(12);


Dll.removeAtTail();
Dll.removeAtTail();

Dll.display();