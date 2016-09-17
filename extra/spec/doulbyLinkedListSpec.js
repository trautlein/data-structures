describe('Doubly Linked List', function() {
  var dLL;

  describe('doublylinkedList tests', function() {
    var dLL;

    beforeEach(function() {
      dLL = new DoublyLinkedList();
    });

    it('new head should refer to previous head', function() {
      dLL.addToHead(5);
      dLL.addToHead(10);
      dLL.addToHead(20);
      dLL.addToHead(30);
      expect(dLL.head.next.value).to.equal(20);
    });

    it('new tail should refer to previous tail', function() {
      dLL.addToTail(5);
      dLL.addToTail(12);
      dLL.addToTail(200);
      expect(dLL.tail.prev.value).to.equal(12);
    });



  });


  describe('linkedList tests', function() {
    var dLL;

    beforeEach(function() {
      dLL = DoublyLinkedList();
    });

    it('should have a head and tail', function() {
      expect(dLL).to.have.property('head');
      expect(dLL).to.have.property('tail');
    });

    it('should have methods named "addToTail", "removeHead", and "contains"', function() {
      expect(dLL.addToTail).to.be.a('function');
      expect(dLL.removeHead).to.be.a('function');
      expect(dLL.contains).to.be.a('function');
    });

    it('should designate a new tail when new nodes are added', function() {
      dLL.addToTail(4);
      expect(dLL.tail.value).to.equal(4);
      dLL.addToTail(5);
      expect(dLL.tail.value).to.equal(5);
    });

    it('should remove the head from the list when removeHead is called', function() {
      dLL.addToTail(4);
      dLL.addToTail(5);
      expect(dLL.head.value).to.equal(4);
      dLL.removeHead();
      expect(dLL.head.value).to.equal(5);
    });

    it('should return the value of the former head when removeHead is called', function() {
      dLL.addToTail(4);
      expect(dLL.removeHead()).to.equal(4);
    });

    it('should contain a value that was added', function() {
      dLL.addToTail(4);
      dLL.addToTail(5);
      expect(dLL.contains(4)).to.equal(true);
      expect(dLL.contains(5)).to.equal(true);
      expect(dLL.contains(6)).to.equal(false);
    });

    it('should not contain a value that was removed', function() {
      dLL.addToTail(4);
      dLL.addToTail(5);
      dLL.removeHead();
      expect(dLL.contains(4)).to.equal(false);
    });

    // add more tests here to test the functionality of linkedList
  });


});
