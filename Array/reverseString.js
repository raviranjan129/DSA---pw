
// let arr= ["K","R","R","I","S","H"];

let arr = ["M","U","S","K","A","N"];

let i = 0;
let j= arr.length-1;


let reverseString = function(arr){
         while(i<=j){
                 
            let temp = arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        
            i++;
           j--;

            
         }
         return arr;
         
}
 console.log( reverseString(arr));

