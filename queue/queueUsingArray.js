
class Queue{
    constructor(n) {
        this.queue = new Array(n);
        this.front = -1;
        this.rear = -1;
        this.n = n;
    }
}

Queue.prototype.enqueue =function(value){
    if((this.rear+1)%this.n == this.front){   //  if queue is full ;
        return;
    }
if(this.rear == -1){ // queue is empty;
    this.front = 0;  // adding first elem at index
}
    this.rear = (this.rear+1)%this.n;  // finding the index for the rear;
    this.queue[this.rear] = value;  // adding the value ;

}

Queue.prototype.dequeue = function(){
    if(this.front == -1){
        return undefined;
    }
    let result = this.queue[this.front];
    if(this.front == this.rear){     // it means there is only single elem is present in the queue so pop the elem and set front and rear to -1;
        this.front =this.rear = -1;
    }else{
        this.front = (this.front +1)%this.n; // update the front to pop the elm;
    }
    return result;
}

Queue.prototype.print = function(){
    // if(this.front == -1 && this.rear == -1){  // this means queue is empty;
    //     return 0;
    // }
   
    let ans = '';
        let current = this.front;
        while (current !== this.rear) {
            ans += this.queue[current] + ' ';
            current = (current + 1) % this.n;
        }
        ans += this.queue[current]; // this  expression add the last element directly ;
        return ans;
}
let n =4;
const queue = new Queue(n);

queue.enqueue(4);
queue.enqueue(6);
queue.enqueue(8);
queue.enqueue(9);





// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// queue.enqueue(91);
// console.log(queue.dequeue());
// console.log(queue.dequeue());


// queue.enqueue(90);
// console.log(queue.dequeue());




console.log(queue.print())