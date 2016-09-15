var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);

  return newStack;  
};

var stackMethods = {
  counter: 0
};

stackMethods.size = function() {
  return this.counter;
};

stackMethods.push = function(value) {
  this.counter++;
  this[this.counter] = value;
};

stackMethods.pop = function() {
  if (this.counter > 0) {
    var popped = this[this.counter];
    delete this[this.counter];
    this.counter--;
    return popped;
  }
};