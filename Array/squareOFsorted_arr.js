let arr = [-4,-1,0,3,10];

let resultArr = new Array(arr.length);

let left = 0;
let right = arr.length-1;
let resultIndex = arr.length-1;


let sortedSquares = function(arr){

while(left<=right){
    let leftvalue = Math.pow(arr[left],2);
    let rightvalue = Math.pow(arr[right],2);

    if(leftvalue < rightvalue){
        resultArr[resultIndex] = rightvalue;
        right--;
    }
    else{
        resultArr[resultIndex] = leftvalue;
        left++;
    }
    resultIndex--;
}
return resultArr;
};

let result = sortedSquares(arr);
console.log(result);