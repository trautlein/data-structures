var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var currentIndex = this._storage.get(index);
  if (currentIndex !== undefined) {
    for (var i = 0; i < currentIndex.length; i++) {
      if (currentIndex[i][0] === k) {
        currentIndex[i] = [k, v];
      }
    }
    if (i >= currentIndex.length) {
      currentIndex.push([k, v]); 
    }
    this._storage.set(index, currentIndex);
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
  var currentIndex = this._storage.get(index);
  for (var i = 0; i < currentIndex.length; i++) {
    if (currentIndex[i][0] === k) {
      currentIndex = currentIndex.slice(0, i) + currentIndex.slice(i + 1);
      break;
    }
  }
  this._storage.set(index, currentIndex);
};




// Complexity: What is the time complexity of the above functions?
