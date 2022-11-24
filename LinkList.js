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
      let array=[];
      let currentNode=this.head;
      while (currentNode!== null) {
        //console.log(currentNode.value);
        array.push(currentNode.value);
        currentNode=currentNode.next;
      }
      return array;
    }

    insert(index, val){
      let currentNode=this.head;
      let preNode={};

      for (let i=0; i<index; i++){
          preNode=currentNode;
          //console.log(preNode);
          currentNode=currentNode.next;
      }

      let array2=[];

      // while (preNode!== null) {
      //   console.log(preNode.value);
      //   //array2.push(preNode.value);
      //   preNode=preNode.next;
      // }

      let nextNode=preNode.next;
      const newNode={
        value:val,
        next:nextNode
      }
      preNode.next=newNode;

      // console.log(currentNode);
      // console.log(preNode);
      // console.log(nextNode);
      // console.log(newNode);
      // console.log(currentNode);
      // console.log(this);

      return this;
    }
}

const myLinkedList  = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);

//console.log(myLinkedList.printlist());
myLinkedList.insert(2,99);
console.log(myLinkedList.printlist());
