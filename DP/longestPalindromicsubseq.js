let dp;

function f(s,i,j){
    if(i==j){            //this points about 1 character;
        return 1;
    }
    if(i>j){      // if i and j cross each other then return 0;
        return 0;
    }
    if(dp[i][j] != -1){
        return dp[i][j];
    }

    if(s[i]==s[j]){
        return dp[i][j] = 2+f(s,i+1,j-1);   // 
    }else{
        return dp[i][j] = Math.max(f(s,i+1,j),f(s,i,j-1));
    }
}

const CalLongestPalindromeSubsequence=function(s){
    dp=[];
    for(let i=0;i<s.length;i++){            // initilizing 2-d dp with value -1;
        dp[i]=[];
        for(let j=0;j<s.length;j++){
            dp[i][j]=-1;  
        }
    }
    return f(s,0,s.length-1);        // i starts from 0 and j starts from last index ;
}

const s= "aabbb";

// const s="xxayyzzaa"

console.log(CalLongestPalindromeSubsequence(s));