 
 let nums = [ -1,0,1,2, -1,-4];
let c= 0;


let threeSum = function(nums){
 let result =[];  // to store the result;

 nums.sort((a,b)=> a-b); // sort the  array ;
    
    for(let c= 0; c<=nums.length-1;c++){
           
        if(c>0 && nums[c]== nums[c-1] ) continue; 

        let i = c+1;
let j= nums.length-1;

        while(i<j){
            if(nums[i]+nums[j] == -nums[c]){
                
                result.push([nums[c],nums[i],nums[j]]);

                while(nums[i]== nums[i+1] ) {
                    i++;
                }
                while(nums[j] == nums[j-1]){
                    j--;
                }

                i++ ;
                j--;
               
            }
            else if(nums[i]+nums[j] > -nums[c]){
                j--;
            }
            else{
                i++;
                
            }
        }
        
    }
    return  result;
   
}

let ans = threeSum(nums);
console.log(ans);

