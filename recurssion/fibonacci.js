// iterative

function fibonacci(value) {
    let n0 = 0
    let n1 = 1
    
    for (let i = 0; i < value-1; i++) {
        temp = n0 + n1
        n0 = n1
        n1 = temp
    }
    return n1
}

console.log(fibonacci(5));

function recursiveFibonacci(value) {
    if(value <= 1){
        return value
    }
    return (recursiveFibonacci(value - 1) + recursiveFibonacci(value - 2))
}
console.log(recursiveFibonacci(5));