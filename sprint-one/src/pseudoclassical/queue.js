var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.counter = 0;
  this.remove = 1;
};

Queue.prototype.size = function() {
  if ((this.counter - this.remove + 1) > 0) {
    return this.counter - this.remove + 1;
  }
  return 0;
};

Queue.prototype.enqueue = function(value) {

  this.counter++;
  this[this.counter] = value;
};

Queue.prototype.dequeue = function() {
  if (this.counter > 0) {
    var removed = this[this.remove];
    delete this[this.remove];
    this.remove++;
    return removed;
  }
};
