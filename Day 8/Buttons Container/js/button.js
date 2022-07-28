const array = ["1", "2", "3", "6", "9", "8", "7", "4"];
const numbers = ["1", "2", "3", "6", "9", "8", "7", "4"];

const rotate = function() {
    let last = array[7]
    array.pop()
    array.unshift(last)
    for (let i = 0; i < 8; i++) {
        document.getElementById("btn" + numbers[i]).innerText = array[i];
    }
}