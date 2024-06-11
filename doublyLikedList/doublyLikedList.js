class Node {
    constructor(data, next = null, prev = null){
        this.data = data
        this.next = next
        this.prev = prev
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }
}

DoublyLinkedList.prototype.insertAtBeginning = function(data) {
    const newNode = new Node(data, this.head, null)

    if(this.head !== null){
        this.head.prev = newNode
    } 
    this.head = newNode
    if(this.tail === null){
        this.tail = newNode
    }    

}

DoublyLinkedList.prototype.insertAtEnd = function(data) {
    const newNode = newNode(data, null, this.tail)

    if(tail !== null){
        this.tail.next = newNode
    }
    this.tail = newNode
    if(this.head === null){
        this.head = newNode
    }
}

DoublyLinkedList.prototype.insertAfter = function(prevNode, data) {
    if(prevNode == null){
        console.log("Invalid prev node");
    }
    const newNode = new Node(data, prevNode.next, prevNode)
    if(prevNode.next !== null) {
        prevNode.next.prev = newNode
    }
    prevNode.next = newNode
    // taill
    if(prevNode.next === null){
        this.tail = newNode
    }
}

DoublyLinkedList.prototype.deleteFirstNode = function() {
    if(!this.head) {
        return //nothing to delete
    }

    if(this.head === this.tail){
        // this.head = this.tail = null
        this.head = null
        this.tail = null
    } else {
        this.head = this.head.next
        this.head.prev = null
    }
}

DoublyLinkedList.prototype.deleteLastNode = function() {
    if(!this.tail){
        console.log("Doubly linked list is empty");
        return
    }
    if(this.head === this.tail){
        this.head = null
        this.tail = null
    } else {
        this.tail = this.tail.prev
        this.tail.next = null
    }
}

DoublyLinkedList.prototype.reverse = function(){
    let current = this.head;
    let temp = null
    while(current){
        // swapping
        temp = current.prev
        current.prev = current.next
        current.next = temp
        // move to next node
        current = current.prev
    }
    if(temp !== null) {
        this.tail = this.head
        this.head = temp.prev
    }
}