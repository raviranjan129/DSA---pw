

let bubbleSort = function (nums){
 let n = nums.length;
    for(let i = 0 ; i<n; i++){ // i variable is for iteration;
         isSwaped = false;

           for(let j = 0 ; j< n-i-1; j++){  //j<n-i-1 , bcz in every iteration we push the biggest elem at the last so no need to copmare that;
            if(nums[j]>nums[j+1]){
                // adjacent element swapping ;
                let temp = nums[j];
                nums[j]=nums[j+1];
                nums[j+1]=temp;
                isSwaped=true;
            }
           }
           if(isSwaped == false){
            return;
           }
    }
   
}

let nums=[8,5,6,1,2,8];

bubbleSort(nums);
console.log(nums);