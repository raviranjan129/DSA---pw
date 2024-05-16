class TreeNode{
    constructor(val){
        this.val=val;
        this.left=null;
        this.right=null;
    }
}

function f(root){
    if(root== null){
        return;
    }

    f(root.left);
    f(root.right);

    let temp =root.left;
    root.left=root.right;
    root.right=temp;
}


const invertTree = function(root){
    f(root);

    return root;   //return the root (tree form);
}


const root = new TreeNode(4);
root.left=new TreeNode(2);
root.left.left=new TreeNode(1);
root.left.right=new TreeNode(3);
root.right=new TreeNode(7);
root.right.left=new TreeNode(6);
root.right.right=new TreeNode(9);

console.log(invertTree(root));