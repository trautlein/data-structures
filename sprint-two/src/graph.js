// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.hasOwnProperty(node)) {
    return true;
  }
  return false;
};
   
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var edgesToRemove = this[node];
  for (var i = 0; i < edgesToRemove.length; i++) {
    var currentNode = this[edgesToRemove[i]];
    for (var j = 0; j < this[edgesToRemove].length; j++) {
      if (currentNode[j] === node) {
        this[edgesToRemove[i]] = currentNode.slice(0, j) + currentNode.slice(j);
        break;    
      }
    }
  }
  delete this[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (var i = 0; i < this[fromNode].length; i++) {
    if (this[fromNode][i] === toNode) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this[fromNode].push(toNode);
  this[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var i = 0; i < this[fromNode].length; i++) {
    if (this[fromNode][i] === toNode) {
      this[fromNode] = this[fromNode].slice(0, i) + this[fromNode].slice(i + 1);
      break;
    }
  }
  for (var i = 0; i < this[toNode].length; i++) {
    if (this[toNode][i] === fromNode) {
      this[toNode] = this[toNode].slice(0, i) + this[toNode].slice(i + 1);
      break;
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

// Complexity: What is the time complexity of the above functions?


