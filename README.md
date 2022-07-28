# 10 Days of Javascript
## Day 1
### Arithmetic Operators
```javascript
function getArea(length, width) {
    let area;
    // Write your code here
    area = length * width
    return area;
}

function getPerimeter(length, width) {
    let perimeter;
    // Write your code here
    perimeter = 2 * (length + width)
    return perimeter;
}
```
### Factorial Functions
```javascript
function factorial(n) {
    let result = n;
    if(n === 0 || n === 1) {
        result = 1;
    }
    while(n > 1) {
        n--
        result *= n
    }
    return result
}
```
### Let and Const
```javascript
function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    let r = readLine()
    const PI = Math.PI
    // Print the area of the circle:
    let area = PI * Math.pow(r, 2)
    console.log(area)
    // Print the perimeter of the circle:
    let perimetet = 2 * PI * r
    console.log(perimetet)
        
    try {    
        // Attempt to redefine the value of constant variable PI
        PI = 0;
        // Attempt to print the value of PI
        console.log(PI);
    } catch(error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
}
```
## Day 2
### Conditional Statements: If-Else
```javascript
function getGrade(score) {
    let grade;
    // Write your code here
    if(score >= 0 && score <= 5) {
        grade = 'F'
    } else if(score > 5 && score <= 10) {
        grade = 'E'
    } else if(score > 10 && score <= 15) {
        grade = 'D'
    } else if(score > 15 && score <= 20) {
        grade = 'C'
    } else if(score > 20 && score <= 25) {
        grade = 'B'
    } else if(score > 25 && score <= 30) {
        grade = 'A'
    }
    return grade;
}
```
### Conditional Statements: Switch
```javascript
function getLetter(s) {
    let letter;
    switch (true) {
        case 'aeiou'.includes(s[0]):
            letter = 'A';
            break;
        case 'bcdfg'.includes(s[0]):
            letter = 'B';
            break;
        case 'hjklm'.includes(s[0]):
            letter = 'C';
            break;
        case 'npqrstvwxyz'.includes(s[0]):
            letter = 'D';
            break;
    }
    return letter;
}
```
### Loops
```javascript
function vowelsAndConsonants(s) {
    let vowels = ["a", "e", "i", "o", "u"];

    for(let v of s) {
        if(vowels.includes(v)) {
            console.log(v);
        }
    }
    
    for(let v of s) {
        if(!vowels.includes(v)) {
            console.log(v);
        }
    }
}
```
## Day 3
### Arrays
```javascript
function getSecondLargest(nums) {
    // Complete the function
    nums.sort((a,b)=> a - b)
    const uniqueNums = [...new Set(nums)]
    return uniqueNums[uniqueNums.length - 2]
}
```
### Try, Catch, and Finally
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
### Throw
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
## Day 4
### Create a Rectangle Object
```javascript
function Rectangle(a, b) {
    const object = {
        length : a,
        width : b,
        perimeter : 2 * (a + b),
        area : a * b
    }
    return object
}
```
### Count Objects
```javascript
function getCount(objects) {
    let count = 0
    for(const obj of objects){
        if(obj.x == obj.y) {
            count++
        }
    }
    return count
}
```
### Classes
```javascript
class Polygon {
    constructor(arr) {
    this.arr = arr;
  }
  perimeter() {
      return this.arr.reduce((prev, curr)=>  prev + curr, 0)
  }
}
```
## Day 5
### Inheritance
```javascript
/*
 *  Write code that adds an 'area' method to the Rectangle class' prototype
 */
Rectangle.prototype.area = function (){
    return this.w * this.h
}
/*
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */
class Square extends Rectangle {
    constructor(props) {
        super(props);
        this.w = props
        this.h = props
    }
}
```
### Template Literals
```javascript
function sides(literals, ...expressions) {
    const [A, P] = expressions
    const root = Math.sqrt((P*P)-(16*A))
    const s1 = (P + root)/4;
    const s2 = (P - root)/4;   
    return [s2, s1]
}
```
### Arrow Functions
```javascript
function modifyArray(nums) {
    return nums.map(num => num%2 === 0 ? num * 2 : num * 3)
}
```
## Day 6
### Bitwise Operators
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
### JavaScript Dates
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
## Day 7
### Regular Expressions I
```javascript
function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    const re = /^([aeiou]).*\1$/i;
    /*
     * Do not remove the return statement
     */
    return re;
}
```
### Regular Expressions II
```javascript
function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.', 
     * followed by one or more letters.
     */
    const re = new RegExp(/^(Mr\.|Mrs\.|Ms\.|Dr\.|Er\.)\s?[a-z|A-Z]+$/)
    /*
     * Do not remove the return statement
     */
    return re;
}
```
### Regular Expressions III
```javascript
function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match ALL occurrences of numbers in a string.
     */
    const re = new RegExp('\\d+', 'g');
    /*
     * Do not remove the return statement
     */
    return re;
}
```
## You can find solotions of Day 8 & Day 9 in the top folders
