

class stack {
    #arr;
    constructor() {
        this.#arr = [];
    }
    push(element) {
        this.#arr.push(element);
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

const nextsmallerElement = function (arr) {        //this function will calculate the smaller element to the right of the index;
    let st = new stack();

    st.push(-1);
    let result = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        let curr = arr[i];

        while (st.top() != -1 && arr[st.top()] >= curr) {
            st.pop();
        }
        result[i] = st.top();
        st.push(i);
    }
    return result;
}

const previouseSmallerElement = function (arr) {       // this funciton will calculate the smallwer element to the left of the index;
    let st = new stack();

    let ans = [];
    st.push(-1);

    for (let i = 0; i < arr.length; i++) {
        let curr = arr[i];
        while (st.top() != -1 && arr[st.top()] >= curr) {
            st.pop();
        }
        ans[i] = st.top();
        st.push(i);
    }
    return ans;
}


const largestRectangleInHistogram= function(heights) {
   

    const next = nextsmallerElement(heights);
    const previous = previouseSmallerElement(heights);

    let area = Number.MIN_VALUE;

    for(let i=0;i<heights.length;i++){
        let l=heights[i];

        let b = next[i] - previous[i] - 1;
   if (next[i] === -1) {      // if next[i]== -1 means there is no smaller elem at the right so we should return next[i] as heights.lenght(means lenght of the array);
    b = heights.length - previous[i] - 1;
     }

        let newArea = l*b;
        area = Math.max(area,newArea);
    }
    return area;

   
};
// const heights = [2, 4];
const heights = [2,1,5,6,2,3];
console.log(largestRectangleInHistogram(heights));