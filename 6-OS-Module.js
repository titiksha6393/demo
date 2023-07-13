const os = require('os')
const currentOS = {
    userInfo: os.userInfo(),
    hostname: os.hostname(),
    release: os.release(),
    uptime: os.uptime(),
    version: os.version(),
    networkInterface: os.networkInterfaces()
}

console.log(currentOS);