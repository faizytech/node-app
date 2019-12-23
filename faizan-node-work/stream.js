var fs = require('fs');
var readableStream = fs.createReadStream('./tmp/test.txt');
var writableStream = fs.createWriteStream('./tmp/test1.txt');

// readableStream.setEncoding('utf8');

readableStream.on('data', function(chunk) {
    console.log(chunk)
    writableStream.write(chunk);
});
// const fs = require('fs');

// async function logChunks(readable) {
//   for await (const chunk of readable) {
//     console.log(chunk);
//   }
// }

// const readable = fs.createReadStream(
//   'tmp/test.txt', {encoding: 'utf8'});
// logChunks(readable);

// Output:
// 'This is a test!\n'


// const handler = (data) => {
//     console.log(data);
// }
// process.stdin.on('data',handler);
