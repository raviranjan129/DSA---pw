class node{
    constructor(data){
        this.data=data;
        this.next=null;
    }


}

class LInkedlist{
    constructor(){
        this.head=null; // head of the ll
        this.tail=null; //tail of the ll
    }

    isEmpty(){
        return this.head=null;
    }
    getHead(){
        if(this.head == null){
            return undefined;
        }
        else{
            return this.head.data;
        }
    }
    getTail(){
        if(this.tail == null){
            return undefined;
        }
        else{
            return this.tail.data;
        }
    }
    removeAtHead(){
        if(this.head == null) {
            return;        // ll is empty;
        }

        const newHead = this.head.next; //we will store the new head;
        this.head.next=null;  // disconnect the old head from the ll
        this.head=newHead;  //allocating the brand new head

            // if head becomes null after removal of the node means ll is empty now ;
            if (this.head == null){
                this.tail = null;
            }
        
    }
    addAtTail(data){
        if(this.head==null){ // ll is empty;
            const newNode=new node(data);
            this.head=newNode;
            this.tail=newNode;
            return;
        }else{
            const newNode=new node(data);
            this.tail.next=newNode;      // we are attaching the new node after the prev tail;
            this.tail=newNode;       // we updated the tail property;
        }
    }
}


class queue {
    constructor(){
        this.ll=new LInkedlist(); // we will create a brand new empty list;
    }
    enqueue(data){
        this.ll.addAtTail(data);
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