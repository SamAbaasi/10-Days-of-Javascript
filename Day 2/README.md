# Day 2
## Conditional Statements: If-Else
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
## Conditional Statements: Switch
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
## Loops
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