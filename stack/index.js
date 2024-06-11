class stack {
    constructor(){
        this.stack = []
    }


    push(data){
        this.stack.push(data)
    }

    pop(){
        this.stack.pop()
    }

    peak(){
        return this.stack[this.stack.length - 1]
    }

    isEmpty(){
        return this.stack.length === 0 
    }
    
    size(){
        return this.stack.length
    }

    clear(){
        this.stack = []
    }

    contains(element){
        return this.stack.includes()
    }

    reverse(){
        this.stack.reverse()
    }

    printStack(){ //dont print value within the function 
        let str = ""
        for (let i = 0; i < this.stack.length; i++) {
            str += this.stack[i] + "\n"
        }
        return str
    }
}

// usage Example

let myStack = new stack()
myStack.push(2)
myStack.push(4)
myStack.push(4)
myStack.push(5)
myStack.pop()
console.log(myStack.printStack());
