var Stack = function(push, pop, size) {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not to reference your old code in writing the new style.

  var newStack = {};

  newStack.counter = 0;
  newStack.push = push;
  newStack.pop = pop;
  newStack.size = size;

  _.extend(newStack, stackMethods);

  return newStack;
};

var stackMethods = {};


stackMethods.size = function () {
  return this.counter;
};

stackMethods.push = function (value) {
  this.counter++;
  this[this.counter] = value;
};

stackMethods.pop = function () {
  if (this.counter > 0) {
    var popped = this[this.counter];
    delete this[this.counter];
    this.counter--;
    return popped;
  }
};

