const url = require('url');

const myUrl = new URL('http://mysite.com:8080/hello.html?id=100&status=active');

// Serialized URL
console.log('Serialized URL: ', myUrl.href);

// Host (root domain)
console.log('Host (root domain): ', myUrl.host);

// Hostname (does not get post)
console.log('Hostname: ', myUrl.hostname);

// Pathname
console.log('Pathname: ', myUrl.pathname);

// Serialized query
console.log('Serialized query: ', myUrl.search);

// Params object
console.log('Params object: ', myUrl.searchParams);

// Add parameters
myUrl.searchParams.append('abc', '123');
console.log('Add parameters: ', myUrl.searchParams);

// Loop through parameters
myUrl.searchParams.forEach((value, name) => console.log(`Loop through parameters ${name}: ${value}`));