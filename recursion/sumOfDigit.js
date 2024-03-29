

function calsum(n){
    if(n>=0 && n<=9){
        return n;
    }

    let ans = Math.floor(calsum(n/10)+(n%10));
    return ans;
}

const sumofdigit = function(n){

    let result = calsum(n);

    return result;
}

const n= 1234;

console.log(sumofdigit(n));