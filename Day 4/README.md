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