## Bitwise Operators
```javascript
function getMaxLessThanK(n,k) {
    var max=0;
    for(let i=1;i<=n;i++) {
        for(let j=i+1;j<=n;j++) {
            var x = i&j;
            if(x > max & x < k){
                max = x;
            }
        }
    }
    return(max);
}
```
##
```javascript
// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
    let dayName;
    // Write your code here
    const date = new Date(dateString);
    const options = {
      weekday: 'long'
    };
    
    dayName = new Intl.DateTimeFormat('en-Us', options).format(date);
    return dayName;
}
```