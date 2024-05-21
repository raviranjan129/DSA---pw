
class TreeNode{
    constructor(val){
        this.val=val;
        this.left=null;
        this.right=null;
    }
}
let mp= {};
let result =[];
 function f(root){
    if(root == null){
        return "#";
    }
    const left = f(root.left);
    const right=f(root.right);

    const s=""+root.val + ","+left+","+right;

    if(!mp[s]){
        mp[s]=1;

    }else{
        if(mp[s] ==1){
            //this is the first time we detected a duplicate;
            result.push(root);

        }
        mp[s] +=1;
    }
    return s;
 }
var findDuplicateSubtrees = function(root) {
    mp={};
result=[];

    f(root);
    return result;
};


const root = new TreeNode(1);
root.left=new TreeNode(2);
root.left.left=new TreeNode(4);
root.right=new TreeNode(3);
root.right.left=new TreeNode(2);
root.right.left.left=new TreeNode(4);
root.right.right=new TreeNode(4);

console.log(findDuplicateSubtrees(root));
