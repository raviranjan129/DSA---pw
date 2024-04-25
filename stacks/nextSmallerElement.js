/**
 * You are given an array 'ARR' of integers of length N. Your task is to find the next smaller element for each of the array elements.
 */

class stack {
    #arr;
    constructor() {
        this.#arr = [];
    }
    push(Element) {
        this.#arr.push(Element)
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
    size() {
        return this.#arr.length;
    }
}

const nextsmallerElement = function (arr) {
    let st = new stack();

    st.push(-1);

    let ans = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        let curr = arr[i];

        while (st.top() >= curr) {
            st.pop();
        }
        ans[i] = st.top();
        st.push(curr);
    }
    return ans;
}

const arr = [2, 1, 4, 3];

console.log(nextsmallerElement(arr));