

const calpower = function(p,q){

  if(q == 0){        // this is the base case , for any value of p if q==0 then it will always be 1;
    return 1;
  }

  let ans = p * calpower(p,q-1);    // here , calpower is calling recursively for calculating the value of p^q-1;

  return ans;
}

let p=3;
let q=3;

console.log(calpower(p,q));