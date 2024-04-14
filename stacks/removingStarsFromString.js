// implementing stack;
class stack {
    #arr; // private property;

    constructor(){
        this.#arr=[]; //
    }
push(element){
    this.#arr.push(element); // push the  elem into the stack;
}
pop(){
    this.#arr.pop();
}
top(){
    return this.#arr[this.#arr.length-1];
}
isEmpty(){
    return this.#arr.length == 0; // if arr is empty ,then return length ==  0;
}

}

let removeStars = function(s){
    let st= new stack();

    let i = 0; 
    while(i<s.length ){
        if(s[i] != "*" ){
            st.push(s[i]);
        }else if(s[i]=="*" && !st.isEmpty()){
            st.pop();
        }
        i++;
    }
    let result = "";
    while(!st.isEmpty()){
        let ch=st.top();

        st.pop();
        result=ch+result;
    }
return result;
}


const s= "leet**cod*e";

console.log(removeStars(s));