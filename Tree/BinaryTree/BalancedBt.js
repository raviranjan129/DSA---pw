// Hlst -Hrst <=1;

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

let ans;

function f(root) {
    if (root == null) {
        return 0;
    }

    let lst = f(root.left);
    let rst = f(root.right);

    ans = ans && (Math.abs(lst - rst) <= 1);

    return 1 + Math.max(lst, rst);

}

const BalancedHeight = function(root){
    ans= true;

    f(root);
    return ans;
}

const root = new TreeNode(3);
root.left=new TreeNode(9);
root.right=new TreeNode(20);
root.right.left=new TreeNode(15);
root.right.right=new TreeNode(7);

console.log(BalancedHeight(root));