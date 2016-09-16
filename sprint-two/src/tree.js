var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  newTree.children = [];
  newTree.numChildren = 0;

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};
 
treeMethods.addChild = function(value) {
  this.children[this.numChildren] = new Tree(value);
  this.numChildren++;
};

treeMethods.contains = function(target) {

  var currentTree = this;

  var recurse = function(currentTree) {
    if (currentTree.value === target) {
      return true;
    } else {
      for (var i = 0; i < currentTree.children.length; i++) {
        return recurse(currentTree.children[i]);
      }
    }
  };

  return recurse(currentTree);

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
