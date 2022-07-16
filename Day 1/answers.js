// #1.Arithmetic Operators
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

// #2.Factorial Functions
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
// #3.Let and Const
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
