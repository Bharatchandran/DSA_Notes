function reverString(string) {
    let reverse = ""
    let length = string.length - 1

    while(length >= 0) {
        reverse = reverse + string[length]
        length = length - 1
    }
    return reverse
}

console.log(reverString("Hello"))

function recurssiveReverseString(string){
    console.log(`current string ${string}`)
    if( string === ""){
        return string
    }
   let reverstPart = recurssiveReverseString(string.substring(0, string.length - 1))
   let result = string[string.length - 1] + reverstPart
   console.log(`Reversing: last char: ${string[string.length - 1]} added in front of ${reverstPart} to form ${result}`);
   return result

   // return string[string.length - 1] + recursiveReverseString(string.substring(0, string.length - 1))

}

console.log(recurssiveReverseString("Hello"));

