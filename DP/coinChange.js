
let c;
let dp;

function f(amount){
    if(amount < 0){
        return Number.MAX_SAFE_INTEGER;

    }
    if(amount == 0){
        return 0;
    }
    if(dp[amount] !=-1){
        return dp[amount];
    }
    let ans = Number.MAX_SAFE_INTEGER;
    let n =c.length;
    for(let i =0;i<n;i++){
          if(amount >= c[i]){
            ans = Math.min(ans,f(amount-c[i]));
          }
    }

    if(ans == Number.MAX_SAFE_INTEGER){
        return dp[amount] = Number.MAX_SAFE_INTEGER;
    }
    return dp[amount] = 1+ans;
}

const coinChange = function(coins,amount){
    c=coins;
    dp = Array(10005).fill(-1);
    let computed_ans= f(amount);
   if(computed_ans == Number.MAX_SAFE_INTEGER ){
    return -1;
   }else{
    return computed_ans;
   }
}

const coins = [1,2,5];

console.log(coinChange(coins,11));