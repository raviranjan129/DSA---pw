let ListNode = function(val) {
    this.val = val;
    this.next = null;
}
 
var MyLinkedList = function() {
    this.head =null;  // because initially everything is empty;
};

let partition = function(head,x){
    let d1=new ListNode(-1);
    let d2 = new ListNode(-1);

    let t1=d1;
    let t2=d2;

    let curr = head;
    while(curr != null){
        let temp=curr;
        curr = curr.next;
        temp.next=null;

        if(temp.val<x){
           t1.next=temp;
            t1=t1.next;
        }else{
            t2.next=temp;
            t2=t2.next;
        }
    }
    t1.next = d2.next;
    d2.next=null;
    let result=d1.next;
    d1.next=null;
    return result;
}



MyLinkedList.prototype.addAtTail = function(val) {
    if(this.head == null){
        // ll is empty;
        this.head = new ListNode (val);
    }else{
         let temp = this.head;
         while(temp.next != null){
            temp = temp.next;
         }
         // when the loop ends ,temp point at the tail node;
         let n = new ListNode (val);
         temp.next = n;

    }
};



let linkedList = new MyLinkedList();


linkedList.addAtTail(1);
linkedList.addAtTail(4);
linkedList.addAtTail(3);
linkedList.addAtTail(2);
linkedList.addAtTail(5);
linkedList.addAtTail(2);








let head = linkedList.head;


let x = 3;
let result = partition(head, x);        // calling partition function;


while (result !== null) {
    console.log(result.val);
    result = result.next;
}
