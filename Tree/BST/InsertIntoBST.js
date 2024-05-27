
class TreeNode{
    constructor(val){
        this.val= val;
        this.left = null;
        this.right = null;
    }
}

function f(root,val){
    if(root == null){
        return new TreeNode(val);
    }

    if(root.val > val){
        root.left = f(root.left,val);
    }else{
        root.right = f(root.right,val);
    }

    return root;
}

const InsertInBST = function(root,val){
   return f(root,val);
}

const root = new TreeNode(4);
root.left= new TreeNode(2);
root.left.left= new TreeNode(1);
root.left.right= new TreeNode(3);

root.right= new TreeNode(7);


const val = 5;
console.log(InsertInBST(root,val));