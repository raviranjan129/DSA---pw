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

 const upperBound = function(nums,target){

    let low = 0;
    let high = nums.length-1;

    let ans = nums.length;

    while(low <= high){
        let mid =  Math.floor((low+high)/2);

        if(nums[mid] <= target){
            low = mid+1;
        }else{
            ans= mid;
            high= mid-1;
        }
    }
    return ans;
 }


 function countOccurance (nums,target){
    let firstIndex =lowerbound(nums,target);
    let lastIndex=upperBound(nums,target);
    return lastIndex-firstIndex;
 }
 const nums = [1,2,3,4,5,5,5,5,5,6,7,8];
  console.log(countOccurance(nums,5));