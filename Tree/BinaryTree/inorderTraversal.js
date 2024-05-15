class node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

let result;
function inorder(root) {
    if (root == null) {
        return;
    }


    //
    inorder(root.left);


    result.push(root.val);
    //
    inorder(root.right);
}
var inorderTraversal = function (root) {

    result = [];
    inorder(root);

    return result;
};

let root = new node(1);
root.right = new node(2);
root.right.left = new node(3);

console.log(inorderTraversal(root));