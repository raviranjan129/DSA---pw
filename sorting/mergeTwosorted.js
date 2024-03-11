
  let merge2sortedArray = function(nums1,nums2){

    let m = nums1.length;
let n = nums2.length;
    let i=0,j=0,k=0;
    
         

          let result = new Array(m+n);

          while(i < m && j < n){ // this loop ends when either i == m or j== n;
            if(nums1[i] <= nums2[j]){
                result[k] = nums1[i];
                k++;
                i++;
            }
            else{
                result[k] = nums2[j];
                k++;
                j++;
            }
          }
          // if i== m , nums1 is exhausted;
          //we have elements left in nums2, 

             while(j<n){
                result[k]=nums2[j];
                k++;
                j++;
             }

          // if j== n , nums2 is exhausted;

          while(i<m){
            result[k] = nums1[i];
            k++;
            i++;
          }

          k=0;
          while(k<m+n){
            nums1[k]=result[k];
            k++;
          }
          return nums1;
  }
 
  let nums1=[1,2,3];
  let nums2 = [2,5,6];

  console.log(merge2sortedArray(nums1,nums2));
  