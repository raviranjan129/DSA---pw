
let arr = [2,0,2,1,1,0];

let sortColor = function (arr){

    let i=0;
let j= arr.length-1;
let k= 0;

    while(k <= j){
        if(arr[k] == 0){
           [arr[i],arr[k]]= [arr[k],arr[i]];
           
            i++;
            k++;
        }
        else if(arr[k]== 2){
            [arr[k],arr[j]]= [arr[j],arr[k]]

            j--;
        }
        else{
            k++;
        }
        
    }
    return arr;
}

let ans = sortColor(arr);
console.log(ans);