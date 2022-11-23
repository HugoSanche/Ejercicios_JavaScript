class LinkedList{
  constructor (value){
    this.head={
      value:value,
      next:null
    }
    this.tail=this.head;
    this.length=1;
  }
    append(value){
      const newNode={
        value:value,
        next:null
      }
      //console.log(this.tail.value);
      this.tail.next=newNode;
      this.tail=newNode;
      this.length++;
      return this;
    }

    prepend(value){
      const newNode={
        value:value,
        next:null
      }
      newNode.next=this.head;
      this.head=newNode;

      this.length++;
      return this;
    }
    printlist(){
      const array=[];
      let currentNode=this.head;
      while (currentNode!== null) {
        array.push(currentNode.value);
        currentNode=currentNode.next;
      }
      return array;
}
}
const myLinkedList  = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
console.log(myLinkedList);
console.log(myLinkedList.printlist());
