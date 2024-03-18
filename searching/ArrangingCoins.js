
const arrangeCoins = function (n) {
    let low = 1;
    let high = n;
    let ans = 1;

    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        let value = Math.floor(((mid) * (mid + 1)) / 2);
        if (value <= n) {
            ans = mid;
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }

    }
    return ans;
}


console.log(arrangeCoins(5));