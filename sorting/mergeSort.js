let merge2sortedArray = function(left,right){

    let m = left.length;
let n = right.length;
    let i=0,j=0,k=0;
    
         

          let result = new Array(m+n);

          while(i < m && j < n){ // this loop ends when either i == m or j== n;
            if(left[i] <= right[j]){
                result[k] = left[i];
                k++;
                i++;
            }
            else{ 
                result[k] = right[j];
                k++;
                j++;
            }
          }
          // if i== m , nums1 is exhausted;
          //we have elements left in nums2, 

             while(j<n){
                result[k]=right[j];
                k++;
                j++;
             }

          // if j== n , nums2 is exhausted;

          while(i<m){
            result[k] = left[i];
            k++;
            i++;
          }

         
          return result;
  }

  let mergesortHelper = function(nums,start,end){
    if(start == end){
        let result = new Array(1);
        result[0] = nums[start]
        return result;
    }

let mid = Math.floor((start + end )/ 2);
let left = mergesortHelper(nums,start,mid);
let right = mergesortHelper(nums,mid+1 , end);

return merge2sortedArray(left,right);

  }

            function mergeSort(nums){
                return mergesortHelper(nums,0,nums.length-1);
            }


  let nums = [5,6,3,21,76,-1,-2,-7,3];

  let ans = mergeSort(nums);
  console.log(ans);