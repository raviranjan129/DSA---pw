
// 1. check the length of both string , if equal then procede otherwise return false;


function isAnagram(string1,string2){

    if(string1.length !== string2.length){
        return false;
    }
    let counter = {};  // it is an empty object ,used to count occurance of each letter in string1;

    for(let items of string1){   // for...of loop iterates every letter of string1 ;
        counter[items] =(counter[items] || 0 )  + 1;   //to handle the case where counter[letter] is undefined
        // console.log(counter[letter]);
    }

    for(let items of string2){
        if(!counter[items]){  //checks if the current letter in string2 exists in string1 ;
            return false;
        }
        counter[items] -=1;  //If all letters in string2 are accounted for in string1
    }
    return true //If all letters in string2 are accounted for in string1
}
 const checked = isAnagram("hello","llheo");
 console.log(checked);