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
        return this.head==null;
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


class CustomQueue {
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



var levelOrder = function(root) {
    
if(root == null){
    return [];
}

    const qu = new CustomQueue();
    qu.enqueue(root);
    qu.enqueue(null);
    const result = [];
    let levelArray = new Array();
    while(!qu.isEmpty()) {
        const curr = qu.front();
        qu.dequeue();
        if(curr == null) {
            // this shows end of the last level
            if(!qu.isEmpty()) {
                // if the queue is not empty then in the queue we have all the elements
                // of the next level
                
                // before we refresh our level array it has data of last level
                result.push(levelArray);
                
                qu.enqueue(null); // we can use this null as a marker of end of current level
                levelArray = new Array();
            } else {
                // when queue is empty
                result.push(levelArray);
            }
        } else {
            levelArray.push(curr.data);
            if(curr.left) {
                qu.enqueue(curr.left);
            }
            if(curr.right) {
                qu.enqueue(curr.right);
            }
        }
        
    }
        return result;
};


const root= new node(3);
root.left=new node(9);
root.right=new node(20);
root.right.left=new node(15);
root.right.right=new node(7);

console.log(levelOrder(root));