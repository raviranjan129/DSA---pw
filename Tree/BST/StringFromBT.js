

class TreeNode {
    constructor(val){
        this.val= val;
        this.left = null;
        this.right= null;

    }
}

function f(root){
    if(root == null){
        return "";
    }
let left = f(root.left);
let right = f(root.right);

    if(left == "" && right == ""){
        return "" + root.val;
    }else if(left == ""){
        return root.val + "()" + "(" + right + ")";
    }else if(right == ""){
        return root.val + "(" + left + ")";
    }else{
        return root.val + "(" + left + ")" + "(" + right + ")";
    }
}


var tree2str = function(root) {
    return f(root);
};

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.left.left= new TreeNode(4);
root.right= new TreeNode(3);

console.log(tree2str(root));