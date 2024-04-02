
let arr;
let dp;
 function f(i){
    if(i==0){
        return 1;
    }

    if (dp[i] != -1){
        return dp[i];
    }
let result =1;
    for(let j = 0; j<= i-1;j++){
        if(arr[j] < arr[i]){
            result = Math.max(result,1+f(j));
        }
    }
    return dp[i]= result;
 }
const lengthOfLIS = function(nums) {
    let ans = Number.MIN_VALUE;
  arr = nums;
  dp=Array(2505).fill(-1);
    for(let i=0;i<nums.length;i++){
        ans = Math.max(ans,f(i));
    }
    return ans;
};

let nums = [10,9,2,5,3,7,101,18];

console.log(lengthOfLIS(nums));