
const findMin=function(nums){
    let low = 0;
    let high=nums.length-1;

    while(low<high){
        let mid=low +Math.floor((high-low)/2);

        if(nums[mid]>nums[high]){
            low=mid+1;
        }
        else{
            high=mid;
        }
    }
    return nums[low];
};

const nums=[3,4,5,1,2];

console.log(findMin(nums));