# Day 7
## Regular Expressions I
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
## Regular Expressions II
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
## Regular Expressions III
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