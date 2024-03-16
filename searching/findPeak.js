

const peakelem = function(nums){

    if(nums.length == 1){
        return 0;
    }
    let low = 0;
    let high = nums.length-1;

    while(low <= high){
        let mid = low + Math.floor((high-low)/2);

        if(mid == 0 && nums[mid] > nums[mid+1]){
        
            return mid;
        }
        
        if(mid == nums.length-1 && nums[mid] > nums[mid-1]){
            return mid;
        }
        
        if(nums[mid] > nums[mid+1] && nums[mid] > nums[mid-1]){
            return mid;
        }
        

        if(mid <nums.length-1  && nums[mid] < nums[mid+1]){
                low = mid+1;

            }else {
                if(mid == 0 || nums[mid] > nums[mid-1]) {
                    return mid;
                }
                    
                    high = mid-1;

                
                    
        
            }

    }

}

const nums = [1,2,3,5,6];
console.log(peakelem(nums));