
let listNode = function(data){
    this.data=data;
    this.next=null;
}

let MyLinkedList =function(){
    this.head=null;             // initially all empty;
}

MyLinkedList.prototype.addAtTail=function(val){    // this function will add data at the tail of the ll;
    if(this.head == null){
        this.head=new listNode(val);
    }else{
        let temp = this.head;

        while(temp.next != null){
                temp=temp.next;
        }
        let n= new listNode(val);
        temp.next=n;
    }
}

let linkedList=new MyLinkedList();

linkedList.addAtTail(1);
linkedList.addAtTail(1);
linkedList.addAtTail(2);
linkedList.addAtTail(3);
linkedList.addAtTail(3);

// let curr = linkedList.head;        

// while(curr != null){          // this will print the created ll;
//     console.log(curr.data);
//     curr=curr.next;
// }

let removeDuplicates = function(head){          // logic to remove duplicates from the created LL;
    let current =head;

    while(current != null && current.next != null){
        if(current.data == current.next.data){
            let tobeDel=current.next;
            current.next=tobeDel.next;
            tobeDel.next=null;
        }else{
            current = current.next;
        }
    }
    return head;               //this will return the original LL after removing duplicates;
}

let head= linkedList.head;

let result = removeDuplicates(head);       



while (result !== null) {         // this loop will print output 
    console.log(result.data);
    result = result.next;
}

