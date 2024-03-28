let dp;
  function maxmoney(nums,n){
    if(n<1){
        return nums[0];
    }
    if(dp[n]!=-1){
        return dp[n];
    }

     dp[0] = nums[0];
     dp[1]= Math.max(nums[0],nums[1]); 

            for(let i =2; i<=n ;i++){
dp[n] =  Math.max(maxmoney(nums,n-2)+nums[n],maxmoney(nums,n-1));
            }

    
 return dp[n]
  }


const rob = function(nums){
    let n= nums.length;
    dp=Array(n+1).fill(-1);
    

    return Math.max(maxmoney(nums,n-2),maxmoney(nums,n-1));
}

// const nums = [2,7,3,1,4,2,1,8];
// const nums = [1,2,3,1];
const nums = [1,2];
console.log(rob(nums));