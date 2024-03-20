
const searchRotate2= function(nums,target){
    let low=0;
    let high=nums.length-1;

    while(low<=high){
        let mid= low+Math.floor((high-low)/2);

        if(nums[mid]==target){
            return true;
        }

        if(nums[low]==nums[mid] && nums[mid] == nums[high]){
            low=low+1;
            high=high-1;
            continue;
        }
        if(nums[low] <= nums[mid]){
            if(target>=nums[low] && target<nums[mid]){
                high=mid-1;
            }else{
                low=mid+1;
            }
        }else{
            if(target>nums[mid] && target<=nums[mid]){
                low=mid+1;
            }else{
                high=mid-1;
            }
        }
    }
    return false;
}

//  const nums = [2,5,6,0,0,1,2];
const nums = [1,1,1,1,1,1,1,1,1,13,1,1,1,1,1,1,1,1,1,1,1,1];

console.log(searchRotate2(nums,13)); 