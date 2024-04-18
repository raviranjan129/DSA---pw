
let dp;
function f(s1,s2,i,j){
    if(i==-1 || j==-1){
        return 0;
    }
    if(dp[i][j] != -1){
        return dp[i][j];
    }

    if(s1[i] == s2[j]){
        return dp[i][j]=1+f(s1,s2,i-1,j-1);
    }else{
        return dp[i][j] =Math.max(f(s1,s2,i,j-1),f(s1,s2,i-1,j));
    }
}


const longestCommonSubsequence = function(text1,text2){
    dp=[];
    for(let i=0;i<text1.length;i++){
        dp[i]=[];
        for(let j=0;j<text2.length;j++){
            dp[i][j]=-1;
        }
    }
    return f(text1,text2,text1.length-1,text2.length-1);
}

const text1="abcde";
// const text1="abcdftuy";
// const text2="abcyd";
const text2="abcyd";

console.log(longestCommonSubsequence(text1,text2));