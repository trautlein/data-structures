var BinarySearchTree = function(root) {
  var newBST = Object.create(bstMethods);
  newBST.value = root;
  newBST.left = null;
  newBST.right = null;
  return newBST;  
};

var bstMethods = {};

bstMethods.insert = function(value) {
  if (this.value > value) {
    if (this.left === null) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else {
    if (this.right === null) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
};

bstMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  } else {
    if (this.value > target && this.left !== null) {
      return this.left.contains(target);
    } else if (this.value < target && this.right !== null) {
      return this.right.contains(target);
    }
  }
  return false;
};

bstMethods.depthFirstLog = function(func) {
  func(this.value);
  if (this.left !== null) {
    this.left.depthFirstLog(func);
  }
  if (this.right !== null) {
    this.right.depthFirstLog(func);
  }
};







 // Complexity: What is the time complexity of the above functions?
 
