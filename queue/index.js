class Queue{
    constructor(){
        this.queue = []
    }

    enqueue(data){
        this.queue.push(data)
    }

    dequeue(){
        if(this.isEmpty()){
            return "Queue is empty"
        }
        return this.queue.shift()
    }

    isEmpty(){
        return this.queue.length === 0
    }

    peek(){
        if(this.isEmpty()){
            return "Queue is empty"
        }
        return this.queue[0]
    }

    size(){
        this.queue.length
    }

    clear(){
        this.queue = []
    }

    printQueue(){
        let str = ""
        for (let i = 0; i < this.queue.length; i++) {
            str += this.queue[i] + "\n"
        }
        return str
    }



}

let myQueue = new Queue()

myQueue.enqueue(10)
myQueue.enqueue(10)
myQueue.enqueue(10)
myQueue.enqueue(10)
myQueue.dequeue()
console.log(myQueue);
console.log(myQueue.printQueue());