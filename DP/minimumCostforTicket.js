let d;
let s;
let dp;
let c;
function f(day){
    if(day > d[d.length-1]){      // comparing with last day (means last index )
        return 0;
    }
    if(!s.has(day)){          // if that day is not present then traverse to next day;
        return f(day+1);
    }
    if(dp[day] != -1){            // 
        return dp[day];
    }
    let ans = Math.min(c[0]+f(day+1),c[1]+f(day+7),c[2]+f(day+30));   // calculating minimum among all these three;

    return dp[day] =ans;
}

const minumumCostTicket = function(days,costs){
    s=new Set(days);
    c=costs;
    dp=Array(400).fill(-1);            // dp array with length 400 and filling with value -1;
    d=days;
    return f(1);
}

const days = [1,2,3,4,5,6,7,8,9,10,30,31];


// const days = [1,4,6,7,8,20];
const costs = [2,7,15];

console.log(minumumCostTicket(days,costs));
