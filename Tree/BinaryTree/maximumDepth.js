class TreeNode{
    constructor(val){
        this.val=val;
        this.left=null;
        this.right=null;
    }
}

// max depth of a binary tree is the number of nodes along the longest path from the root node down to the farthest leaf node;


function f(root){
    if(root == null){
        return 0;
    }else{
        return 1+ Math.max(f(root.left),f(root.right));
    }
}


const MaxDepth = function(root){
    return f(root);
}

let root = new TreeNode(3);
root.left=new TreeNode(9);
root.right=new TreeNode(20);
root.right.left=new TreeNode(15);
root.right.right=new TreeNode(7);


console.log(MaxDepth(root));