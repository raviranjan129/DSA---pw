
let sortarr=function(nums){ // this function will sort the nums array in decreasing order ;
    nums.sort((a,b)=>b-a);
    return nums;
}

let reduceCost = function(nums){      
     sortarr(nums);

     let totalSum = 0;
     for(let i =0;i<=nums.length-1;i++){ // this will calculate total sum of the nums array ;
        totalSum = totalSum + nums[i];


     }

     let totalCost = 0;
     for(i=0;i<=nums.length;i++){     // this will calculate total cost to remove the elements of the nums array ;
        totalCost = totalCost + totalSum;

        totalSum = totalSum - nums[i];      // in this every iteration totalsum will reduced;
     }

     return totalCost;
}

const nums = [4,1,6];

const ans = reduceCost(nums);
console.log("total cost to reduce arary will be :" , ans);