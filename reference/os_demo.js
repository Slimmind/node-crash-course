const os = require('os');

// Platform
console.log('Platform: ', os.platform());

// CPU Architecture
console.log('CPU Architecture: ', os.arch());

// CPU Core Info
console.log('CPU Core Info: ', os.cpus());

// Free Memory
console.log('Free Memory: ', os.freemem());

// Total Memory
console.log('Total Memory: ', os.totalmem());

// Home Directory
console.log('Home Directory: ', os.homedir());

// Uptime
console.log('Uptime', os.uptime());