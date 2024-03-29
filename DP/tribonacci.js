/**
 * tirbonacci number is the sum of previous three number ;
 *  tn = (n-1)+(n-2)+(n-3);
 */

 let dp;
function tribo(n){

 if(n==0){
    return 0;
 }
 if(n==1){
    return 1;
 }
 if(n==2){
    return 1;
 }

 
if(dp[n] != -1){
    return dp[n];
}
 dp[n] = tribo(n-1)+tribo(n-2)+tribo(n-3);

 return dp[n];

}

const calTribonacci = function(){
            dp=Array(n+1).fill(-1);
         

            return tribo(n);
}
const n= 4;
console.log(calTribonacci(n));