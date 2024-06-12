// sum of number till N
function getSum(value) {
    if(value === 1) {
        return 1
    }
   return value + getSum(value-1)
}

console.log(sumOfN(5));
// 5 + 4 + 3 + 2 + 1 = 15