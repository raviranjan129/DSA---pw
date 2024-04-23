var buildArray = function (target, n) {
    const result = [];
    let i = 0;
    let stream = 1;
    while (i < target.length && stream <= n) {
        result.push("Push");
        if (stream == target[i]) {
            i++;
        } else {
            result.push("Pop");
        }
        stream++;
    }
    return result;
};

let target = [1, 3];
let n = 3;

console.log(buildArray(target, n));