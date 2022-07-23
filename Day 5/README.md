## Inheritance
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
## Template Literals
```javascript
function sides(literals, ...expressions) {
    const [A, P] = expressions
    const root = Math.sqrt((P*P)-(16*A))
    const s1 = (P + root)/4;
    const s2 = (P - root)/4;   
    return [s2, s1]
}
```
## Arrow Functions
```javascript
function modifyArray(nums) {
    return nums.map(num => num%2 === 0 ? num * 2 : num * 3)
}
```