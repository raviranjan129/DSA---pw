/**
 * 
 * time complexity = O(log q);
 */

function f(p,q){
    if(q==0){
        return 1;
    }


    if (q < 0) { // this piece of code is for handling negative exponents;
            
        p = 1 / p;   // this line computes reciprocal of the base p;
        q = -q; // this line makes the -ve q to positive;
    }
    if(q%2 == 0){

        // if q is even;
        let ans = f(p,q/2);
        return ans*ans;
    }else{
        // if q is odd ;

        let ans = f(p,(q-1)/2);

        return p* ans*ans;
    }

};

const calPow =function(){
    return f(2.00000,-2);
}

console.log(calPow());