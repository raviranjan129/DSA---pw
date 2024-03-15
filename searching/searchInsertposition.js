
// return the index if the target is found ,if not return index where it would be if it were inserted in order ;

const searchInsert = function(nums,target){
    let low=0;
    let high=nums.length-1;

    let ans = nums.length;

    while(low <= high){
        let mid = low + Math.floor((low + high)/2);
        if(nums[mid] < target){
            low = mid + 1;
        }else {
            ans = mid;
            high = mid-1;
        }
    }
    return ans;
}

const nums= [1,3,5,6];

console.log(searchInsert(nums,2));