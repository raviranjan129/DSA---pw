 
let arr = [2,10,20,11,15,7];
let n = arr.length;
let target = 9;
  let twosum = function(arr, target){
    
    for(let i=0; i<=n-1 ; i++){
        for(let j=i+1; j<n; j++){
            if(arr[i]+arr[j]==target){
                   return [i,j];
            }
        }
    }
  };

  let result = twosum(arr, target);
  console.log(result);