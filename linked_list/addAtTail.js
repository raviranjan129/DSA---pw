let listNode=function(data){           // constructor function which will create an object;
    this.data=data;             
    this.next=null;
}

let MyLinkedList=function(){
    this.head=null;              // initially ll is empty;
}

MyLinkedList.prototype.addAtTail=function(val){
            if(this.head == null){           // if ll is empty;
                this.head=new listNode(val);
            } else{
                // when ll is not empty;
                let temp= this.head;
                

                while(temp.next != null){ // this loop will check is there any node ,if yes then point temp variable to next of temp ;
                    temp=temp.next;
                }
                let n=new listNode(val);   //create new node with value val
                temp.next=n;                // adding new value at the tail;
                
            }
}

let linkedList = new MyLinkedList();

linkedList.addAtTail(1)
linkedList.addAtTail(2);
linkedList.addAtTail(3);

let current = linkedList.head; // this current variable will point to the first value of ll;

// to print the output ;

while(current !=null){    
    console.log(current.data);
    current=current.next;

}