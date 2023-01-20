function findIpValid(ipaddress) {
    let ip = ipaddress.split(".");
    let checkIp = 0;
    ip.forEach(element => {
        if (parseInt(element) > 255) {
            checkIp = 1;
            return;
        }
    });

    if (checkIp == 0 && ip.length == 4) {
        return true;
    }
    return false
}

let isValidIp = findIpValid("255.0.301.1");
console.log(isValidIp);