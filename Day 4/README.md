## Create a Rectangle Object
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
## Count Objects
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
## Classes
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