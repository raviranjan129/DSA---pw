let dp;
function mincost(cost,n){
    if(n<0){
        return 0;
    }
    if(n==0 || n==1){
        return cost[n];
    }
    if(dp[n] != -1){
        return dp[n];
    }
    dp[n] = cost[n] + Math.min(mincost(cost,n-1),mincost(cost,n-2));
    return dp[n]
}


const climbingStairs =  function(cost){
    let n =cost.length; 
    dp=Array(10005).fill(-1);
   return Math.min(mincost(cost,n-1),mincost(cost,n-2));

}

const cost = [10,15,20];

console.log(climbingStairs(cost));