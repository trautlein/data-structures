var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.prev = null; // how to best change this when added?

  return node;
};

var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToHead = function(value) {
    var node = new Node(value);
    if (!list.head) {
      list.head = node;
      list.tail = node;
    } else {
      node.next = list.head;
      list.head.prev = node;
      list.head = node;
    }
  };

  list.addToTail = function(value) {
    var node = new Node(value);
    if (!list.head) {
      list.head = node;
      list.tail = node;
    } else {
      list.tail.next = node;
      node.prev = list.tail;
      list.tail = node;
    }
  };

  list.removeHead = function() {
    if (list.head.next === null) {
      var oldHead = list.head;
      list.head = null;
      list.tail = null;
      return oldHead.value;
    } else {
      var oldHead = list.head;
      list.head = list.head.next;
      list.head.prev = null;
      return oldHead.value;
    }
  };

  list.removeTail = function() {
    var oldTail = list.tail;
    list.tail = list.tail.prev;
    list.tail.next = null;
    return oldTail.value;
  };

  list.contains = function(target) {
    var whereWeAreAt = list.head;

    while (whereWeAreAt) {
      if (whereWeAreAt.value === target) {
        return true; 
      } else {
        whereWeAreAt = whereWeAreAt.next;
      }
    }
    return false;
  };


  return list;
};
