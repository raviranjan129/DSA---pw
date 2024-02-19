let arr = [2,5,7,8,3,11,45];
let target = 9;

arr.sort(function(a,b) {return a-b}); //  arr.sort is used to sort the given array bcz two pointer works on sorted array ;
let left = 0;
let right= arr.length-1;

let twosum2= function(arr ,target){
    
    while(left<right){
        if(arr[left]+arr[right] == target){
            return [left+1,right+1] ;  // 0 index to 1index;
        }
        else if( arr[left] + arr[right] > target){
            right--;
        }
        else {
            left++;
        }
    }
  
}
  let result = twosum2(arr , target);
console.log(result);
 