
function sumOfBiggestNumber(number1, number2) {
    let num1, num2;

    if (number1.length > number2.length) {
        num1 = number1;
        num2 = number2;
    }
    else {
        num1 = number2;
        num2 = number1
    }

    let length = num1.length;
    let diff = num1.length - num2.length;

    let sum = [];
    let carry = 0;

    for (let index = length - 1; index >= 0; index--) {
        let index2 = index - diff;
        let add = parseInt(num1[index]) + parseInt(index2 >= 0 ? num2[index2] : 0) + carry;

        carry = Math.floor(add / 10);
        let remain = add % 10;
        sum[index] = index == 0 ? (remain + carry * 10).toString() : sum[index] = remain.toString();
    }

    return sum.join("");
}
let num1 = "8888";
let num2 = "666666";

let additon = sumOfBiggestNumber(num1, num2)

console.log(additon);