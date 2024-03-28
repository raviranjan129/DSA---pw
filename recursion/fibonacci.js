

function fibo(n){

    if(n==0 || n==1 ){
        return n;
    }
    

    let ans = fibo(n-1)+fibo(n-2);
    return ans;
}

const fibonacciNumber =function(){

    let result = fibo(6);
    return result
}

console.log(fibonacciNumber());