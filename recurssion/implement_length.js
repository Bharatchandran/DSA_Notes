// recursive
function recurLength(string) {
    if(string === "") {
        return 0
    } else {
        return 1 + recurLength(string.substring(1))
    }
}

// iteration
function customLength(string){
    let count = 0
    while(string !== ""){
        count+=1
        string = string.substring(1)
    }
    return count
}

console.log(customLength("Hello"));