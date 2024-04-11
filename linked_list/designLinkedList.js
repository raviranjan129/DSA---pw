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
MyLinkedList.prototype.get = function(index) {
    let i = 0;
    let temp = this.head;
    while(i<index && temp !=null){
        i++;
        temp=temp.next;
    }
    if( temp == null){
        return -1;
    }
    return temp.data;
};

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
MyLinkedList.prototype.addAtTail = function(val) {
    if(this.head == null){
        // ll is empty;
        this.head = new Node(val);
    }else{
         let temp = this.head;
         while(temp.next != null){
            temp = temp.next;
         }
         // when the loop ends ,temp point at the tail node;
         let n = new Node(val);
         temp.next = n;

    }
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {

    if(this.head == null && index != 0){
        return;
    }
    if(this.head == null ){
        this.head = new Node(val);
        return;
    }
    if(index == 0){
        this.addAtHead(val);
        return;
    }
    let i=0;
    let prev=null;
    let curr=this.head;
    while(i<index && curr !=null){
        i++;
        prev=curr;
        curr=curr.next;
    }
    if(i !=index){
        return;          //
    }
    let n=new Node(val);
    
    prev.next=n;
    n.next=curr;
    return;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(this.head == null ){  // ll is empty;
        return;
    }
    if(index == 0){
        this.deleteAtHead();
        return;
    }
    let i =0;
    let prev=null;
    let nodeTobeDel = this.head;
    while(i<index &&  nodeTobeDel !=null){
        prev=  nodeTobeDel;
         nodeTobeDel= nodeTobeDel.next;
         i++;
    }
    if(i != index){
        // ll was not having the index;
        return;
    }
  if(nodeTobeDel == null){
    return;
  }
    let newNext =  nodeTobeDel.next;
    
 prev.next=newNext;
     nodeTobeDel.next=null; // this now will be later garbage collected;
    
     
     return;
    
   
};

MyLinkedList.prototype.deleteAtHead = function(){
    if(this.head == null){
        return;
    }
    let newHead = this.head.next;
    let nodeTobeDel=this.head;   //curr head;
    this.head=newHead;
    nodeTobeDel.next=null;     // prev head disconected;
}

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */