class TreeNode{
    constructor(val){
        this.val=val;
        this.left=null;
        this.right=null;
    }
}

let result;

 function postorder(root){
    if(root == null){
        return null;
    }
 postorder(root.left);

 postorder(root.right);

    result.push(root.val);
 }
var postorderTraversal = function(root) {
    result=[];

    postorder(root);

    return result;
};

let root = new TreeNode(1);
root.right= new TreeNode(2);
root.right.left=new TreeNode(3);

console.log(postorderTraversal(root));