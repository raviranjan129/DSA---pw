
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null
    }
}
let ans;

function f(root) {
    if (root == null) {
        return 0;
    } else {
        let lmd = f(root.left);
        let rmd = f(root.right);

        ans = Math.max(ans, lmd + rmd + 1);

        return 1 + Math.max(lmd, rmd);
    }
}

const DiameterOFBinaryTree = function (root) {
    ans = -1;

    f(root);

    return ans - 1;
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right = new TreeNode(3);

console.log(DiameterOFBinaryTree(root));