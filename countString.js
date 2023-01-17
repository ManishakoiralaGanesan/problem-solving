
function count(str) {
    let list = new Map();
    for (let index = 0; index < str.length; index++) {
        if (str[index] != ' ') {
            list.set(str[index], 0);
        }
    }

    for (let [key, value] of list) {
        for (let index = 0; index < str.length; index++) {
            if (key == str[index]) {
                value += 1
            }
        }
        list.set(key, value)
    }
    return list
}
let str = "Good Morning";
let countObj = count(str);
console.log(countObj);