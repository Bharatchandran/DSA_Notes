# Recursion Notes
<details>
    <summary>Sum of N numbers </summary>

1. First lets write a function getSum with parameter `value`
``` javascript
function getSum(value){

}
```
2. now lets think how to call the recursive function 
    - we need to keep on reducing the value by one
``` javascript
function getSum(value){
    getSum(value - 1)
}
```
3. now what will be the base case 
    - when the value is one it should return one

``` javascript
function getSum(value){
    if(value === 1){
        return 1
    }
    getSum(value - 1)
}
```    
4. Lets say the value is 5.
    - now the value is reduced to 1 
    - when its one it returns 1 
    - now the call unwinds and the value = 2 and the returned value of getSum = 1
    - we need to find the sum of value and getSum 
    - therefore return value + getSum(value - 1)
 ``` javascript
function getSum(value){
    if(value === 1){
        return 1
    }
    return value + getSum(value - 1)
}
```      
</details>


<details>
    <summary> Reverse a string </summary>

1. first lets write a function reverseString with string parameter
``` javascript
function reverseString(string){

}
```
2. Now lets think how to call the recursive function
    - we need to the reduce the string to empty string
    - if we reach an empty string return empty string 
``` javascript
function reverseString(string){
    if(string === ""){
        return string
    }
    reverseString(string.substring(0,string.length - 1))
}
```
3. now lets say you got "" when we got the base case, when it unwinds how do you need the result 
    - unwinding first we will get the last first character of the string 
    - unwinding again we will get the first two characters of the string
    - from that we can understand that we need to keep on adding the last character of the strign to the left 
    - therefore we need to return last char of string + returned value of the function

``` javascript
function reverseString(string){
    if(string === ""){
        return string
    }
    return string[string.length-1] + reverseString(string.substring(0,string.length - 1))
}
```
</details>

<details>
    <summary> Power of a number</summary>

1. first lets write a function power with base and exp as parameters
``` javascript
function power(base, exp){

}
```
2. lets think how you want to use the recurssive function 
    - we need to multiply base with exp times
    - therefore we need to make the exp go to 0 
    - once exp is 0 return 1
``` javascript
function power(base, exp){
    if(exp === 0){
        return 1
    }
    power(base, exp-1)
}
```  
3. lets say we need to get 2 power 3 here exp = 3
    - when exp is 0 return 1 
    - when exp is 1 we have returned value is one so how to get 2 power 1 
    - here we need to multiply the base with the returned value and return that

``` javascript
function power(base, exp){
    if(exp === 0){
        return 1
    }
    return base * power(base, exp-1)
}
```  

</details>

<details>
    <summary>remove spaces and tabs</summary>

1. first lets write a function removeTAS with inputString as parameters
``` javascript
function removeTAS(inputString){

}
```

2. lets think how to use the recursive function
    - we need to reduce the inputString till length = 0 
    - when length = 0 return empty string
``` javascript
function removeTAS(inputString){
    removeTAS(inputString.slice(1))
}
```
3. now returned value is empty string and unwinding the input string value is the last char of the original string 
    - we need to check if that character is space or tab
    - if the character is space or tab return the same as before without any change
``` javascript
function removeTAS(inputString){
    if(inputString[0] === " "  || inputString[0] === "\t" ) {
        return removeTAS(inputString.slice(1))
    }
    removeTAS(inputString.slice(1))
}
```
4. Now when the character is not space or tab we need to add it with the returned value 
``` javascript
function removeTAS(inputString){
    if(inputString[0] === " "  || inputString[0] === "\t" ) {
        return removeTAS(inputString.slice(1))
    }
    return inputString[0] + removeTAS(inputString.slice(1))
}
```

</details>

<details>
    <summary>Count vowels</summary>

1. first lets write a function countVowels with string and stringLength as parameters
``` javascript
function countVowels(string, stringLength = string.length){

}
```

2. Let's think how to use the recursive function 
    - we need the reduce the stringLength to 1 and when its 1 we need to check if the first index of string is a vowel or not ther return 1 if its a vowel 0 if its not 
    - to check if its a vowel or not lets have a helper funciton isVowel

``` javascript
function isVowel(character) {
    let lowerChar = character.toLowerCase()
    let vowels = "aeiou"

    if(vowels.indexOf(lowerChar) !== -1) {
        retun true
    } else {
        return false
    }
}
function countVowels(string, stringLength = string.length){
    if(stringLength === 1){
        return Number(isVowel(string[0]))
    }

    countVowels(string, stringLength-1)
}
```
3. now assuming base case got hit and it is a vowel the returned value is 1 and the stringLength is 2
    - now we need to check if the last character that is the second character is a vowel or not 
    - if its a vowel we need to add 1 to the returned value 
    - then we need to return the sum

``` javascript
function isVowel(character) {
    let lowerChar = character.toLowerCase()
    let vowels = "aeiou"

    if(vowels.indexOf(lowerChar) !== -1) {
        retun true
    } else {
        return false
    }
}

function countVowels(string, stringLength = string.length){
    if(stringLength === 1){
        return Number(isVowel(string[0]))
    }

    return countVowels(string, stringLength-1) + isVowel(string[stringLength - 1])
}
```

</details>