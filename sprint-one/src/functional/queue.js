var Queue = function() {
  var someInstance = {};
  var counter = 0;
  var removed = 1; // haven't actually removed one yet!

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    counter++;
    storage[counter] = value;
  };

  someInstance.dequeue = function() {
    if (counter > 0) {
      var dequeued = storage[removed];
      delete storage[removed];
      removed++;
      return dequeued;
    }
  };

  someInstance.size = function() {
    if ( (counter - removed + 1) < 0) {
      return 0;
    }
    return counter - removed + 1;
  };

  return someInstance;
};
