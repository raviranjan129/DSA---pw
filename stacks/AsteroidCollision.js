class stack{
    #arr;
    constructor(){
        this.#arr=[];
    }
    push(Element){
        this.#arr.push(Element)
    }
    pop(){
        this.#arr.pop();
    }
    top(){
       return this.#arr[this.#arr.length-1];
    }
    isEmpty(){
        return this.#arr.length==0;
    }
    size(){
        return this.#arr.length;
    }
}

let asteroidCollision = function(a){
    let st=new stack();

    let i=0; 
    while(i<a.length){
        if(st.isEmpty()){
            st.push(a[i]);
            i++;
        }else{
            if(st.top()>0 && a[i]<0){  // collision case;
                    if(Math.abs(st.top()) == Math.abs(a[i])){ // incoming == top 
                        st.pop();
                        i++;
                    }else{
                        if(Math.abs(st.top())>Math.abs(a[i])){ // stored is greater hence incoming should be destroyed;
                                        i++;
                        }else{
                            while(!isEmpty() && st.top()>0 && a[i]<0 && Math.abs(st.top())<Math.abs(a[i]) ){  // collision case where incoming ast is greater than stored;
                                st.pop();
                            }
                        }
                    }
            }else{
                st.push(a[i]);
                i++;
            }
        }
    }
    let result = new Array(st.size());

    for(let idx=result.length-1 ;idx>=0 ;idx--){
        result[idx]=st.top();
        st.pop()
    }
    return result;
}

// let a= [5,10,-5];

 let a = [-2,-1,-1,2];
console.log(asteroidCollision(a));