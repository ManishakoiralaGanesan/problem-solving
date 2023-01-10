function SumTwo(array, target) {
    let newList = [];
    for (let index = 0; index < array.length; index++) {
        for (let index1 = index + 1; index1 < array.length; index1++) {
            if (array[index] + array[index1] == target) {
                newList.push(index, index1)
            }
        }

    }
    return newList;
}

let indexes = SumTwo([3, 2, 4], 6);
console.log(indexes);