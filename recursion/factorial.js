

let factorial = function(n){
    if(n==1){     // base case ;
        return 1;
    }

    let ans = n*factorial(n-1);
    return ans;
}

const mainfunction = function(){
    let result = factorial(5);
    return result;
}

console.log(mainfunction());