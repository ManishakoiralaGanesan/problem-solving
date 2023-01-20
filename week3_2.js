
function findIpValid(ipaddress) {
    let ip = ipaddress.split(".");
    let checkIp = 0;
    ip.forEach(element => {
        if (parseInt(element) > 255) {
            checkIp = 1;
            return;
        }
    });

    if (checkIp == 1 || ip.length != 4) {
        return false;
    }
    return true
}

let isValidIp = findIpValid("255.0.0.1");
console.log(isValidIp);