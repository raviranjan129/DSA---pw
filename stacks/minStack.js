class stack {
    #arr;
    constructor() {
        this.#arr = [];

    }
    push(val) {
        this.#arr.push(val);
    }
    pop() {
        this.#arr.pop();
    }
    top() {
        return this.#arr[this.#arr.length - 1];
    }
    isEmpty() {
        return this.#arr.length == 0;
    }
}

var MinStack = function () {
    this.st = new stack();
    this.st2 = new stack();

};

/** 
 * @param {number} val
 * @return {void} 
 * 
 * 
 */


/**
 * 
 * in this concept i am using two stack one to find min and one to store greater than min; 
 */
MinStack.prototype.push = function (val) {

    

    if (this.st2.isEmpty() || val <= this.st2.top()) {      
        this.st2.push(val);
    }
    this.st.push(val);

    
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function (val) {
    if (this.st.top() == this.st2.top()) {
        this.st2.pop();
    }

    this.st.pop();
};

/**
 * @return {number}
 */

MinStack.prototype.top = function () {
    return this.st.top();
    
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.st2.top() ;
};

let Minstack = new MinStack();

Minstack.push(-2);
Minstack.push(0);
Minstack.push(-3);



console.log(Minstack.getMin());
Minstack.pop();
console.log(Minstack.getMin());
Minstack.pop();
console.log(Minstack.getMin());