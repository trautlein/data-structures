var Queue = function(enqueue, dequeue, size) {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not to reference your old code in writing the new style.

  var newQueue = {};

  newQueue.counter = 0;
  newQueue.removed = 1;
  newQueue.enqueue = enqueue;
  newQueue.dequeue = dequeue;
  newQueue.size = size;

  _.extend(newQueue, queueMethods);

  return newQueue;
};

var queueMethods = {};


queueMethods.size = function () {
  if ((this.counter - this.removed + 1) < 0) {
    return 0;
  }
  return this.counter - this.removed + 1;
};

queueMethods.enqueue = function (value) {
  this.counter++;
  this[this.counter] = value;
};

queueMethods.dequeue = function () {
  if (this.counter > 0) {
    var popped = this[this.removed];
    delete this[this.removed];
    this.removed++;
    return popped;
  }
};
