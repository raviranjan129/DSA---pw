

// leetcode 283;

let index = 0;

let arr = [0,1,0,3,12];

let moveZeros = function(arr){
    for(let i = 0; i<= arr.length-1;i++){
        if(arr[i] != 0){
            let temp = arr[i];
            arr[i] = arr[index];
            arr[index]=temp;
    
            index++;
        }
    }
    return arr;
   
}

let ans = moveZeros(arr);
console.log(ans);