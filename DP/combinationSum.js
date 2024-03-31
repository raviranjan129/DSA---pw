let arr;
let dp;

function f(target){
    if(target == 0){
        return 1;
    }
    if(dp[target]!=-1){
        return dp[target];
    }

    let n= arr.length;
    let result=0;

    for(let k=0;k<n;k++){
        if(target-arr[k]>=0){
            result += f(target-arr[k]);
        }
    }
    return dp[target]= result;
}



const combinationSum4 = function(nums,target){
        arr = nums;
        dp = Array(10005).fill(-1);

        return f(target);
}

 const nums = [1,2,3];
 const target = 4;

 console.log(combinationSum4(nums,target));