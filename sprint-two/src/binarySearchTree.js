var BinarySearchTree = function(root) {
  var newBST = Object.create(bstMethods);
  newBST.value = root;
  newBST.left = undefined;
  newBST.right = undefined;
  return newBST;  
};

var bstMethods = {};

bstMethods.insert = function(value) {
  // if (this.right === undefined && this.left === undefined) {
  //   if (this.value > value) {
  //     this.left = BinarySearchTree(value);
  //   } else {
  //     this.right = BinarySearchTree(value);
  //   }
  // } else {
  //   if (this.value > value) {
  //     this.left.insert(value);
  //   } else {
  //     this.right.insert(value);
  //   }
  // }

  if (this.value > value) {
    if (this.left === undefined) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else {
    if (this.right === undefined) {
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
    if (this.value > target && this.left !== undefined) {
      return this.left.contains(target);
    } else if (this.value < target && this.right !== undefined) {
      return this.right.contains(target);
    }
  }
  return false;
};

bstMethods.depthFirstLog = function(func) {
  func(this.value);
  if (this.left !== undefined) {
    this.left.depthFirstLog(func);
  }
  if (this.right !== undefined) {
    this.right.depthFirstLog(func);
  }
};







 // Complexity: What is the time complexity of the above functions?
 