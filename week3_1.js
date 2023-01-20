function findNextGreaterElement(array) {
    let value = '';
    for (let index = 0; index < array.length; index++) {
        let greaterValue = -1;
        for (let index1 = index + 1; index1 < array.length; index1++) {
            if (array[index] < array[index1]) {
                greaterValue = array[index1];
                break;
            }
        }
        value += array[index] + " => " + greaterValue + "\n";
    }
    return value;
}
let list = [13, 7, 6, 12];
let findGreater = findNextGreaterElement(list);
console.log(findGreater);