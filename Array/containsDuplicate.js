let arr= [1,2,3,4,5,1,8,9,10];


let ContainDuplicate = function(arr){
    let hashset = new Set();  // set method do not contains duplicates .

    for(let i = 0;i<=arr.length-1;i++){
        if(hashset.has(arr[i])){ //it checks set method contains the current element ,if yes then return true;
            return true;
        }
        hashset.add(arr[i]);   // if  set  do not contains  duplicates then it add the current element
    }
    return false;      // hashset do not contains duplicates then it return false;
}

let ans= ContainDuplicate(arr);

console.log(ans); 