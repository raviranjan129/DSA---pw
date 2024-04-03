
let arr;
let dp;
function f(i){
    if(i==0 || i==1){   // base case;
        return 0;
    }

if(dp[i] != -1){
    return dp[i];
}

        if(arr[i]-arr[i-1] != arr[i-1]-arr[i-2]){
            return 0;
        } else{
            return 1+f(i-1); // 1 is brand new subarray and f(i-1) is no. of subarrays at (i-1)th index;
        }
            
}


const arithmeticSlice = function(nums){
    arr = nums;
    let ans =0;
    dp=Array(5005).fill(-1);
    for(let i=0; i < nums.length; i++){
        ans += f(i);
    }
    return ans;
}
const nums = [1,2,3,4];

console.log(arithmeticSlice(nums));