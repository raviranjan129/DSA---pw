
class stack{
    #arr;
    constructor(){
        this.#arr=[];

    }
    push(elem){
        this.#arr.push(elem);
    }
    pop(){
        this.#arr.pop();
    }
    top(){
        return this.#arr[this.#arr.length-1];
    }
    isEmpty(){
        return this.#arr.length == 0;
    }
}

const removeAllDuplicates = function(s){
    let st = new stack();

    st.push(s[0])

    for(let i = 1 ; i<s.length;i++){
        if(!st.isEmpty() && st.top() == s[i]){
            st.pop();
        }else{
            st.push(s[i]); 
        }

    
    
    }
    let result ="";
    while(!st.isEmpty()){
        result = st.top() + result;    // append the top of the stack;
        st.pop();
    }
    return result;
}

const s= "abbaca";

console.log(removeAllDuplicates(s));