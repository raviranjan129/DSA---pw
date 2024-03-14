 /**
  * 
  * @param {The given input array inside which we need to find an element} nums 
  * @param {target is the element expected to be found } target 
  * @returns 
  * 
  * time comp : O(log n)
  */
 
  function binarysearch(nums,target){
    
    let low = 0;
    let high = nums.length-1;
    
    while(low <= high){
                 let mid = Math.floor((low+high) / 2);

                  if(nums[mid] == target){
                    return mid;
                  }
                  else if(nums[mid] < target){
                    low = mid+1;
                  }
                  else{
                    high = mid-1;
                  }
    }
    return -1;
 
    
 }


 
 const nums = [1,2,3,4,5,6,7,8,9,23,45,67];

  console.log(binarysearch(nums,8));
 