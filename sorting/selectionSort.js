


function selectionSort(arr){
    let n = arr.length;

    for(let i = 0;i<n-1;i++){      // i denotes the start of unsorted region;
                                 // i<n-1 means we just want to go till second last element;
      let min_idx = findMinElement(arr,i);

      if(min_idx !=i ){
        // min elem and the first elem of unsorted region are diff, then swap
        let temp = arr[i];
        arr[i]=arr[min_idx];
        arr[min_idx]=temp;
      }
    }
}

/**
 * 
 * this function finds out the index of the min element in the array from index [i, n-1];
 */
function findMinElement(arr,i){
    let min_idx_el=i;           // initially the first number is min;
    for(let j=i+1; j<arr.length;j++){
        if(arr[j]<arr[min_idx_el]){  //if the curr elem is smaller than assumed min elem , we update the assumed min elem;
            min_idx_el=j;
        }
    }
    return min_idx_el;
}


const arr = [5,4,3,2,1];
selectionSort(arr);
console.log(arr);