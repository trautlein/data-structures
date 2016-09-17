var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) !== undefined) {
    this._storage.get(index).push([k, v]); 
  } else {
    var innerArr = [[k, v]]; 
    this._storage.set(index, innerArr);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  var tuples = this._storage.get(index);
  for (var i = 0; i < tuples.length; i++) {
    if (tuples[i][0] === k) {
      return tuples[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};




// Complexity: What is the time complexity of the above functions?
