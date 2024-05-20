class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

let ans;

function f(root, num) {
    if (root.left == null && root.right == null) {     //base case which is when leaf node then return the traversal node and sum up with next traversal;
        ans += (10 * num + root.val);
        return;
    }

    let Number = (10 * num + root.val);
    if (root.left) {
        f(root.left, Number);
    }
    if (root.right) {
        f(root.right, Number);
    }
}
const SumRootToleaf = function (root) {
    ans = 0;
    f(root, 0);
    return ans;
}

const root= new TreeNode(4);
root.left=new TreeNode(9);
root.left.left=new TreeNode(5);
root.left.right=new TreeNode(1);
root.right=new TreeNode(0);

console.log(SumRootToleaf(root));