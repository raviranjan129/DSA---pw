class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

let result;
function preorder(root) {// if we hit null then we should return ,it may be leaf node or tree empty;
    if (root == null) {
        return null;

    }
    //if the root is not null,that means it has some data;
    //procress the root;
    result.push(root.val);
    //go to the left sub tree recursively;

    preorder(root.left);

    //go to the right sub tree recursively
    preorder(root.right)
}

var preorderTraversal = function (root) {
    result = [];

    preorder(root);

    return result;
};

let root = new TreeNode(1);
root.right= new TreeNode(2);
root.right.left=new TreeNode(3);


console.log(preorderTraversal(root));