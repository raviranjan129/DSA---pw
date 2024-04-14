var Node = function (data){  // it is a constructor func node. this is used to create node objects; 
    this.data=data; 
    this.next = null; // until or unless we attach this new node to a list, the next property should be null ;
 }
var MyLinkedList = function() {
    this.head =null;  // because initially everything is empty;
};

/** 
 * @param {number} index
 * @return {number}
 */

/** 
 * @param {number} val
 * @return {void}
 */
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

/** 
 * @param {number} val
 * @return {void}
 */


/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */

/** 
 * @param {number} index
 * @return {void}
 */


MyLinkedList.prototype.deleteAtHead = function(){
    if(this.head == null){
        return;
    }
    let newHead = this.head.next;
    let nodeTobeDel=this.head;   //curr head;
    this.head=newHead;
    nodeTobeDel.next=null;     // prev head disconected;
}

class stack {
    #ll;  // private linked list;
    
    constructor(){
        this.#ll=new MyLinkedList();
    }
    push(element){
        this.#ll.addAtHead(element);
    }
    pop(){
      this.#ll.deleteAtHead();  
    }
    top(){
        return this.#ll.head.data;
    }
}

let s= new stack();
s.push(10);
s.push(20);
s.push(30);

console.log(s.top());

s.pop();  // remove 30;

console.log(s.top());
s.pop(); // remove 20;

console.log(s.top());
