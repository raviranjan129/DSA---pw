let arr=[2,3,56,8,9,76,6];


/**
 * if the callback of sort function returns a negative value;
 *    - the first argument is put first and then the second argument;
 * else if the callback of the sort function returns a positive value
 * 
 * -the second argument is put first and then the first argument;
 *  */
arr.sort((x,y) => x-y);  // ascending order 
console.log(arr);


arr.sort((x,y) => y-x);  // descending order;
console.log(arr); 