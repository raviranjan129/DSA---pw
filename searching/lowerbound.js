


const lowerbound =  function (nums,target){
    
    let low = 0;
    let high = nums.length-1;
    let ans =nums.length;
    while(low <= high){
                 let mid = Math.floor((low+high) / 2);

                  if(nums[mid] < target){
                   low = mid + 1;
                  }
                 else{
                  ans = mid;
                  
                  high = mid-1;
                 }
    }
    return ans;
 
    
 }

 const nums=[1,2,2,4,6];

 console.log(lowerbound(nums,2))