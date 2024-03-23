 let Dp;
function f(n){
      if(n == 0 || n==1){
        return n;
      }
       if(Dp[n] != -1)
        return Dp[n];
       
      else{
        return Dp[n] = f(n-1) + f(n-2);
      }
}

 const fibonacci = function(n){
                    Dp = Array(100005).fill(-1);
                 return   f(n);
 }

 const n = 5;

 console.log(fibonacci(n));