/**
 * lowerbound takes complexity (log n ) and upperbound takes complextiy(log n);
 * hence total complexity will be (log n);
 */
  


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
   let firstandlastindx = function(nums,target){

   
    let lb = lowerbound(nums,target);
    if(lb == nums.length || nums[lb] != target){
        
        return [-1,-1];
    }
    let ub = upperBound(nums,target);
    
    return [lb,ub-1];
   }

const nums= [1,2,2,3,5];

console.log(firstandlastindx(nums,2));