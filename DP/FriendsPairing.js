
let dp ;

function f(n){
    if(n ==0 || n == 1 || n == 2){
        return n;
    }
    if(dp[n] != -1){
        return dp[n];
    }else{
        return dp[n] = f(n-1)+(n-1)* f(n-2);  
    }
}
 
let friendsPairing = function (n){
    dp = Array(100005).fill(-1);
        return f(n);
}

let n = 4;
console.log(friendsPairing(n));