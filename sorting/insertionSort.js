
let sortArray = function (nums){
    
    let n = nums.length-1;
    for(let i=1; i <= n;i++){
       let element = nums[i];
       let j;
       for( j = i-1;j >= 0 ;j--){
        if(nums[j]>element){
            nums[j+1]=nums[j];   
          
        }else{ 
              // nums[j] <= element;
            break;
        }
       }
       nums[j+1]=element;
    }
    
}

const nums=[5,4,3,2,1];

sortArray(nums);
console.log(nums);