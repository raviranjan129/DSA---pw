

const searchRotate = function (nums,target){
    let low = 0;
    let high = nums.length-1;

    while(low <= high){
        let mid = low + Math.floor((high-low)/2);

        if(nums[mid] == target){                                     // left part sorted
            return mid;
        }
        if(nums[low] <= nums[mid]){
            if(target >= nums[low] && target < nums[mid]){
                high = mid-1;
            }
            else{
                low = mid+1;
            }
        }
        else{                                                        // right part sorted;
            if(target > nums[mid] && target <=nums[high]){
                low = mid+1;
            }
            else{
                high= mid-1;
            }
        }
    }
    return -1;
}


const nums = [3,1];

console.log(searchRotate(nums,1));