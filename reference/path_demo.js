const path = require('path');

// Base name
console.log('Base name: ', path.basename(__filename));

// Directory Name
console.log('Directory Name: ', path.dirname(__filename));

// File Extension
console.log('File Extension: ', path.extname(__filename));

// Create path object
console.log('Create path object: ', path.parse(__filename).base);

// Concatenate paths
console.log('Concatenate paths: ', path.join(__dirname, 'test', 'hello.html'));