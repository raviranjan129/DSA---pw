//https://leetcode.com/problems/koko-eating-bananas/description/

 
function CanEatAllBananaInMidSpeed (piles,h,mid){
    let totalHoursBykoko = 0;

    for(let i= 0;i<piles.length;i++){
        totalHoursBykoko =totalHoursBykoko+ Math.ceil(piles[i]/mid); // total time to finish iTh pile;
    }
    return totalHoursBykoko <=h;
}

const minEatingspeed = function(piles,h){
    let low= 1;
    let high= Math.max(...piles);
      let ans = 1;

      while(low<=high){
        let mid = low + Math.floor((high-low)/2);

        if(CanEatAllBananaInMidSpeed(piles,h,mid)){
            ans = mid;
            high = mid-1;

        }
        else{
            low=mid+1;

        }
      }
return ans;
}

// const  piles = [3,6,7,11];

const piles = [30,11,23,4,20];

console.log(minEatingspeed(piles,5));