class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }
}

function add(root, value) {
    //Time Complexity: O(h) h - height of the tree
    //Space Complexity: O(n) n - Maximum depth of the tree 

    if (root == null) {
        root = new TreeNode(value);
        return root;
    } else if (value < root.value) {
        root.left = add(root.left, value);
    } else {
        root.right = add(root.right, value);
    }
    return root;
}

//Testing
const tree = new Tree();

tree.root = add(tree.root, 100);
tree.root = add(tree.root, 80);
tree.root = add(tree.root, 120);
console.log(tree.root);