
let backspaceCompare = function(s,t){
    let st1=[];
    let st2=[];

    for(let i=0;i<s.length;i++){
        if(st1.length>0 && s[i]=="#" ){
            st1.pop();
        }
        else{
            if(s[i] != "#"){
                st1.push(s[i]);
            }
        }
    }
    for(let i=0;i<t.length;i++){
        if(st2.length>0 && t[i] == "#"){
            st2.pop();
        }else{
            if(t[i] !="#"){
                st2.push(t[i]);
            }
        }
    }
    while(st1.length>0 && st2.length>0){    // st1 and st2 will not empty;
        if(st1[st1.length-1] != st2[st2.length-1]){  // this will compare the last element of the stack, if not equal then it returns false otherwise pop the elem from st1 and st2;
            return false;
        }else{
            st1.pop();
            st2.pop();
        }
    }
    return (st1.length ==0)&& (st2.length==0);   // it means if both st1 and st2 will empty then it return true otherwise false;
}


const s="ab#c";
const t="ad#c";

console.log(backspaceCompare(s,t));