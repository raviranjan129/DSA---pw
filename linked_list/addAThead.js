var Node = function (data){  // it is a constructor func node. this is used to create node objects; 
    this.data=data; 
    this.next = null; // until or unless we attach this new node to a list, the next property should be null ;
 }
var MyLinkedList = function() {
    this.head =null;  // because initially everything is empty;
};

MyLinkedList.prototype.addAtHead = function(val) {
    if(this.head == null){
        //means the linked list is empty , so this node should become the head;
        this.head = new Node(val);
    }else{
        // when linked list is not empty;

        let n = new Node (val);  //n is the object;
        n.next = this.head; // next is the class/obj property,this property stores the refrence of new node;
        this.head = n;
    }

};



let linkedList = new MyLinkedList();


linkedList.addAtHead(5);
linkedList.addAtHead(2);
linkedList.addAtHead(1);


let current = linkedList.head;
while (current !== null) {
    console.log(current.data);
    current = current.next;
}
