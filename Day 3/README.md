## Arrays
```javascript
function getSecondLargest(nums) {
    // Complete the function
    nums.sort((a,b)=> a - b)
    const uniqueNums = [...new Set(nums)]
    return uniqueNums[uniqueNums.length - 2]
}
```
## Try, Catch, and Finally
```javascript
function reverseString(s) {
    let reversedStr = s
    try {
        reversedStr = s.split("").reverse().join("")
    } catch(err) {
        console.log(err.message)
    } finally {
        console.log(reversedStr)
    }
}
```
## Throw
```javascript
function isPositive(a) {
    if(a > 0){
        return 'YES';
    }
    else{
        throw (a === 0 ? new Error('Zero Error') : new Error('Negative Error'))
    }
}
```