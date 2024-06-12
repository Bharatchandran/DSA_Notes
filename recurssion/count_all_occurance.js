// [1, 2, 4, 2, 4, 2, 6]
// key = 2

function countKeyIA(array, key) {
    let count = 0
    for (let i = 0; i < array.length; i++) {
        if(array[i] === key){
            count++
        }
        
    }
    return count
}

function recurCountKey(array, key, index = 0) {
    if(index >= array.length){
        return 0
    }
    // if(array[index] === key){
    //     return recurCountKey(array, key, index+1) + 1
    // } else {
    //     return recurCountKey(array,key, index+1)
    // }
    return (array[index] === key ? 1 : 0) + recurCountKey(array,key, index+1)

}

console.log(recurCountKey([1, 2, 4, 2, 4, 2, 6], 2));