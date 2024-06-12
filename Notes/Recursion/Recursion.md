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