var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  for (var z = 0; z < this._limit; z++) {
    this._storage.set(z, []);
  }

};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tuples = this._storage.get(index);

  this._storage.set(index, tuples.concat([k, v]));
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
