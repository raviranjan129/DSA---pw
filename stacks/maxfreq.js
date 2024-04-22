

//constructor function;
var FreqStack = function() {
    this.freqMap={};       // an obj to staore the frequency of each element pushed into the stack;
    this.maxFreq=0;   // keeps track of the max frequency;
    this.elementMap={}; // obj used to group elements based on their freq;
  };
  
  /** 
   * @param {number} val
   * @return {void}
   */
  FreqStack.prototype.push = function(val) {
  if(!this.freqMap[val]){
      // value is not present in the map;
      this.freqMap[val]=1;
  }else{
      // value is present in the map;
  
      this.freqMap[val] +=1;  
  }
  this.maxFreq=Math.max(this.maxFreq,this.freqMap[val]);  // this will update the value of maxFreq ;
  
  // add the entry in the element map;
  
  const frequency=this.freqMap[val];  //store the value of freqMap;
  if(!this.elementMap[frequency]){      //check if there is no entry in elem Map for the given freq;
  this.elementMap[frequency]=[val];   // if not ,create a new entry in elementMap with the freq as key and
  }else{
      this.elementMap[frequency].push(val);    // if there is already an entry in elementMap for the given freq, push the current elem to array correspoinding to that freq;
  }
  };
  
  /**
   * @return {number}
   */
  FreqStack.prototype.pop = function() {
      const arr = this.elementMap[this.maxFreq]; // retrieve the array of elem with the max freq;
      const result = arr[arr.length-1]; // get the last elem ;
      this.elementMap[this.maxFreq].pop();   // remove the last elem  from array;
      this.freqMap[result]--;   // dec the freq count of the popped elem;
  
      if(this.elementMap[this.maxFreq].length ==0){
          delete this.elementMap[this.maxFreq];
  
          this.maxFreq -=1;
      }
      return result;
  };

  const freqStack = new FreqStack();

  freqStack.push(5);
  freqStack.push(7);
  freqStack.push(5);
  freqStack.push(7);
  freqStack.push(4);
  freqStack.push(5);

  console.log(freqStack.pop());
  console.log(freqStack.pop());
  console.log(freqStack.pop());
  console.log(freqStack.pop());
  console.log(freqStack.pop());
  console.log(freqStack.pop());