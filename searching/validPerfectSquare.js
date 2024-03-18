const isPerfectSquare = function(num) {
    let low = 1;
    let high = num;
    

    while(low <=high){
        let mid = low + Math.floor((high-low)/2);
        let value = mid * mid;
            if(value == num){
                return true;
            }
            else if(value < num){
                low = mid+1;
            }
            else{
                high = mid-1;
            }
    }
    return false;
    
};

const num = 16;
console.log(isPerfectSquare(num));