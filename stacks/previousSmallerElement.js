

class stack {
    #arr;
    constructor(){
        this.#arr=[];

    }
    push(Element){
        this.#arr.push(Element);
    }
    pop(){
        this.#arr.pop();
    }
    top(){
        return this.#arr[this.#arr.length-1];
    }

}

const previouseSmallerElement = function(arr){

    let st= new stack();
    let result = [];

    st.push(-1);
   
    for(let i=0;i<arr.length;i++ ){
        let curr = arr[i];
        while(st.top()> curr){
            st.pop();
        }
        result[i]=st.top();
        st.push(curr);
    }
    return result;
}

const arr=[1,2,4,3,6];

console.log(previouseSmallerElement(arr));