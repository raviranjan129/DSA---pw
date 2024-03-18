let mySqrt =function(x){
    let low = 0;
    let high =x;
    let ans = 1;
    while(low<=high){
        let mid = low+Math.floor((high-low)/2);
            let value = mid*mid;
        if( value <= x){
            ans = mid;
            low=mid+1;
        }else{
            high=mid-1;
        }
    }
    return ans;
}

const x=8;

console.log(mySqrt(x));