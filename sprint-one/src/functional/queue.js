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
    // return counter - removed + 1;
    var counter2 = 0;
    for (var key in storage) {
      if (storage.hasOwnProperty(key)) {
        counter2++;
      }
    }
    return counter2;
  };

  return someInstance;
};
