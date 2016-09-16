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

  var iterate = function (currentNode) {
    var children = currentNode.children;
    for (var i = 0; i < children.length; i++) {
      if (children[i].children.length > 0) {
        if (children[i].value === target) {
          return true;
        }
        var iterationBool = iterate(children[i]);
        if (iterationBool) {
          return true;
        }
      } else {
        if (children[i].value === target) {
          return true;
        }
      }
    }
    return false;
  };

  var parentNode = this; 

  if (parentNode.value === target) {
    return true; 
  }

  return iterate(parentNode);

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
