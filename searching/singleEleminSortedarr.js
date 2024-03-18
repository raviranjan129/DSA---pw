const singleNonDuplicate = function(nums){
         let low = 0;
         let high =nums.length-1;

     while(low<=high){
        let mid = low + Math.floor((high-low)/2);

        if(nums[mid] != nums[mid-1] && nums[mid] != nums[mid+1]){
            return nums[mid];
        }

        if(mid % 2 == 0){
            if(nums[mid] == nums[mid-1]){
                high = mid-1;
            }else{
                if(nums[mid] == nums[mid+1]){
                    low =mid+1;
                }
         }
        }
        else{
            if(mid % 2 != 0){
                if(nums[mid] == nums[mid-1]){
                    low = mid+1;
                }else{
                    high= mid-1;
                }
            }
        }
        }
}

const nums=[1,1,2,2,3,3,4,8,8];
console.log(singleNonDuplicate(nums));