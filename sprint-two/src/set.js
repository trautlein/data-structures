var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (this._storage.hasOwnProperty(item)) {
    this._storage[item] += 1;
  } else {
    this._storage[item] = 1;
  }
};

setPrototype.contains = function(item) {
  if (this._storage.hasOwnProperty(item)) {
    return true;
  } else {
    return false;
  }
};

setPrototype.remove = function(item) {
  if (this._storage.hasOwnProperty(item)) {
    delete this._storage[item];
  }
};


// Complexity: What is the time complexity of the above functions?
