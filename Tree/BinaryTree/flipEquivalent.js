

class TreeNode{
    constructor(val){
        this.val=val;
        this.left=null;
        this.right=null;
    }
}
function f(root1,root2){
    if(root1 == null && root2==null){
        return true;
    }
    if(root1 == null || root2 == null){
        return false;
    }
    if(root1.val != root2.val){
        return false;
    }

    return (flipEquiv(root1.left,root2.left) && flipEquiv(root1.right,root2.right)) || (flipEquiv(root1.left,root2.right) && flipEquiv(root1.right,root2.left));
 }
var flipEquiv = function(root1, root2) {
  return f(root1,root2);
};

const root1=new TreeNode(1);

root1.left=new TreeNode(2);
root1.left.left=new TreeNode(4);
root1.left.right=new TreeNode(5);
root1.left.right.left=new TreeNode(7);
root1.left.right.right=new TreeNode(8);
root1.right=new TreeNode(3);
root1.right.left=new TreeNode(6);

const root2= new TreeNode(1);
root2.left=new TreeNode(3);
root2.left.right=new TreeNode(6);
root2.right=new TreeNode(2);
root2.right.left=new TreeNode(4);

root2.right.right=new TreeNode(5);
root2.right.right.left=new TreeNode(8);
root2.right.right.right=new TreeNode(7);

console.log(flipEquiv(root1,root2));