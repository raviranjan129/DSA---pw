
let dp;
let s;

function f(square) {
    if (square < 0) {
        return Number.MAX_SAFE_INTEGER;
    }
    if (square === 0) {
        return 0;
    }

    if (dp[square] !== -1) {
        return dp[square];
    }

    let ans = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < s.length; i++) {
        if (square >= s[i]) {
            ans = Math.min(ans, f(square - s[i]));
        } else {
            break;
        }
    }
if(ans == Number.MAX_SAFE_INTEGER){
    return dp[square]=Number.MAX_SAFE_INTEGER;
}else{
    return dp[square] = 1 + ans;  // +1 is for reaching the all possibilities;
}
    
}

const numSquares = function(n) {
    s = [];
    for (let i = 1; i * i <= n; i++) {
        s.push(i * i);
    }
    dp = Array(n + 1).fill(-1);

    return f(n);
};

let n = 12;
console.log(numSquares(n)); 

