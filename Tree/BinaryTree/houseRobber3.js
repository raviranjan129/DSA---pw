class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
// mp object is used for the memoization;
let mpTrue;   // this will store the node that are robbed;  
let mpFalse; // this will store the node that are not robbed;
function f(root, isPR) {
    if (root == null) {
        return 0;
    }

    if(isPR && mpTrue.get(root)){   //it checks ,if the result for the current node is already stored in mpTrue;
        return mpTrue.get(root);    
    }
    if(!isPR && mpFalse.get(root)){  // if the result exist ,it returns the precomputed result;
        return mpFalse.get(root);
    }

    if (!isPR) {    // isParentRobbed;
        const leave = f(root.left, false) + f(root.right, false);
        const take = root.val + f(root.left, true) + f(root.right, true);
        const ans = Math.max(leave, take);

         mpFalse.set(root,ans);   // this used to store the computed results in the mp for future reference ,(memoization);
        return ans;
    } else {
        const leave = f(root.left, false) + f(root.right, false);

        const ans = leave;
        mpTrue.set(root,ans);

        return ans;
    }
}

var rob = function(root) {
    mpTrue=new Map();
    mpFalse=new Map();
    return f(root,false);
};

const root = new TreeNode(3);
root.left= new TreeNode(2);
root.left.right= new TreeNode(3);
root.right=new TreeNode(3);
root.right.right= new TreeNode(1);

console.log(rob(root));