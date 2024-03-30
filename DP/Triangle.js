

let matrix;
let dp;

function f(row,col){
    if(row ==matrix.length-1){    // base case-> if the last row then return the value of that [row][col];
        return matrix[row][col];
    }
    if(dp[row][col] != -1){      // dp array will check is the value calculated or not ;
        return dp[row][col];
    }
    return dp[row][col] = matrix[row][col] + Math.min(f(row+1,col),f(row+1,col+1)); // it will calculate the sum of initial indices with the min of ith                                                                              //      ith indice or (i+1) indices;
}


 
var minimumTotal = function(triangle) {
    matrix=triangle;

    dp=Array(205);     // create dp array of length 2005;

    for(let i =0;i<205;i++){        // creating 2-d dp array;
        dp[i] = Array(205).fill(-1);
        
    }
    return f(0,0); // calling f(0,0) means initial row and col ,it ensure that the traversl start from top (begning);
};

const triangle =  [[2],[3,4],[6,5,7],[4,1,8,3]];

console.log(minimumTotal(triangle));