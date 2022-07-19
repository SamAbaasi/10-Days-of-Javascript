## Arrays
```javascript
function getSecondLargest(nums) {
    // Complete the function
    nums.sort((a,b)=> a - b)
    const uniqueNums = [...new Set(nums)]
    return uniqueNums[uniqueNums.length - 2]
}
```