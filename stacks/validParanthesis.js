
class Stack{
    #arr;
    constructor(){
        this.#arr=[];
    }
    push(element){
        this.#arr.push(element);
    }
    pop(){
      this.#arr.pop();  
    }
    isEmpty(){
     return this.#arr.length==0;   
    }
    top(){
      return this.#arr[this.#arr.length-1];
    }
}

let validParanthesis = function(s){
    let st=new Stack();

    for(let i=0;i<s.length;i++){
        if(s[i]=='(' || s[i]=='{' || s[i]=='['){
            st.push(s[i]);
        }else if(st.isEmpty()){
            return false;
        }else{
            let c=st.top();
            st.pop();
            if((s[i]==')' && c !='(') || (s[i]=='}' && c !='{') || (s[i]==']' && c !='[')){
                return false;
            }
        }
    }
    return st.isEmpty();
}

const s1= "()";
const s2="()[]{}";
const s3= "(]";

console.log(validParanthesis(s1));
console.log(validParanthesis(s2));
console.log(validParanthesis(s3));