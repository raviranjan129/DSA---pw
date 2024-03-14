

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

    let result = new Array(2);
    let lb = lowerbound(nums,target);
    if(lb == nums.length || nums[lb] != target){
        result[0] = -1;
        result[1]= -1;
        return result;
    }
    let ub = upperBound(nums,target);
    result[0]=lb;
    result[1]=ub-1;
    return result;
   }

const nums= [1,2,2,3,5];

console.log(firstandlastindx(nums,2));