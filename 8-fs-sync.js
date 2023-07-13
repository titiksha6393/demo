const {readFileSync, writeFileSync} = require('fs')

console.log('Start');
const firstFile = readFileSync('./content/first.txt', 'utf-8');
const secondFile = readFileSync('./content/second.txt', 'utf-8');
console.log('Middle');
console.log(firstFile);
console.log(secondFile);

writeFileSync(
    './content/subfolder/write.txt',
    `Result : ${firstFile}, ${secondFile}`,
    {flag: 'a'}, 
    );

console.log('Finish')

