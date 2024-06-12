// arr = [3, 4, 1, 8, 1, 7]
// fincMe = 1
// currIndex = 0
// -> output = 2
// if not found = -1

// iterative
function firstOcc(arr, findMe, currIndex) {
    while(currIndex < arr.length) {
        if(arr[currIndex] === findMe) {
            return currIndex
        }
        currIndex += 1
    }
    return -1
}

// recuresive

function recurseiveFirstOcc(arr, findMe, currIndex) {
    if(arr.length === currIndex) {
        return -1
    }

    if(arr[currIndex] === findMe) {
        return currIndex
    }
    return recurseiveFirstOcc(arr, findMe, currIndex + 1 )
}
let arr1 = arr = [3, 4, 1, 8, 1, 7]
console.log(recurseiveFirstOcc(arr1, 8, 0)); 